import express from "express";
import TaskController from "../controllers/taskController.js";

const routes  = express.Router();

routes.get("/task", TaskController.listarTasks);
routes.post("/task", TaskController.criartTask);
routes.put("/task/:id", TaskController.atualizarTask);
routes.delete("/task/:id", TaskController.deleteTask);

export default routes;