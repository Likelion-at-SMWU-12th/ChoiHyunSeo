const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span,innerText - newTodo;
    const button = document.createElement("button");
    button.innerText = "😻";
    button.addEventListener("click", deleteToDo);
    li.appendChlid(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.ariaValueMax;
    toDoInput.value = "";
    paintToDo(newTodo)
}