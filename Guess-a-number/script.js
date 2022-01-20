'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When No inputs
  if (!guess) {
    displayMessage(' 🤦‍♂️ No number!');

    // When guess to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👍 To High' : '👎 To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 😢';
      document.querySelector('.score').textContent = 0;
    }

    // When player
  } else if (guess === secretNumber) {
    displayMessage('🎉🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // window.location.reload();
});

// } else if (guess !== secretNumber) {

//     if (score > 1) {
//         document.querySelector('.message').textContent = guess > secretNumber ? '👍 To High' : '👎 To Low';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You Lost The Game 😢';
//         document.querySelector('.score').textContent = 0;
//     }

// } else if (guess < secretNumber) {

//     if (score > 1) {
//         document.querySelector('.message').textContent = '👎 To Low';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You Lost The Game 😢';
//         document.querySelector('.score').textContent = 0;
//     }

// }
