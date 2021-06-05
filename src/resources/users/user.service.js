const usersRepo = require("./user.memory.repository");

const getAll = () => usersRepo.getAll();
const getByID = (id) => usersRepo.getByID(id);
const createOne = (user) => usersRepo.createOne(user);
const updateOne = (data) => usersRepo.updateOne(data);
const deleteOne = (id) => usersRepo.deleteOne(id);

module.exports = { getAll, getByID, createOne, updateOne, deleteOne };
