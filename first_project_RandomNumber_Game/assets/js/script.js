var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var real = document.querySelector('.real');

var check = 1;
var resetButton = document.querySelector('.resetButton');
var random = Math.floor(Math.random()*100)+1;
console.log(random);

function checkNum(){
  var userGuesses = Number(guessField.value);
  if (guessField === 1)
  {
    lastResult.textContent = 'Previos guesses: ';
  }
  lastResult.textContent += userGuesses + ' ';

  if (userGuesses === random)
  {
    guesses.textContent = 'You win';
    guesses.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    gameOver();
  }
  else if (check === 10)
  {
    guesses.textContent = 'You lose';
    guessSubmit.disable = true;
    guessField.disable = true;
    lowOrHi.textContent = ' ';
    real.textContent = 'Number is: ' + random; 

    gameOver();
  }
  else{
    guesses.textContent = 'Nope';
    guesses.style.backgroundColor = 'red';
    if (userGuesses >random)
    {
      lowOrHi.textContent = 'Number is hight'
    }
    else if (userGuesses < random)
    {
      lowOrHi.textContent = 'Number is low'

    }
  }

  check++;
}
guessSubmit.addEventListener('click', checkNum);

function gameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  document.body.appendChild(resetButton);
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', restart);
  resetButton.className = 'knopka';
}

function restart(){

  check = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;

  guessField.value = '';
  guesses.textContent = '';
  lastResult.textContent = '';
  lowOrHi.textContent = '';
  real.textContent = '';

  guessField.focus();

}