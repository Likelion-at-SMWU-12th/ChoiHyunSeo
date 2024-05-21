const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.ariaValueMax;
    toDoInput.value = "";
    paintToDo(newTodo)
}