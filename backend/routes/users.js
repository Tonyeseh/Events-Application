import { Router } from "express";
import UsersController from "../controllers/UsersController";
import verifyJWT from "../utils/verifyJWT";

const usersRouter = Router();

usersRouter.get("/profile", verifyJWT, UsersController.getProfile);
usersRouter.post("/profile", verifyJWT, UsersController.updateUser);
usersRouter.get("/interested", verifyJWT, UsersController.getInterestedEvents);
usersRouter.get("/myevents", verifyJWT, UsersController.getUserEvents);
// usersRouter.put('/users/update-password', UsersController.updatePassword)
// usersRouter.put('/users/update-email')
// usersRouter.put('/users', UsersController.updateUser)
// usersRouter.put('/users/reset-password', UsersController.rest)

export default usersRouter;
