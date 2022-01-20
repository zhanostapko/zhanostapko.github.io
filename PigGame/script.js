'use strict';

const resetBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore3, activePlayer, playing;
//Starting screen settings

const init = function () {
  scores = [0, 0];
  currentScore3 = 0;
  activePlayer = 0;
  playing = true;

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore3 = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll Button
rollBtn.addEventListener('click', () => {
  if (playing) {
    diceEl.src = `dice-${randNum}.png`;
    diceEl.classList.remove('hidden');

    if (randNum !== 1) {
      currentScore3 += randNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore3;
    } else {
      switchPlayer();
    }
  }
});

//Hold button

holdBtn.addEventListener('click', function () {
  if (playing) {
    // 1.add cuurent score to player score
    scores[activePlayer] += currentScore3;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // scores[1]  = scores[1] + currentScore3;

    // 2.check if score more than 100
    // finish game

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active ');
    } else {
      switchPlayer();
    }
  }
  // Switch to the next player
});
// New Game Button

resetBtn.addEventListener('click', init);
