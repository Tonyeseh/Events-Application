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
      // const events = ev.filter((e) => e);

      res.json({ events: ev });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  }
}
