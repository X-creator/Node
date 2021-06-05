const {deleteAllInBoard} = require("../tasks/task.service");

let boards = [
  {
    "id": "board1",
    "title": "board1-title",
    "columns": [
      {
        "id": "board1-column1",
        "title": "column1",
        "order": "1"
      },
      {
        "id": "board1-column2",
        "title": "column2",
        "order": "2"
      },
      {
        "id": "board1-column3",
        "title": "column3",
        "order": "3"
      },
      {
        "id": "board1-column4",
        "title": "column4",
        "order": "4"
      }
    ]
  }, {
    "id": "board2",
    "title": "board2-title",
    "columns": [
      {
        "id": "board2-column1",
        "title": "column1",
        "order": "1"
      },
      {
        "id": "board2-column2",
        "title": "column2",
        "order": "2"
      },
      {
        "id": "board2-column3",
        "title": "column3",
        "order": "3"
      }
    ]
  }, {
    "id": "board3",
    "title": "board3-title",
    "columns": [
      {
        "id": "board3-column1",
        "title": "column1",
        "order": "1"
      },
      {
        "id": "board3-column2",
        "title": "column2",
        "order": "2"
      },
      {
        "id": "board3-column3",
        "title": "column3",
        "order": "3"
      },
      {
        "id": "board3-column4",
        "title": "column4",
        "order": "4"
      },
      {
        "id": "board3-column5",
        "title": "column5",
        "order": "5"
      }
    ]
  }, {
    "id": "board4",
    "title": "board4-title",
    "columns": [
      {
        "id": "board4-column1",
        "title": "column1",
        "order": "1"
      },
      {
        "id": "board4-column2",
        "title": "column2",
        "order": "2"
      }
    ]
  }, {
    "id": "board5",
    "title": "board5-title",
    "columns": [
      {
        "id": "board5-column1",
        "title": "column1",
        "order": "1"
      },
      {
        "id": "board5-column2",
        "title": "column2",
        "order": "2"
      },
      {
        "id": "board5-column3",
        "title": "column3",
        "order": "3"
      }
    ]
  }
];


const getAll = async () => boards;
const getByID = async (id) => boards.find(board => board.id === id);
const createOne = async (board) => {
  boards.push(board);
  return board;
};
const updateOne = async (data) => {
  boards = boards.map(board => board.id === data.id ? data : board);
  return boards.find(board => board.id === data.id);
};
const deleteOne = async (id) => {
  boards = boards.filter(board => board.id !== id);
  deleteAllInBoard(id);
};

module.exports = { getAll, getByID, createOne, updateOne, deleteOne };
