const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
//we made the variables for the input, all the list of to-do & the form that contains both
const todos = JSON.parse(localStorage.getItem("todos"));
//The getItem() method returns the value of the specified local storage item
//JSON.parse() to convert text into a JavaScript object or array

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}
//if local storage has todos, scan the array and call the function to add to-do addTodo() 

// enter|submit will trigger the event and add an element to the list with addTodo()
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //with preventDefault() the default action that belongs to the event will not occur.
    //if we submit without writing we add an empty element to the list
    //the function stop us from doing that
    //if we submit && the text isn't empty then we add an element to the list
    addTodo(); 
});


function addTodo(todo) {
    //set the todoText variable as the value inside the input block
    let todoText = input.value;

    //if there is a todo parameter we are printing the list from LS so,
    //we copy the text from the todo array and we store it into the variable todoText
    if (todo) {
        todoText = todo.text;
    }

    //
    if (todoText) {
        //the element of the to-do list are in the form of <li>
        const todoEl = document.createElement("li");

        //if the element is stored and is completed we add a class "completed"
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        //put the text inside the todoEl array
        todoEl.innerText = todoText;

        //when we click over the element of the array we toggle between completed and not completed
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            //every change we do on the array needs to be saved updating local storage
            updateLS();
        });

        //contextmenu is the event we call when we click the right mouse button
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            //with preventDefault() the default action that belongs to the event will not occur.
            // .remove() remove the element of the array todoEl
            todoEl.remove();
            //every change we do on the array needs to be saved updating local storage
            updateLS();
        });

        todosUL.appendChild(todoEl); //Append an item at the end of the list
        //after we add a new item we want to empty the input form
        input.value = "";
        //we update the local storage (list of to-do todosUl)
        updateLS();
    }
}

function updateLS() { //update local storage
    const todosEl = document.querySelectorAll("li");
    //create a variable for all the to-do list objects
    const todos = []; //array of to-do

    //scan the todosEl object and fills the todos array
    todosEl.forEach((todoEl) => {
        //push() Appends new elements to the end of an array
        todos.push({
            text: todoEl.innerText, // ???
            completed: todoEl.classList.contains("completed"),//???
        });
    });
    //store all the notes as strings
    localStorage.setItem("todos", JSON.stringify(todos));
}