import { Router } from "express";
import AuthControllers from "../controllers/AuthControllers";
import refreshTokenController from "../controllers/refreshTokenController";

const authRouter = Router()

authRouter.post('/register', AuthControllers.authRegister)
authRouter.post('/login', AuthControllers.authLogin)
authRouter.get('/logout', AuthControllers.authLogout)
authRouter.post('/reset-password', AuthControllers.resetPassword)

authRouter.get('/refresh', refreshTokenController.handleRefreshToken)

export default authRouter
