const boardsRepo = require("./board.memory.repository");

const getAll = () => boardsRepo.getAll();
const getByID = (id) => boardsRepo.getByID(id);
const createOne = (board) => boardsRepo.createOne(board);
const updateOne = (data) => boardsRepo.updateOne(data);
const deleteOne = (id) => boardsRepo.deleteOne(id);

module.exports = { getAll, getByID, createOne, updateOne, deleteOne };
