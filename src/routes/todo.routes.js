const express = require("express");
const { getAllTodos } = require("../controllers/todo.controller.js");

const router = express.router();

router.get("/", getAllTodos);
