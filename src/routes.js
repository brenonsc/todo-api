const { Router } = require("express");
const TodoController = require("./controllers/TodoController");

const routes = Router();

routes.get("/todos", TodoController.index);
routes.get("/todos/:id", TodoController.show);
routes.post("/todos", TodoController.store);
routes.put("/todos/:id", TodoController.update);
routes.delete("/todos/:id", TodoController.delete);

module.exports = routes;
