const quizData = [
    {
        question: "Who is the CEO of SpaceX?",
        a: "Elom Fusk",
        b: "Elon Lust",
        c: "Melon Trust",
        d: "Elon Musk",
        correct: "d",
    },
    {
        question: "What is the capital of Italy?",
        a: "Firenze",
        b: "Roma",
        c: "Milano",
        d: "Venezia",
        correct: "b",
    },
    {
        question: "Who painted the Sistine Chapel?",
        a: "Michelangelo",
        b: "Leonardo",
        c: "Donatello",
        d: "Raffaello",
        correct: "a",
    },
    {
        question: "Never gonna give you up Never gonna let you ____",
        a: "Fly",
        b: "Down",
        c: "Dissolve",
        d: "Cry",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question"); //question element 
const a_text = document.getElementById("a_text");   //answer element
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");    //the button has been pushed?
const answerEls = document.querySelectorAll(".answer"); //there must be an answer selected
//The querySelectorAll() method returns all elements that matches a CSS selector

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers(); //clean the input radio

    const currentQuizData = quizData[currentQuiz]; //load the X element of the array
    //node.innerText Return the text content of a node
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    //The forEach() method calls a function for each element in an array.
    answerEls.forEach((answerEl) => { answerEl.checked = false;});
}

//when you push submit
//The addEventListener() method attaches an event handler to the element.
submitBtn.addEventListener("click", () => {
    // check to see the answer we select
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            //if correct then augment the score
        }

        //load next quiz
        currentQuiz++; 
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    //for each radio button we control what is checked
    //for the checked element we put the ID inside the variable "answer"
    return answer;
}