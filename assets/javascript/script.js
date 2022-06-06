var timeEl = document.getElementById("Timeleft");
var Timeleftcount=30;
var startButton=document.getElementById("startButton");
var BtnContainer=document.getElementById("BtnContainer");
var questionText=document.getElementById("question-text")


var question=document.querySelector(".questionPart");
var Splitt=document.createElement("h2");
var Question1=document.createElement("x");
var Question2=document.createElement("x");






console.log(question);
question.appendChild(Splitt)
question.appendChild(Question1)
question.appendChild(Question2)
question.appendChild(Question3)
question.appendChild(Question4);




function checkAnswer(o){
    // var element =o.target;
    // if (element.className==="btn"){
    //     console.log(element.dataset.answer)
    // }
    var correct = document.getElementById('correct')
    var userChoice = o.target.dataset.correct;
    if(userChoice == "true"){
        console.log('yes')
    }else {
        console.log("bad")
        secondsLeft -=10;
    }
    currentQuestionIndex++;

    if(currentQuestionIndex<questions.length) {
        showQuestion()
}
}


function setTime() {
    var timeInterval = setInterval(function(){
        Timeleftcount--;
        timeEl.textContent= Timeleftcount + "Second(s)";

        if(Timeleftcount<=0 || currentQuestionIndex >= question.length ){
            clearInterval(timeInterval);
        }
    },1000);
}


startButton.addEventListener("click", quizstart);

function quizstart(){
    console.log("Quiz has started");
    startButton.setAttribute('style','display: none');
    setTime();
    questionListener();
}

var questionAnswerContainer=[
    {
        Qustion: "1+1=?",
        answers: [
            {text: "0", correct:true},
            {text: "1", correct:false},
            {text: "2", correct:false},
            {text: "3", correct:false}
        ]
    },

    { 
        Qustion: "Is Jon hot??",
        answers: [
            {text: "hot", correct:true},
            {text: "hot", correct:false},
            {text: "hot", correct:false},
            {text: "hot", correct:false}
        ]
    },
]


// function questionListener(){
//     console.log("Question listner function started")
//     for (let i = 0; i < questionAnswerContainer.length; i++) {
//         newDiv.textContent = questionAnswerContainer[i].Qustion;
//         console.log(newDiv) 
//         for (let y = 0; y< 4; y++) {
//             Question1.textContent = questionAnswerContainer[i].Answers[y];
//             y++;
//             Question2.textContent = questionAnswerContainer[i].Answers[y];
//             y++;    
//         }
//     }
// }


function questionListener(){
    questionText.innerText= questions[currentQuestionIndex].question;
   var answersArrEl = document.getElementsByClassName('btn')
   console.log(answersArrEl)
   answerButtonElement.setAttribute("class","")
   for(i=0; i<answersArrEl.length; i++){
       answersArrEl[i].textContent=questions[currentQuestionIndex].answers[i].text;
       answersArrEl[i].setAttribute("data-correct", questions[currentQuestionIndex].answers[i].correct)
       answersArrEl[i].addEventListener("click", checkAnswer)
   }
}