const { v4: uuidv4 } = require("uuid");

class Board {
  constructor({
                id = uuidv4(),
                title = "TITLE",
                columns = []
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = Board.toCreate(columns);
  }

  static toCreate(columns) {
    return columns.map(item => !item.id ? { ...item, id: uuidv4() } : item);
  }
}

module.exports = Board;
