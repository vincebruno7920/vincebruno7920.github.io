/*rock paper scissors game */

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let compPic;

//onclick, display user's choice
possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    generateUserChoicePic()
    generateComputerChoice()
    getResult()
}));
function generateUserChoicePic() {
  if (userChoice == 'rock') {
    compPic = '<br><img src="./img/rock.jpg" alt="rock">';
  }
  if (userChoice == 'paper') {
    compPic = '<br><img src="./img/paper.jpg" alt="paper">';
  }
  if (userChoice == 'scissors') {
    compPic = '<br><img src="./img/scissors.jpg" alt="scissors">';
  }
  userChoiceDisplay.innerHTML = userChoice + compPic;
}
//generate random number that will represent computer's choice
//and display computer's choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or you can use possibleChoices.length
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = 'rock';
    compPic = '<br><img src="./img/rock.jpg" alt="rock">';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
    compPic = '<br><img src="./img/scissors.jpg" alt="scissors">';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
    compPic = '<br><img src="./img/paper.jpg" alt="paper">';
  }
  computerChoiceDisplay.innerHTML = computerChoice + compPic;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw!' + '<br><img src="./img/draw.jpg" alt="Draw!">';
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You win!' + '<br><img src="./img/win.jpg" alt="You Win!">';
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'You lose!' + '<br><img src="./img/lose.jpg" alt="You Lose!">';
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'You win!' + '<br><img src="./img/win.jpg" alt="You Win!">';
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You lose!' + '<br><img src="./img/lose.jpg" alt="You Lose!">';
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You win!' + '<br><img src="./img/win.jpg" alt="You Win!">';
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'You lose!' + '<br><img src="./img/lose.jpg" alt="You Lose!">';
  }
  resultDisplay.innerHTML = result;
}

//top of page button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
