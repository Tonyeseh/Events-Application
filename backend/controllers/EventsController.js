import { ObjectId } from "mongodb";
import dbClient from "../utils/db";

const getEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: new ObjectId(eventId) });

    if (!event) return res.status(404).json({ error: "Event not Found" });

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
  // if (location === 'physical' && !address) {
  //   return res
  //     .status(400)
  //     .json({ error: "address must ve provided for a physical event." });
  // }
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
      isPublished,
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
  const queryString = req.query;
  const result = await (await dbClient.eventsCollection())
    .find()
    .limit(6)
    .toArray();
  res.json({ events: result });
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await (
      await dbClient.eventsCollection()
    ).findOne({ _id: ObjectId(eventId) });
    if (!event) {
      res.status(404).json({ error: "Event not Found" });
      return;
    }
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
