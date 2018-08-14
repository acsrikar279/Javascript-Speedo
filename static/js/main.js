window.addEventListener('load', init);
window.addEventListener('load',changeLevel);
let currentLevel = 5;
let time = currentLevel;
let score = 0;
let isPlaying;
const difficulty = document.querySelector('#difficulty');
const start = document.querySelector('#start');
const dummy = document.querySelector('#dummy');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const words = [
  'amazing',
  'javascript',
  'python',
  'cpp',
  'java',
  'sql',
  'nosql',
  'extraordinary',
  'fabulous',
  'tremendous',
  'hazardous',
  'scala',
  'haskell',
  'mongodb',
  'android',
  'ios',
  'fantastic',
  'great',
  'speed',
  'words',
  'minute',
  'quantum',
];
function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  difficulty.addEventListener('change',changeLevel);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
  // dummy.innerHTML = time + " init ";
}
function changeLevel() {
  let choice = difficulty.options[difficulty.selectedIndex].value;
  seconds.innerHTML = choice;
  currentLevel = choice;
  time = currentLevel;
  // dummy.innerHTML = time + " changelevel ";
}
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = Number(currentLevel) + 1;
    // dummy.innerHTML = time + " startMatch ";
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
