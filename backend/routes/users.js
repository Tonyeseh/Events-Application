import { Router } from "express";
import UsersController from "../controllers/UsersController";
import verifyJWT from "../utils/verifyJWT";
import upload from "../utils/upload";

const usersRouter = Router();

usersRouter.get("/profile", verifyJWT, UsersController.getProfile);
usersRouter.post(
  "/profile",
  verifyJWT,
  upload.fields([
    { name: "profilePics", maxCount: 1 },
    { name: "profileCover", maxCount: 1 },
  ]),
  UsersController.updateUser
);
usersRouter.get("/interested", verifyJWT, UsersController.getInterestedEvents);
usersRouter.get("/myevents", verifyJWT, UsersController.getUserEvents);
usersRouter.get("/:userId", UsersController.getUser);
// usersRouter.put('/users/update-password', UsersController.updatePassword)
// usersRouter.put('/users/update-email')
// usersRouter.put('/users', UsersController.updateUser)
// usersRouter.put('/users/reset-password', UsersController.rest)

export default usersRouter;
