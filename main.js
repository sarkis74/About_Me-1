'use strict';
var correctAnswer = 0;//defining correct answer variable
var userName, guessNumber, myNumber, guessStates; //defining global variables
var states = ['south carolina', 'florida']; 
var gameQuestion = [ //array that contains the questions, the correct responses, and incorrect responses for first 5 questions
  ['Does H\'Liana like to hike?', 'Is H\'Liana originally from Seattle?', 'Does H\'Liana like peanuts?', 'Is H\'Liana tall?', 'Is H\'Liana\'s dog the cutest dog in the world?'],
  ['yes', 'no', 'no', 'no', 'yes', 'y', 'n', 'n', 'n', 'y'], //correct responses for first 5 questions
  ['no', 'yes', 'yes', 'yes', 'no', 'n', 'y', 'y', 'y', 'n'], //incorrect responses for first 5 questions
];
var gameResponseCorrect = [ //array containing responses if user answers correctly for first 5 questions
  'Correct! In her spare time, she goes on backpacking trips both nearby and around the US!', 
  'Correct! She is originally from Charleston, South Carolina.', 
  'Correct. She is allergic.', 
  'Correct. She is only 5 foot 1.', 
  'OF COURSE HE IS!!'
];
var gameResponseIncorrect = [ //array containing responses if user answers incorrectly for first 5 questions
  'Actually, she loves hiking!', 
  'Nope! She is originally from Charleston, South Carolina.', 
  'Incorrect! She is actually allergic.', 
  'Incorrect. Unfortunately she is only 5 foot 1.', 
  'No!?? Did you mean to say yes?!'
];
var idName = [ //array containing ID tags that'll be referenced in HTML
  ['hike', 'seattle', 'peanuts', 'tall', 'dogCute'], //ID tags that pulls user response to webpage
  ['hikeResponse', 'seattleResponse', 'peanutsResponse', 'tallResponse', 'dogCuteResponse'] //ID tags that pull correct response to webpage
];
var userAnswer = new Array(5); //creates an array with 5 possible answers for guessing game

var userName = function(){ //creates function to ask for username
  do{
    userName = prompt('Welcome! What\'s your name?');
    console.log('Name: ' + userName);
  } while(!userName); //makes sure user provides an input
  return userName;
}

var askQuestion = function(){ //prompts user with question pulled from array and returns lowercase answer
  userAnswer[i] = (prompt(gameQuestion[0][i])).toLowerCase();
  document.getElementById(idName[0][i]).innerHTML = userAnswer[i];//allows answer to be pulled in HTML
  return userAnswer;
}

var randomNumber = function(){ //function to create random number
  myNumber = Math.floor(Math.random() * 11); //creates a random number and assigns it to a variable
  document.getElementById("myNumber").innerHTML = myNumber;//allows this number to be printed on a page
  console.log('Favorite number: ' + myNumber);//logs to console
  return myNumber;
}

var askNumberQuestion = function(){ //asks random number question and returns value, allows it to be called thru HTML
  guessNumber = parseInt(prompt('Guess my favorite number between 0 and 10!'), 10);
  document.getElementById("guessNumber").innerHTML = guessNumber;
  return guessNumber;
}

var askStateQuestion = function(){
  guessStates = (prompt('Guess a state I\'ve lived in besides Washington!')).toLowerCase();
  document.getElementById("statesLived").innerHTML = guessStates;
  return guessStates;
}

//Prompting for username, and providing instructions
userName();
alert('Nice to meet you, ' + userName + '! Let\'s play a game. Guess the answers to the following questions using either "yes"/"y" or "no"/"n"!');

//Begin Guessing Game. For loop shuffles through the question and answer arrays for first five questions
for(var i = 0; i < gameQuestion[0].length; i++){
  askQuestion();
  if(userAnswer[i] === gameQuestion[1][i] || userAnswer[i] === gameQuestion[1][i + 5]){
    document.getElementById(idName[1][i]).innerHTML = gameResponseCorrect[i];//allows us to print correct response on webpage
    console.log(gameQuestion[0][i] + ' : ' + userAnswer[i]);//logs to console
    correctAnswer++; //adds up total amount of correct answers
  } else if(userAnswer[i] === gameQuestion[2][i] || userAnswer[i] === gameQuestion[2][i + 5]){
    document.getElementById(idName[1][i]).innerHTML = gameResponseIncorrect[i];//allows us to print incorrect response on page
    console.log(gameQuestion[0][i] + ' : ' + userAnswer[i]);
  } else{
    alert('Did you read the rules? You\'re supposed to answer yes or no!');
    i--;//takes user back to question when they provide an invalid response
  }
}

//Guess my favorite (random) number
randomNumber();
askNumberQuestion();
for(var i = 0; i <= 3; i++){ //allows 4 tries to guess number correctly
  if(guessNumber == myNumber){
    alert('Yay you guessed correctly!'); 
    correctAnswer++;
    break; //exits loop as soon as the correct number is guessed
  } else if(guessNumber < myNumber && i < 3){
    alert('Too low - Guess again! You have ' + (3 - i) + ' more tries.');
    askNumberQuestion();
  } else if(guessNumber > myNumber && i < 3){
    alert('Too high - Guess again! You have ' + (3 - i) + ' more tries.');
    askNumberQuestion();
  } else if(!Number.isInteger(guessNumber)){
    alert('That\'s not a number. Try again.');
    askNumberQuestion();
    i--;
  } else{
    alert('Aw, you are out of guesses! Better luck next time! My favorite number is actually ' + myNumber);
  }
}

//Guess a state I've lived in besides Washington
askStateQuestion();
for (var i = 0; i <= 5; i++){ //allows user to have 6 guesses
  if(guessStates === states[0] || guessStates === states[1]){
    alert('Yes! Great guess!');
    correctAnswer++;
    break;
  } else if(i < 5){
    alert('Nope, guess again! You have ' + (5 - i) + ' more shot(s).');
    askStateQuestion();
  } else{
    alert('Better luck next time! The other states I lived in are: ' + states[0] + ' and ' + states[1]);
  }
}

//Gives final score
if(correctAnswer > 3){
  document.getElementById("correctAnswer").innerHTML = 'Great job, ' + userName + '! You answered ' + correctAnswer + ' out of 7 questions correctly!';
} else{
  document.getElementById("correctAnswer").innerHTML = 'Better luck next time, ' + userName + '! You only answered ' + correctAnswer + ' out of 7 questions correctly!';
}