const tasksRepo = require("./task.memory.repository");

const getAll = (boardId) => tasksRepo.getAll(boardId);
const getByID = (boardId, id) => tasksRepo.getByID(boardId, id);
const createOne = (task) => tasksRepo.createOne(task);
const updateOne = (data) => tasksRepo.updateOne(data);
const deleteOne = (boardId, id) => tasksRepo.deleteOne(boardId, id);
const deleteAllInBoard = (boardId) => tasksRepo.deleteAllInBoard(boardId);
const userUnAssign = (userId) => tasksRepo.userUnAssign(userId);

module.exports = { getAll, getByID, createOne, updateOne, deleteOne, deleteAllInBoard, userUnAssign };