import express from "express";
import tasks from "./taskRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Minha Primeira CRUD"));

    app.use(express.json(), tasks);
};

export default routes;