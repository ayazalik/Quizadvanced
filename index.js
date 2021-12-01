var readlineSync=require('readline-sync');
const chalk=require('chalk');
var userName=readlineSync.question(chalk.yellow("Enter your good name  "))
console.log(chalk.yellow(" Hello welcome to play tech quiz  "+userName+ "\n------------------------------------------------- "))

var score=0;
var highScore=[{
  user:"Zain",
  score: 3},{
  user:"john",
  score: 2
}]
function play(optionanswer,question, answer)
{
  console.log(question);
  var userAnswer = readlineSync.keyInSelect(optionanswer,question);
  if(optionanswer[userAnswer] === answer)
  {
    console.log("Correct answer ")
    score=score+1
  }
  else
  {
    console.log("Wrong answer ")
  }
}
var questions =[{ question: "Who is the founder of Microsoft?", answer:"Bill Gates", options:['Elon Musk','Mark Zuckerberg','Bill Gates'] },
{question:"who is the founder of Facebook?",
answer: "Mark Zuckerberg", options:['Elon Musk','Mark Zuckerberg','Bill Gates']},
{question:"who is the founder of Tesla?", answer:"Elon Musk",options:['Elon Musk','Mark Zuckerberg','Bill Gates']}];
for(var i = 0;i < questions.length; i=i+1){
   play(questions[i].options, questions[i].question,questions[i].answer);
  console.log(chalk.red("Current score is "+score))
}
console.log(chalk.green("\nYour final score is "+score))
console.log(chalk.green("\nSCORE BOARD\n"+highScore[0].user+" ------------> "+highScore[0].score))