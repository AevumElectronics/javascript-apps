//import { marked } from 'marked'
//MARKED DOESN'T WORK
const addBtn = document.getElementById("add"); //add note button
const notes = JSON.parse(localStorage.getItem("notes"));
//The getItem() method returns the value of the specified local storage item
//JSON.parse() to convert text into a JavaScript object or array

//if notes are present in the localstorage we scan the array and add all the notes
if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

//when we click add note we call the function addNewNote()
addBtn.addEventListener("click", () => {
    addNewNote();
});


function addNewNote(text = "") { //text="" adds an empty element
    const note = document.createElement("div"); 
    note.classList.add("note");
    //the above create a variable note
    //this variable consists in a new <div> with a class "note"
    //<div class="note"></div>
    //inside this <div> we put our generated HTML
    //far fa-edit  fas fa-trash-alt
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div> 
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;
    //"tools" is the bar with the buttons
    //${text ? "" : "hidden"} is a jquery with a conditional ternary operator (if-else)
    //if note has text we add an empty space inside the class, if there is no text
    //we add "hidden" to the class -> class="main hidden"
    //we do the opposite for the text area so if there is text we show <div> while 
    //if there's no text we show <textarea> but we hide <div>


    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    //create variables for the tools buttons
    
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    //create variables for the written text or the text we need to write

    textArea.value = text;
    main.innerHTML = marked(text);
    //Markdown is a lightweight markup language 
    //for creating formatted text using a plain-text editor.

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });
    //when you click edit you toggle both main & textarea visibility
    //showing one and hiding the other and viceversa

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });
    //when you click delete you remove the note and then 
    //you update the local storage (list of notes)

    textArea.addEventListener("input", (e) => {
        //while inside textarea we listen for input/event
        const { value } = e.target;
        main.innerHTML = marked(value);
        //we make a variable with the value of the input and we memorize it
        //inside the "main" class
        //when the input stops we update the local storage (list of notes)
        updateLS();
    });
    //Append an item to a list
    document.body.appendChild(note);
}

function updateLS() { //update local storage
    const notesText = document.querySelectorAll("textarea");
    //create a variable for all the textarea objects
    const notes = []; //array of notes
    //scan the notesText object and fills the notes array
    notesText.forEach((note) => {
        notes.push(note.value);
    });
    //Appends new elements to the end of an array
    
    localStorage.setItem("notes", JSON.stringify(notes));
    //store all the notes as strings
}