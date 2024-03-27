import { ObjectId } from 'mongodb';
import dbClient from "../utils/db";

const UPLOAD_DIR = '/home/esehtony/Desktop/alx/Events-Application/backend/'

const getEvent = (req, res) => {
  res.send('this is the response');
};

const newEvent = async (req, res) => {
  const { userEmail } = req;

  const user = await (await dbClient.usersCollection()).findOne({ email: userEmail });

  if (!user) return res.status(403).json({ error: 'Forbidden' });

  const { title, category, type, session, location, address, description, ticket_type, tickets, isPublished = false, tags } = req.body;
  if (!title && !category && !type && !location && !description && !ticket_type && !session) {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  if (location === physical && !address) {
    return res.status(400).json({ error: 'address must ve provided for a physical event.' });
  }
  if (ticket_type === 'ticket' && !tickets) {
    res.status(400).json({ error: 'Please add tickets classes'});
    return;
  }
  const cover_img = req.file ? req.file.path : null;

  try{

  const event = await (await dbClient.eventsCollection()).insertOne({
    title,
    category,
    type,
    session,
    location,
    address,
    description,
    ticket_type,
    tickets,
    isPublished,
    tags,
    cover_img,
    userId: user._id,
  })
  res.status(201).json({ id: event.insertedId.toString() })
}
catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' })
}
};

const updateEvent = async (req, res) => {
  res.send('updated event');
};

const getEvents = (req, res) => {
  res.send('get this kinds of events');
};

const deleteEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
        const event = await (await dbClient.eventsCollection()).findOne({ _id: ObjectId(eventId) })
        if (!event) {
            res.status(404).json({ error: 'Event not Found' });
            return;
        }
        await (await dbClient.eventsCollection()).deleteOne(event)
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const publishEvent = async (req, res) => {
  const eventId = req.params.id;

  try {

  const event = await (await dbClient.eventsCollection()).findOne({ _id: ObjectId(eventId) })
  if (!event) {
    res.status(404).json({ error: 'Event not Found' })
    return;
  }
  await (await dbClient.eventsCollection()).updateOne(event, { $set: {isPublished: false}})
  res.status(200).json({
    ...event,
    isPublished: false,
  })
}
catch (error) {
    res.status(500).json({ error: 'Server encountered an error!' });
    console.error(error);
}
};

const unpublishEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
  
    const event = await (await dbClient.eventsCollection()).findOne({ _id: ObjectId(eventId) })
    if (!event) {
      res.status(404).json({ error: 'Event not Found' })
      return;
    }
    await (await dbClient.eventsCollection()).updateOne(event, { $set: {isPublished: true}})
    res.status(200).json({
      ...event,
      isPublished: true,
    })
  }
  catch (error) {
      res.status(500).json({ error: 'Server encountered an error!' });
      
};
}

export default {
  getEvent,
  getEvents,
  newEvent,
  updateEvent,
  deleteEvent,
  publishEvent,
  unpublishEvent,
};
