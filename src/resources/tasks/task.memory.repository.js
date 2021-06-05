let tasks = [
  {
    "id": "task1",
    "title": "task1",
    "order": "1",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000007",
    "boardId": "board1",
    "columnId": "board1-column1"
  },
  {
    "id": "task2",
    "title": "task2",
    "order": "2",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000007",
    "boardId": "board1",
    "columnId": "board1-column1"
  },
  {
    "id": "task3",
    "title": "task3",
    "order": "3",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000007",
    "boardId": "board1",
    "columnId": "board1-column2"
  },
  {
    "id": "task4",
    "title": "task4",
    "order": "4",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000007",
    "boardId": "board1",
    "columnId": "board1-column2"
  },
  {
    "id": "task5",
    "title": "task5",
    "order": "5",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000008",
    "boardId": "board2",
    "columnId": "board2-column1"
  },
  {
    "id": "task6",
    "title": "task6",
    "order": "6",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000008",
    "boardId": "board2",
    "columnId": "board2-column"
  },
  {
    "id": "task7",
    "title": "task7",
    "order": "7",
    "description": "blah-blah-blah",
    "userId": "609bdad1fc13ae46fb000008",
    "boardId": "board2",
    "columnId": "board2-column2"
  }
];

const getAll = async (boardId) => tasks.filter(task => task.boardId === boardId);
const getByID = async (boardId, id) => tasks.find(task => task.id === id);
const createOne = async (task) => {
  tasks.push(task);
  return task;
};
const updateOne = async (data) => {
  tasks = tasks.map(task => (task.id === data.id && task.boardId === data.boardId) ? data : task);
  return tasks.find(task => task.id === data.id && task.boardId === data.boardId);
};
const deleteOne = async (boardId, id) => {
  tasks = tasks.filter(task => task.id !== id);
};
const deleteAllInBoard = async (boardId) => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};
const userUnAssign = async (userId) => {
  tasks = tasks.map(task => task.userId === userId ? { ...task, userId: null } : task);
};

module.exports = { getAll, getByID, createOne, updateOne, deleteOne, deleteAllInBoard, userUnAssign };