var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.querySelector("#qContainer");
var questionEl = document.querySelector ("#question");
var opt1 = document.querySelector ("#opt1");
var opt2 = document.querySelector ("#opt2");
var opt3 = document.querySelector ("#opt3");
var opt4 = document.querySelector ("#opt4");
var nextButton = document.querySelector ("#nextButton");
var resultCont = document.querySelector ("#result");

function loadQuestion(questionIdx){
  // gets index of each set of question and answers
  var q = questions[questionIdx];
  // prints out question
  questionEl.textContent = (questionIdx +1) + ". " + q.question;
  // allocates each answer in its place
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

function loadNextQuestion(){
  // checks to see if an answer was selected
  // if it wasn't it sends an alert and if it was the value is passed to the variable answer and
  // checked
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if(!selectedOption){
    alert("Please select an answer!");
  }
  var answer = selectedOption.value;

// if answer is correct, add 10 points
  if(questions[currentQuestion].answer == answer){
    score += 10;
  }

// otherwise falsee
  selectedOption.checked = false;
// go to next question
  currentQuestion++;

// second to last question
  if(currentQuestion == totalQuestions - 1){
    nextButton.textContent = "Finish";
  }
// when it reaches the end
  if(currentQuestion == totalQuestions){
    // this hides everything else to show result
    container.style.display ="none";

    // this allows for the result to be displayed as it was previously set to display:none
    resultCont.style.display = "";
    if (score ==60){
      resultCont.textContent = "Congratulations!: " + score + " points. You are a beast 🔥"
    } else {
      resultCont.textContent = "Your Score: " + score;
    }
  }
  loadQuestion(currentQuestion);
}
// initiates the first question
loadQuestion(currentQuestion);
