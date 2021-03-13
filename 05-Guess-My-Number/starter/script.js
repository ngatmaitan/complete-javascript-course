'use strict';

let secretNumber = setSecretNumber();
let score = 20;
let highscore = 0;

function setSecretNumber() {
  return Math.trunc(Math.random() * 20);
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function updateNumber(number) {
  document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is not guess
  if (!guess) {
    displayMessage('⛔️ No number!');

    //when the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    updateNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('💥 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = setSecretNumber();
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  updateNumber('?');
  displayScore(score);
});
