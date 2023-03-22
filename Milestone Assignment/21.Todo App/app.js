var todoInput = document.getElementById("todo-input");
var addTodoBtn = document.getElementById("add-todo-btn");
var todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", function () {
  var todoText = todoInput.value;

  var todoItem = document.createElement("li");

  todoItem.innerText = todoText;

  todoList.appendChild(todoItem);
  todoInput.value = "";
});
