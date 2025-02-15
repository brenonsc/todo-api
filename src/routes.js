const { Router } = require("express");
const TodoController = require("./controllers/TodoController");
const UserController = require("./controllers/UserController");

const routes = Router();

// Users routes
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

// Todos routes
routes.get("/todos", TodoController.index);
routes.get("/todos/:id", TodoController.show);
routes.post("/todos", TodoController.store);
routes.put("/todos/:id", TodoController.update);
routes.delete("/todos/:id", TodoController.delete);

module.exports = routes;
