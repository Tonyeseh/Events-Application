import dbClient from "../utils/db";

export default class UsersController {
  static async getProfile(req, res) {
    console.log(req.userEmail);
    if (!req.userEmail) return res.status(403).json({ error: "Forbidden" });

    const user = await (
      await dbClient.usersCollection()
    ).findOne({ email: req.userEmail });

    if (!user) return res.status(403).json({ error: "Forbidden" });

    delete user.password;

    return res.status(200).json(user);
  }

  static async getInterestedEvents(req, res) {
    const { userEmail } = req;

    if (!userEmail) return res.status(403).json({ error: "Forbidden" });

    try {
      const user = await (
        await dbClient.usersCollection()
      ).findOne({ email: req.userEmail });

      if (!user) return res.status(403).json({ error: "Forbidden" });

      const eventIds = await (await dbClient.interestedCollection())
        .find({ userId: user._id })
        .toArray();
      const ev = await Promise.all(
        eventIds.map(async (element) => {
          const event = await (
            await dbClient.eventsCollection()
          ).findOne({ _id: element.eventId });
          if (event) return { ...event, interested: true };
        })
      );
      const evs = ev.filter((e) => e);
      const events = await Promise.all(
        evs.map(async (e) => {
          const interestCount = await (
            await dbClient.interestedCollection()
          ).countDocuments({ eventId: e._id });
          e.interestCount = interestCount;
          return e;
        })
      );

      res.json({ events });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  }

  static async getUserEvents(req, res) {
    const { userEmail } = req;
    if (!userEmail) return res.status(403).json({ error: "Forbidden" });

    try {
      const user = await (
        await dbClient.usersCollection()
      ).findOne({ email: userEmail });
      if (!user) return res.status(403).json({ error: "Forbidden" });
      const userEvents = await (await dbClient.eventsCollection())
        .find({ userId: user._id })
        .toArray();

      const ev = await Promise.all(
        userEvents.map(async (e) => {
          const interestCount = await (
            await dbClient.interestedCollection()
          ).countDocuments({ eventId: e._id });
          e.interestCount = interestCount;
          return e;
        })
      );

      return res.json({ events: userEvents });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong!" });
    }
  }
}
