import { ObjectId } from "mongodb";
import dbClient from "../utils/db";

export default class UsersController {
  static async getProfile(req, res) {
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
      media: { profilePics: user.profilePics, profileCover: user.profileCover },
      personalInfo: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        website: user.website,
        company: user.company,
        aboutMe: user.aboutMe,
      },
      contactInfo: {
        phoneNumber: user.phoneNumber,
        address: user.address,
        country: user.country,
        city: user.city,
      },
      socialMedia: {
        instagram: user.instagram,
        facebook: user.facebook,
        twitter: user.twitter,
      },
      preferences: {},
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
      aboutMe,
      phoneNumber,
      address,
      city,
      country,
      twitter,
      facebook,
      instagram,
    } = req.body;

    if (!userEmail) return res.status(403).json({ error: "Forbidden" });

    try {
      const user = await (
        await dbClient.usersCollection()
      ).findOne({ email: userEmail });
      if (!user) return res.status(403).json({ error: "Forbidden" });

      const profilePics = req.files.profilePics
        ? req.files.profilePics[0].path
        : user.profilePics;
      const profileCover = req.files.profileCover
        ? req.files.profileCover[0].path
        : user.profileCover;

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
            aboutMe,
            phoneNumber,
            address,
            city,
            country,
            profileCover,
            profilePics,
            facebook,
            twitter,
            instagram,
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
