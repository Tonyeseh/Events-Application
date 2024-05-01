import { ObjectId } from "mongodb";
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

  static async getUser(req, res) {
    const { userId } = req.params;

    const user = await (
      await dbClient.usersCollection()
    ).findOne(new ObjectId(userId));
    if (!user) return res.status(404).json({ error: "Not found" });

    console.log(user);

    res.json({
      id: user._id,
      profilePics: user.profilePics,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  }

  static async updateUser(req, res) {
    const { userEmail } = req;
    console.log(userEmail);
    const {
      firstName,
      lastName,
      website,
      company,
      phoneNumber,
      address,
      city,
      country,
      profilePics,
      profileCover,
    } = req.body;

    if (!userEmail) return res.status(403).json({ error: "Forbidden" });

    try {
      const user = await (
        await dbClient.usersCollection()
      ).findOne({ email: userEmail });
      if (!user) return res.status(403).json({ error: "Forbidden" });

      const result = await (
        await dbClient.usersCollection()
      ).updateOne(
        { email: user.email },
        {
          $set: {
            firstName,
            lastName,
            website,
            company,
            phoneNumber,
            address,
            city,
            country,
            profileCover,
            profilePics,
          },
        }
      );
      console.log(result);
      return res.status(200).json({ result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong!" });
    }
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
