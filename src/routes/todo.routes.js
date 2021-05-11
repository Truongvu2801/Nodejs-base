const express = require("express");
import TodoController from "../controllers/todo.controller";

const router = express.Router();

router.get("/", (res, req) => TodoController.getAllTodos());

export default router;