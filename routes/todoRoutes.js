
const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {createTodo, getTodos, getTodo, updateTodo, deleteTodo} = require("../controllers/todoController");

router.post("/", auth, createTodo);
router.get("/", auth, getTodos);
router.get("/:id", auth, getTodo);
router.put("/:id", auth, updateTodo); 

router.delete("/:id", auth, deleteTodo);

module.exports = router;
