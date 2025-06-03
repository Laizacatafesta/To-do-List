import express from "express";
import TaskController from "../controllers/taskController.js";

const routes  = express.Router();

routes.get("/task", TaskController.listarTasks);
routes.post("/taks", TaskController.criartTask);

export default routes;