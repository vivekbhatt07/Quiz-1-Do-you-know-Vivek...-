var chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question(chalk.blue("Enter your name : "));
var welcomeMessage = "Welcome ! " + userName + " to, DO YOU KNOW VIVEK ? "
console.log(welcomeMessage);
console.log("--------------------------------------------")

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("You entered : " + userAnswer);
  if (userAnswer === answer){
    console.log("Right !");
    score = score + 1;
  }else{
    console.log("Wrong !");
  }
  console.log("Score : " + score);
  console.log("--------------------------------------------")

}

var questionOne = {
  question : "My favourite color ? ",
  answer : "Red"
}

var questionTwo = {
  question : "My favourite marvel character ? ",
  answer : "Ironman"
}

var questionThree = {
  question : "My favourite mobile game ? ",
  answer : "Bgmi"
}

var questionFour = {
  question : "In which city do I live ? ",
  answer : "Rudrapur"
}

var questionFive = {
  question : "My favourite DC character ? ",
  answer : "Batman"
}

var questionSix = {
  question : "My favourite Subject ? ",
  answer : "Maths"
}

var questionSeven = {
question : "My favourite favourite singer? ",
answer : "Arijit singh "
}

var questionEight = {
  question : "My nick Name ? ",
  answer : "Monu"
}

var questionNine = {
  question : "My hobby ? ",
  answer : "Singing"
}
var questionTen = {
  question : "My favourite outdoor game ? ",
  answer : "Football"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
