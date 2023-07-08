const  quizDB= [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey text MArkup LAnguage",
        c: "HyperText Makeup LAnguage",
        d: "Hyper Text MArkup LAnguage",
        ans: "ans4"

    },    {
        question: "Q1: What is the full form of CSS?",
        a: "Cascading style sheets",
        b: "Cascading style shit",
        c: "Cascading style shoe",
        d: "Cascading style sleep",
        ans: "ans1"

    },    {
        question: "Q1: What is the full form of Http?",
        a: "Hyper text transfer protocol",
        b: "Hyper next transfer protocol",
        c: "Hyper trn transfer protocol",
        d: "Hyper test transfer protocol",
        ans: "ans1"

    },    {
        question: "Q1: What is the full form of JS?",
        a: "Javascript",
        b: "John Scully",
        c: "JSON",
        d: "No idea",
        ans: "ans1"

    },

  
]

const question =document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const ShowScore = document.querySelector('#ShowScore');


let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{

    const questionList =  quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer =curAnsElem.id;
        }
       
      });
       return answer;
};

const deselectAll =() =>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked = false;
    })
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    }
    
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        ShowScore.innerHTML=`
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        ShowScore.classList.remove('ScoreArea');
            }
});