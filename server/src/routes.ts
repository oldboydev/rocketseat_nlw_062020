import express from "express";

import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();
const itemController = new ItemsController();
const pointsController = new PointsController();

routes.get("/items", itemController.index);


routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;