import express from "express";
import TaskController from "../controllers/taskController.js";

const routes  = express.Router();

routes.get("/tasks", TaskController.listarTasks);

export default routes;