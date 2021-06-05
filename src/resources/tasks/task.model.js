const { v4: uuidv4 } = require("uuid");

class Task {
  constructor({
                id = uuidv4(),
                title = "TASK",
                order = "ORDER",
                description = "DESC",
                userId = "userId",
                boardId = "boardId",
                columnId = "columnId"
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task= {}) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;