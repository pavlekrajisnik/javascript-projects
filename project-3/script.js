'use strict';
//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const switchPlayer = function () {
  currentScore = 0;
  //for previous player set score to zero (0)
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  //switch active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  //PROUCI TOGGLE, JER ON PRIMA DRUGI PARAMETAR A TO JE USLOV POD KOJIM CE
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Conditions
let playing = true;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Implementing roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceScore = Math.trunc(Math.random() * 6) + 1;
    console.log(diceScore);

    //removed only before first rolling dice
    diceEl.classList.remove('hidden');

    diceEl.src = `assets/dice-${diceScore}.png`;
    if (diceScore !== 1) {
      currentScore += diceScore;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentScore; //CHANGE LATER
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //1.Add certain result to Active-player 's results
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
