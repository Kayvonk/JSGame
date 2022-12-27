let targetsContainer = document.getElementById("targets");
let gameUiDiv = document.getElementById("gameUi");
let headerTargetDiv = document.getElementById("headerTarget");
let startBtn = document.getElementById("startBtn");
let playAgainBtn = document.getElementById("playAgainBtn");
let startTimerContainer = document.getElementById("startTimerContainer");
let title = document.getElementById("title");
let header = document.querySelector("header");
let main = document.querySelector("main");
let startCountdownDiv = document.getElementById("startCountdown");
let gameTimerDiv = document.getElementById("gameTimer");

let hitsDiv = document.getElementById("hits");
let missesDiv = document.getElementById("misses");
let scoreDiv = document.getElementById("score");
let highScoreDiv = document.getElementById("highScore");

let gameTimer = 10;

let score = 0;
let highScore = 0;
let hits = 0;

arrayOfInsults = [
  "Can you do better?",
  "Um...okay",
  "omg, that was okay, I guess",
  "Heeheehee, good try",
];

const updateScore = () => {
  scoreDiv.textContent = "SCORE: " + score;
  hitsDiv.textContent = "HITS: " + hits;
  console.log(score);
};

const generateGameUi = () => {
  localStoragehighScore = localStorage.getItem("High Score");
  if (localStoragehighScore) {
    highScore = localStoragehighScore;
  } else {
    highScore = 0;
  }
  gameUiDiv.style = "display:none";
  scoreDiv.textContent = "SCORE: " + score;
  highScoreDiv.textContent = "HIGHSCORE: " + highScore;
  hitsDiv.textContent = "HITS: " + hits;
};

generateGameUi();

const headerTarget = () => {
  let target = document.createElement("div");
  target.className = "headerTarget";
  targetsContainer.append(target);
  let ring1 = document.createElement("div");
  ring1.className = "ring1";
  target.append(ring1);
  let ring2 = document.createElement("div");
  ring2.className = "ring2";
  target.append(ring2);
  let ring3 = document.createElement("div");
  ring3.className = "ring3";
  target.append(ring3);
  let ring4 = document.createElement("div");
  ring4.className = "ring4";
  target.append(ring4);
  let ring5 = document.createElement("div");
  ring5.className = "ring5";
  target.append(ring5);
  headerTargetDiv.append(target);
};

headerTarget();

const createTarget = () => {
  let targetDiv = document.createElement("div");
  targetDiv.className = "targetDiv";
  targetDiv.style.left = 100 * Math.random() + "%";
  targetDiv.style.top = 100 * Math.random() + "%";
  targetsContainer.append(targetDiv);
  let target = document.createElement("div");
  target.className = "target";
  targetDiv.append(target);
  let ring1 = document.createElement("div");
  ring1.className = "ring1";
  targetDiv.append(ring1);
  let ring2 = document.createElement("div");
  ring2.className = "ring2";
  targetDiv.append(ring2);

  let ring3 = document.createElement("div");
  ring3.className = "ring3";
  targetDiv.append(ring3);

  let ring4 = document.createElement("div");
  ring4.className = "ring4";
  targetDiv.append(ring4);

  let ring5 = document.createElement("div");
  ring5.className = "ring5";
  targetDiv.append(ring5);
  setTimeout(() => {
    targetDiv.remove();
  }, 750);
};

const generateTargets = () => {
  let targetInterval = setInterval(() => {
    createTarget();
    gameTimer--;
    gameTimerDiv.textContent = gameTimer;

    if (gameTimer === 0) {
      if (score > highScore) {
        highScoreDiv.textContent = "HIGHSCORE: " + score;
        highScore = score;
        console.log("score: " + score);
        console.log("highScore: " + highScore);
        localStorage.setItem("High Score", highScore);
      }
      startTimerContainer.style = "display:none";
      targetsContainer.style = "display:none";
      playAgainBtn.style = "display:block";
      gameTimerDiv.style = "display:none";
      gameTimer = 10;
      clearInterval(targetInterval);
    }
  }, 1000);
};

const createHeader = () => {
  let hitsDiv = document.createElement("div");
  hitsDiv.className = "hitsDiv";
  gameUiDiv.append(hitsDiv);
  let missesDiv = document.createElement("div");
  missesDiv.className = "missesDiv";
  gameUiDiv.append(missesDiv);
};

const startGame = () => {
  console.log("Start");
  hits = 0;
  score = 0;
  hitsDiv.textContent = "HITS: " + hits;
  scoreDiv.textContent = "SCORE: " + score;
  gameTimerDiv.textContent = gameTimer;
  startCountdownDiv.textContent = count;
  title.style = "display:none";
  headerTargetDiv.style = "display:none";
  startBtn.style = "display:none";
  gameUiDiv.style = "display:flex";
  gameTimerDiv.style = "display:none";
  playAgainBtn.style = "display:none";
  startTimerContainer.style = "display:flex";
  countdown();
};

let count = 3;
startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", startGame);

const countdown = () => {
  let startInterval = setInterval(function () {
    count--;
    startCountdownDiv.textContent = count;
    if (count === 0) {
      clearInterval(startInterval);
      gameTimerDiv.style = "display:flex";
      startTimerContainer.style = "display: none";
      header.style = "display: none";
      targetsContainer.style = "display:flex";
      main.style = "flex-direction: row";
      count = 3;
      gameTimerDiv.textContent = gameTimer;
      generateTargets();
      setTimeout(() => {
        gameTimerDiv.textContent = gameTimer;
      }, 1000);
    }
  }, 1000);
};

$(document).ready(function () {
  $(document).on("click", ".target", function () {
    $(this).parent().remove();
    score += 10;
    hits += 1;
    updateScore();
  });
  $(document).on("click", ".ring1", function () {
    $(this).parent().remove();
    score += 20;
    hits += 1;
    updateScore();
  });
  $(document).on("click", ".ring2", function () {
    $(this).parent().remove();
    score += 30;
    hits += 1;
    updateScore();
  });
  $(document).on("click", ".ring3", function () {
    $(this).parent().remove();
    score += 40;
    hits += 1;
    updateScore();
  });
  $(document).on("click", ".ring4", function () {
    $(this).parent().remove();
    score += 50;
    hits += 1;
    updateScore();
  });
  $(document).on("click", ".ring5", function () {
    $(this).parent().remove();
    score += 100;
    hits += 1;
    updateScore();
  });
});
