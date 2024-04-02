import { Router } from "express";
import IndexController from "../controllers/IndexController";

const indexRouter = Router();

// indexRouter.get('/status', IndexController.getStatus)
// indexRouter.get('/stats', IndexController.getStats)
indexRouter.get("/uploads/:fileName", IndexController.getImage);

export default indexRouter;
