const TodoService = require("../services/todo.service");
const TodoController = {};

TodoController.getAllTodos = (req, res) => {
  try {
    const todos = TodoService.getAllTodos();
    res.status(200).json({
      todos: todos
    });
  } catch (error) {
    res.status(400);
  }
};

export default TodoController;
