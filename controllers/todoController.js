
const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const todo = await Todo.create({
    ...req.body,
    userId: req.user.id
  });
  res.json(todo);
};

const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

const getTodo = async (req, res) => {
  const todo = await Todo.findOne({
    _id: req.params.id,
    userId: req.user.id
  });
  res.json(todo);
};

const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};


module.exports = { createTodo,getTodos,getTodo, updateTodo, deleteTodo };
