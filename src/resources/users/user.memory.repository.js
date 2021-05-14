const { userUnAssign } = require("../tasks/task.service");

let users = [
  {
    "id": "609bdad1fc13ae46fb000000",
    "name": "Aida Ridolfo",
    "login": "recontextualize",
    "password": "XxhRB9PNN"
  },
  {
    "id": "609bdad1fc13ae46fb000001",
    "name": "Darcy Pavluk",
    "login": "utilizesynergistic",
    "password": "QtVLqCIVxuo"
  },
  {
    "id": "609bdad1fc13ae46fb000002",
    "name": "Toni Hosburn",
    "login": "monetizewireless",
    "password": "DDIvaPsfO"
  },
  {
    "id": "609bdad1fc13ae46fb000003",
    "name": "Obed Southers",
    "login": "expediteseamless",
    "password": "jY2BJ6TB"
  },
  {
    "id": "609bdad1fc13ae46fb000004",
    "name": "Delmor Mee",
    "login": "cultivateB2C",
    "password": "5TyClfI9tpW"
  },
  {
    "id": "609bdad1fc13ae46fb000005",
    "name": "Bliss Pallatina",
    "login": "brandvisionary",
    "password": "EsaitXh"
  },
  {
    "id": "609bdad1fc13ae46fb000006",
    "name": "Tatiania McElane",
    "login": "harnessscalable",
    "password": "WAWYDwn4k"
  },
  {
    "id": "609bdad1fc13ae46fb000007",
    "name": "Vanny Andrasch",
    "login": "implementsynergistic",
    "password": "6G7z9Vh8BSns"
  },
  {
    "id": "609bdad1fc13ae46fb000008",
    "name": "Christal Jobes",
    "login": "matrixproactive",
    "password": "87d3cTQu9Neo"
  },
  {
    "id": "609bdad1fc13ae46fb000009",
    "name": "Harmon Keyho",
    "login": "e-enable24",
    "password": "qJnOPLjKHlRL"
  }
];

const getAll = async () => users;
const getByID = async (id) => users.find(user => user.id === id);
const createOne = async (user) => {
  users.push(user);
  return user;
};
const updateOne = async (data) => {
  users = users.map(user => user.id === data.id ? data : user);
  return users.find(user => user.id === data.id);
};
const deleteOne = async (id) => {
  users = users.filter(user => user.id !== id);
  userUnAssign(id);
};

module.exports = { getAll, getByID, createOne, updateOne, deleteOne };