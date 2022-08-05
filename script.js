const log = console.log;
const todoListContainer = document.getElementById("todo-list");
const addTodoBtn = document.getElementById("add-todo");
const todoTxtBox = document.getElementById("write-todo");

let newLi = [];
let newLabel = [];
let newButton = [];
let todoItem = {};

const createLabel = (item) => {
  log("Creating new label element");
  newLabel = document.createElement("label");
  newLabel.for = item._id;
  newLabel.innerHTML = item.description;
  newLi.appendChild(newLabel);
};

const createButton = (item) => {
  log("Creating new delete button.");
  newButton = document.createElement("button");
  newButton.id = item._id;
  newButton.class = "removeTodo";
  newButton.classList.add("fa-solid", "fa-trash-can");
};

const createElements = (array) => {
  log("Attempting to create new elements...");
  log(array);
  array.forEach((item) => {
    newLi = document.createElement("li");
    createLabel(item);
    createButton(item);
    newLi.appendChild(newButton);
    if (!document.body.contains(document.getElementById(newButton.id))) {
      log(
        `${newButton.id} is not yet displayed in DOM, adding todo item to list...`
      );
      todoListContainer.appendChild(newLi);
    }
  });
};

addTodoBtn.addEventListener("click", () => {
  todoItem = { description: todoTxtBox.value, done: false };
  postTodo(todoItem);
  getTodo();
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.class === "removeTodo") {
    let todoItem = document.getElementById(e.target.id).parentElement;
    todoListContainer.removeChild(todoItem);
    deleteTodo(e.target.id);
  }
});

getTodo();
