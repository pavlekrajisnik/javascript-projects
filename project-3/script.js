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

//Conditions
let currentScore = 0;
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Implementing roll dice functionality
btnRoll.addEventListener('click', function () {
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
    currentScore = 0;
    //for previous player set score to zero (0)
    document.getElementById(`current--${activePlayer}`).innerHTML = 0;
    //switch active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // if (activePlayer == 0) {
    //   document.getElementById(`current--${activePlayer + 1}`).innerHTML = 0;
    // } else if (activePlayer == 1) {
    //   document.getElementById(`current--${activePlayer - 1}`).innerHTML = 0;
    // }

    //PROUCI TOGGLE, JER ON PRIMA DRUGI PARAMETAR A TO JE USLOV POD KOJIM CE
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
