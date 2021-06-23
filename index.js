const input=require('readline-sync');

let questions=["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5+3)/2*10=?","Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2?", "What is the minimum crew size for the ISS?"];

let correctAnswers=["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];

function askForName() {
let candidateName=input.question("What is your name?");
console.log("Hello", candidateName);
}

function askQuestion() {
for(let i=0; i<5;i++){
  candidateAnswers.push(input.question(questions[i]));
if(candidateAnswers[i]!=correctAnswers[i]){
 console.log(`${candidateAnswers[i]} is incorrect. The correct answer is ${correctAnswers[i]}.`);
  } else {
    console.log(`${candidateAnswers[i]} is correct!`);
  }
 }
}

function gradeQuiz(candidateAnswers){
  let grade=0;
  console.log(candidateAnswers);
for(let i=0; i<5;i++){
if(candidateAnswers[i]==correctAnswers[i]){
grade++;
  } else {
    grade;
  }
}

let percentage=(grade/questions.length)*100;
if (percentage>=80){
  console.log(`You passed the quiz!`);
} else {
  console.log(`You failed the quiz.`);
};
console.log(`Your grade is ${percentage}%`);
return grade;
}

function runProgram() {
  askForName();  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}