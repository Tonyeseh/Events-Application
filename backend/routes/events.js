import { Router } from "express";
import EventsController from "../controllers/EventsController";
import { authenticate } from "../utils/auth";
import upload from "../utils/upload";
import verifyJWT from "../utils/verifyJWT";

const eventRouter = Router()
eventRouter.get('/events/:id', EventsController.getEvent)
eventRouter.get('/events', EventsController.getEvents)
eventRouter.post('', verifyJWT, upload.single('event_cover_img'), EventsController.newEvent)
eventRouter.put('/events/:id', authenticate, EventsController.updateEvent)
eventRouter.get('/:id/publish', authenticate, EventsController.publishEvent)
eventRouter.get('/:id/unpublish', authenticate, EventsController.unpublishEvent)
eventRouter.delete('/:id', authenticate, EventsController.deleteEvent)


export default eventRouter
