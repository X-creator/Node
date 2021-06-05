const router = require("express").Router({ mergeParams: true });
const Task = require("./task.model");
const tasksService = require("./task.service");

router.route("/")
  .get(async (req, res) => {
    const { boardId } = req.params;
    const tasks = await tasksService.getAll(boardId);
    if (!tasks) res.status(404);
    res.json(tasks);
  })
  .post(async (req, res) => {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const task = new Task({ title, order, description, userId, boardId, columnId });
    const createdTask = await tasksService.createOne(task);
    res.status(201).send(createdTask);
  });

router.route("/:id")
  .get(async (req, res) => {
    const { boardId, id } = req.params;
    const task = await tasksService.getByID(boardId, id);
    if (!task) res.status(404);
    res.json(task);
  })
  .put(async (req, res) => {
    const { boardId, id } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const task = new Task({ id, title, order, description, userId, boardId, columnId });
    const updatedTask = await tasksService.updateOne(task);
    res.json(updatedTask);
  })
  .delete(async (req, res) => {
    const { boardId, id } = req.params;
    await tasksService.deleteOne(boardId, id);
    res.sendStatus(204);
  });

module.exports = router;
