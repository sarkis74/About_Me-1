'use strict';
var correctAnswer = 0; //defining correctAnswer variable
var gameQuestion = [
  ['Does H\'Liana like to hike?', 'Is H\'Liana originally from Seattle?', 'Does H\'Liana like peanuts?', 'Is H\'Liana tall?', 'Is H\'Liana\'s dog the cutest dog in the world?'],
  ['yes', 'no', 'no', 'no', 'yes', 'y', 'n', 'n', 'n', 'y'],
  ['no', 'yes', 'yes', 'yes', 'no', 'n', 'y', 'y', 'y', 'n'],
];
var gameResponseCorrect = [
  'Correct! In her spare time, she goes on backpacking trips both nearby and around the US!', 
  'Correct! She is originally from Charleston, South Carolina.', 
  'Correct. She is allergic.', 
  'Correct. She is only 5 foot 1.', 
  'OF COURSE HE IS!!'
];
var gameResponseIncorrect = [
  'Actually, she loves hiking!', 
  'Nope! She is originally from Charleston, South Carolina.', 
  'Incorrect! She is actually allergic.', 
  'Incorrect. Unfortunately she is only 5 foot 1.', 
  'No!?? Did you mean to say yes?!'
];
var idName = [
  ['hike', 'seattle', 'peanuts', 'tall', 'dogCute'],
  ['hikeResponse', 'seattleResponse', 'peanutsResponse', 'tallResponse', 'dogCuteResponse']
];
var userAnswer = new Array(5);

//Prompting for username, and providing instructions
var userName = prompt('Welcome! What\'s your name?');
console.log('Name: ' + userName);
while(!userName){
  userName = prompt('You surely have a name! Could you tell me your name please?');
  console.log('Name: ' + userName);
}
alert('Nice to meet you, ' + userName + '! Let\'s play a game. Guess the answers to the following questions using either "yes"/"y" or "no"/"n"!');

//Begin Guessing Game. For loop shuffles through the question and answer arrays.
for(var i = 0; i < gameQuestion[0].length; i++){
  userAnswer[i] = (prompt(gameQuestion[0][i])).toLowerCase(); //changes response to lowercase
  document.getElementById(idName[0][i]).innerHTML = userAnswer[i];
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
var myNumber = Math.floor(Math.random() * 11); //creates a random number and assigns it to a variable
document.getElementById("myNumber").innerHTML = myNumber;//allows this number to be printed on a page
console.log('Favorite number: ' + myNumber);//logs to console
var guessNumber = parseInt(prompt('Guess my favorite number between 0 and 10! You have 4 tries.'), 10);//makes input an integer
document.getElementById("guessNumber").innerHTML = guessNumber;
while(!Number.isInteger(guessNumber)){ //ensures that the input is an integer (and not a string/something else)
  var guessNumber = parseInt(prompt('You must enter a number. Guess my favorite number between 0 and 10! You have 4 tries.'), 10);
  document.getElementById("guessNumber").innerHTML = guessNumber;
}
for(var i = 0; i <= 3; i++){ //allows 4 tries to guess number correctly
  if(guessNumber == myNumber){
    alert('Yay you guessed correctly!'); 
    correctAnswer++;
    break; //exits loop as soon as the correct number is guessed
  } else if(guessNumber < myNumber && i < 3){
    guessNumber = parseInt(prompt('Too low - Guess again! You have tried ' + (i + 1) + ' out of 4 tries. Pick a number between 0 and 10'), 10);
    document.getElementById("guessNumber").innerHTML = guessNumber;
  } else if(guessNumber > myNumber && i < 3){
    guessNumber = parseInt(prompt('Too high - Guess again! You have tried ' + (i + 1) + ' out of 4 tries. Pick a number between 0 and 10'), 10);
    document.getElementById("guessNumber").innerHTML = guessNumber;
  } else if(!Number.isInteger(guessNumber)){
    guessNumber = parseInt(prompt('That\'s not a number. Try again. Pick a number between 0 and 10'), 10);
    document.getElementById("guessNumber").innerHTML = guessNumber;
    i--;
  } else{
    alert('Aw, you are out of guesses! Better luck next time! My favorite number is actually ' + myNumber);
  }
}

//Guess a state I've lived in besides Washington
var states = ['south carolina', 'florida'];
var guessStates = prompt('Guess a state I\'ve lived in besides Washington! You have 6 guesses.');
document.getElementById("statesLived").innerHTML = guessStates;
guessStates = guessStates.toLowerCase();
for (var i = 0; i <= 5; i++){ //allows user to have 6 guesses
  if(guessStates === states[0] || guessStates === states[1]){
    alert('Yes! The two states I lived in are: ' + states[0] + ' and ' + states[1]);
    correctAnswer++;
    break;
  } else if(i < 5){
    guessStates = prompt('Nope, guess again! You have ' + (6 - i) + ' more shot(s).');
    document.getElementById("statesLived").innerHTML = guessStates;
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