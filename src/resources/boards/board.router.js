const router = require("express").Router();
const Board = require("./board.model");
const boardsService = require("./board.service");

router.route("/")
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
  .post(async (req, res) => {
    const { title, columns } = req.body;
    const board = new Board({ title, columns});
    const createdBoard = await boardsService.createOne(board);
    res.status(201).send(createdBoard);
  });

router.route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const board = await boardsService.getByID(id);
    if (!board) res.status(404);
    res.json(board);
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { title, columns } = req.body;
    const board = new Board({ id, title, columns });
    const updatedBoard = await boardsService.updateOne(board);
    res.json(updatedBoard);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    await boardsService.deleteOne(id);
    res.sendStatus(204);
  });

module.exports = router;
