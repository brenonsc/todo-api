const { Router } = require("express");
const TodoController = require("./controllers/TodoController");
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const authMiddleware = require("./middleware/auth");

const routes = Router();

//Auth routes
routes.post("/login", AuthController.login);

// Users routes
routes.post("/users", UserController.store);
routes.put("/users/:id", authMiddleware, UserController.update);
routes.delete("/users/:id", authMiddleware, UserController.delete);

// Todos routes
routes.get("/todos", authMiddleware, TodoController.index);
routes.get("/todos/:id", authMiddleware, TodoController.show);
routes.post("/todos", authMiddleware, TodoController.store);
routes.put("/todos/:id", authMiddleware, TodoController.update);
routes.delete("/todos/:id", authMiddleware, TodoController.delete);

module.exports = routes;
