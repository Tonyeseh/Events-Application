import { ObjectId } from "mongodb";
import dbClient from "../utils/db";

const addCount = async (events) => {
  for (let e of events) {
    const interestCount = await (
      await dbClient.interestedCollection()
    ).countDocuments({ eventId: e._id });
    e.interestCount = interestCount;
  }
  return events;
};

const getEvent = async (req, res) => {
  const { eventId } = req.params;
  const { user } = req;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: new ObjectId(eventId) });

    if (!event) return res.status(404).json({ error: "Event not Found" });

    if (
      user &&
      (await (
        await dbClient.interestedCollection()
      ).findOne({ userId: user._id, eventId: event._id }))
    )
      return res.json({ ...event, interested: true });

    return res.json(event);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: "Event not Found" });
  }
};

const newEvent = async (req, res) => {
  const { userEmail } = req;

  const user = await (
    await dbClient.usersCollection()
  ).findOne({ email: userEmail });

  if (!user) return res.status(403).json({ error: "Forbidden" });

  const {
    title,
    category,
    type,
    session,
    location,
    address,
    description,
    ticketType,
    tickets,
    isPublished = false,
    tags,
  } = req.body;
  for (const sess of session) {
    sess.startDate = new Date(sess.startDate);
    sess.endDate && sess.endDate === new Date(sess.endDate);
  }
  if (
    !title &&
    !category &&
    !type &&
    !location &&
    !description &&
    !ticketType &&
    !session
  ) {
    return res.status(400).json({ error: "Invalid payload" });
  }
  if (!address) {
    return res
      .status(400)
      .json({ error: "address must be provided for any event." });
  }
  if (ticketType === "ticket" && !tickets) {
    res.status(400).json({ error: "Please add tickets classes" });
    return;
  }
  const coverImg = req.file ? req.file.path : null;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).insertOne({
      title,
      category,
      type,
      session,
      location,
      address,
      description,
      ticketType,
      tickets,
      isPublished: isPublished ? true : isPublished,
      tags,
      coverImg,
      userId: user._id,
    });
    res.status(201).json({ id: event.insertedId.toString() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateEvent = async (req, res) => {
  res.send("updated event");
};

const getEvents = async (req, res) => {
  const { location } = req.query;

  const subQuery = {
    isPublished: true,
    "session.startDate": { $gt: new Date() },
  };

  const query = location && location === "online" ? { location } : {};

  let userInterests = [];
  try {
    if (req.user) {
      userInterests = await (await dbClient.interestedCollection())
        .find({ userId: req.user._id })
        .toArray();
    }
    userInterests = userInterests.map((e) => e.eventId.toString());
    const result = await (
      await dbClient.eventsCollection()
    )
      .find({ ...query, ...subQuery })
      .limit(6)
      .toArray();

    const ev = await addCount(result);
    const events = ev.map((e) => {
      return userInterests.includes(e._id.toString())
        ? { ...e, interested: true }
        : { ...e };
    });
    return res.send({ events });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: new ObjectId(eventId) });
    if (!event) {
      res.status(404).json({ error: "Event not Found" });
      return;
    }
    await (
      await dbClient.interestedCollection()
    ).deleteMany({ eventId: event._id });
    await (await dbClient.eventsCollection()).deleteOne(event);
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const publishEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: ObjectId(eventId) });
    if (!event) {
      res.status(404).json({ error: "Event not Found" });
      return;
    }
    await (
      await dbClient.eventsCollection()
    ).updateOne(event, { $set: { isPublished: false } });
    res.status(200).json({
      ...event,
      isPublished: false,
    });
  } catch (error) {
    res.status(500).json({ error: "Server encountered an error!" });
    console.error(error);
  }
};

const unpublishEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: ObjectId(eventId) });
    if (!event) {
      res.status(404).json({ error: "Event not Found" });
      return;
    }
    await (
      await dbClient.eventsCollection()
    ).updateOne(event, { $set: { isPublished: true } });
    res.status(200).json({
      ...event,
      isPublished: true,
    });
  } catch (error) {
    res.status(500).json({ error: "Server encountered an error!" });
  }
};

const addToInterested = async (req, res) => {
  const { eventId } = req.params;
  const { userEmail } = req;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: new ObjectId(eventId) });
    if (!event) return res.status(404).json({ error: "Event not Found!" });

    const user = await (
      await dbClient.usersCollection()
    ).findOne({ email: userEmail });
    if (!user) return res.status(403).json({ error: "Forbidden no user" });

    const alreadyInterested = await (
      await dbClient.interestedCollection()
    ).findOne({ userId: user._id, eventId: event._id });

    if (!alreadyInterested) {
      const result = await (
        await dbClient.interestedCollection()
      ).insertOne({
        userId: user._id,
        eventId: event._id,
      });
    }

    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeFromInterested = async (req, res) => {
  const { eventId } = req.params;
  const { userEmail } = req;
  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: new ObjectId(eventId) });
    if (!event) return res.status(404).json({ error: "Event not Found!" });

    const user = await (
      await dbClient.usersCollection()
    ).findOne({ email: userEmail });

    if (!user) return res.status(403).json({ error: "Forbidden" });

    await (
      await dbClient.interestedCollection()
    ).deleteOne({ userId: user._id, eventId: event._id });

    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  getEvent,
  getEvents,
  newEvent,
  updateEvent,
  deleteEvent,
  publishEvent,
  unpublishEvent,
  addToInterested,
  removeFromInterested,
};
