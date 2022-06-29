// Set time variable
var timeEl = document.getElementById("Timeleft");
var Timeleftcount=30;

// Set time function
function quizstart(){
    console.log("Quiz has started");
    startButton.setAttribute('style','display: none');
    currentQuestionIndex=0;
    var Timeleftcount=30;
    console.log(Timeleftcount);
    setTime();
    showQuestion();
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





function showQuestion(){
    questionText.innerHTML=questionAnswerContainer[currentQuestionIndex].Question;
    var answerButtonclass = document.getElementsByClassName('btn');
    console.log(answerButtonclass);
    for (i=0; i<answerButtonclass.length;i++){
        answerButtonclass[i].textContent=questionAnswerContainer[currentQuestionIndex].answers[i].text;
        answerButtonclass[i].setAttribute("data-correct",questionAnswerContainer[currentQuestionIndex].answers[i].correct)
        answerButtonclass[i].addEventListener("click",checkAnswer)
    }
}

function checkAnswer(event){
    // var element =o.target;
    // if (element.className==="btn"){
    //     console.log(element.dataset.answer)
    // }
    var correct = document.getElementById('correct')
    var userChoice = event.target.dataset.correct;
    if(userChoice == "true"){
        console.log('yes')
    }else {
        console.log("bad")
        Timeleftcount -=5;
    }
    currentQuestionIndex++;

    if(currentQuestionIndex<questionAnswerContainer.length) {
        showQuestion()
}
}


var BtnContainer=document.getElementById("BtnContainer");
var questionText=document.getElementById("question-text")
var startButton=document.getElementById("startButton");
startButton.addEventListener("click", quizstart);
var question=document.querySelector(".questionPart");
let currentQuestionIndex;

var questionAnswerContainer=[
    {
        Question: "1+1=?",
        answers: [
            {text: "0", correct:true},
            {text: "1", correct:false},
            {text: "2", correct:false},
            {text: "3", correct:false}
        ]
    },

    { 
        Question: "Is Jon hot??",
        answers: [
            {text: "hot", correct:true},
            {text: "hot", correct:false},
            {text: "hot", correct:false},
            {text: "hot", correct:false}
        ]
    },
]