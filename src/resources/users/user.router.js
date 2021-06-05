const router = require("express").Router();
const User = require("./user.model");
const usersService = require("./user.service");

router.route("/")
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const { name, login, password } = req.body;
    const user = new User({ name, login, password });
    const createdUser = await usersService.createOne(user);
    res.status(201).send(User.toResponse(createdUser));
  });

router.route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getByID(id);
    if (!user) res.status(404);
    res.json(User.toResponse(user));
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { name, login, password } = req.body;
    const user = new User({ id, name, login, password });
    const updatedUser = await usersService.updateOne(user);
    res.json(User.toResponse(updatedUser));
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    await usersService.deleteOne(id);
    res.sendStatus(204);
  });

module.exports = router;
