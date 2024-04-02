import { Router } from "express";
import EventsController from "../controllers/EventsController";
import { authenticate } from "../utils/auth";
import upload from "../utils/upload";
import verifyJWT from "../utils/verifyJWT";

const eventRouter = Router();
eventRouter.get("/:eventId", EventsController.getEvent);
eventRouter.get("", EventsController.getEvents);
eventRouter.post(
  "",
  verifyJWT,
  upload.single("coverImg"),
  EventsController.newEvent
);
eventRouter.put("/:eventId", authenticate, EventsController.updateEvent);
eventRouter.get(
  "/:eventId/publish",
  authenticate,
  EventsController.publishEvent
);
eventRouter.get(
  "/:eventId/unpublish",
  authenticate,
  EventsController.unpublishEvent
);
eventRouter.delete("/:eventId", authenticate, EventsController.deleteEvent);

eventRouter.get(
  "/:eventId/interested",
  verifyJWT,
  EventsController.addToInterested
);
eventRouter.get(
  "/:eventId/uninterested",
  verifyJWT,
  EventsController.removeFromInterested
);

export default eventRouter;
