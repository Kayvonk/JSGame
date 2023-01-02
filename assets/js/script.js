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
let difficultySelect = document.getElementById("difficulty");
let difficultyText = document.getElementById("difficultyText");

let hitsDiv = document.getElementById("hits");
let missesDiv = document.getElementById("misses");
let scoreDiv = document.getElementById("score");
let highScoreDiv = document.getElementById("highScore");

let gameTimer = 10;

let score = 0;
let highScore = 0;
let hits = 0;

let difficulty;

let leftDisplacement;
let topDisplacement;

let createTargetsSpeed;
let targetDissapearTime;
let targetZIndex;
arrayOfInsults = ["You can do better?", "Um...nice", "Heeheehee, good try"];

const setDifficulty = () => {
  if (difficulty == 1) {
    createTargetsSpeed = 750;
    targetDissapearTime = 1000;
  } else if (difficulty == 2) {
    createTargetsSpeed = 750;
    targetDissapearTime = 1000;
  } else if (difficulty == 3) {
    createTargetsSpeed = 750;
    targetDissapearTime = 750;
  }
};

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
  let ring6 = document.createElement("div");
  ring6.className = "ring6";
  target.append(ring6);
  let ring7 = document.createElement("div");
  ring7.className = "ring7";
  target.append(ring7);
  headerTargetDiv.append(target);
};

headerTarget();

const createTarget = () => {
  targetZIndex += 1;
  console.log("createTargetsSpeed: " + createTargetsSpeed);
  console.log("targetDissapearTime: " + targetDissapearTime);
  let createTargetInterval = setInterval(() => {
    let targetDiv = document.createElement("div");
    leftDisplacement = 100 * Math.random();
    topDisplacement = 100 * Math.random();
    targetDiv.style.left = leftDisplacement + "%";
    targetDiv.style.top = topDisplacement + "%";
    targetDiv.style.zIndex = targetZIndex;
    if (leftDisplacement < 50 && topDisplacement < 50 && difficulty == 1) {
      targetDiv.className =
        "targetDiv topLeftDifficulty1Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement >= 50 &&
      topDisplacement <= 50 &&
      difficulty == 1
    ) {
      targetDiv.className =
        "targetDiv topRightDifficulty1Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement <= 50 &&
      topDisplacement >= 50 &&
      difficulty == 1
    ) {
      targetDiv.className =
        "targetDiv bottomLeftDifficulty1Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement >= 50 &&
      topDisplacement >= 50 &&
      difficulty == 1
    ) {
      targetDiv.className =
        "targetDiv bottomRightDifficulty1Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement <= 50 &&
      topDisplacement <= 50 &&
      difficulty == 2
    ) {
      targetDiv.className =
        "targetDiv topLeftDifficulty2Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement >= 50 &&
      topDisplacement <= 50 &&
      difficulty == 2
    ) {
      targetDiv.className =
        "targetDiv topRightDifficulty2Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement <= 50 &&
      topDisplacement >= 50 &&
      difficulty == 2
    ) {
      targetDiv.className =
        "targetDiv bottomLeftDifficulty2Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement >= 50 &&
      topDisplacement >= 50 &&
      difficulty == 2
    ) {
      targetDiv.className =
        "targetDiv bottomRightDifficulty2Variation" +
        (Math.floor(Math.random() * 3) + 1);
    } else if (
      leftDisplacement <= 50 &&
      topDisplacement <= 50 &&
      difficulty == 3
    ) {
      targetDiv.className =
        "targetDiv topLeftDifficulty3Variation" +
        (Math.floor(Math.random() * 5) + 1);
    } else if (
      leftDisplacement >= 50 &&
      topDisplacement <= 50 &&
      difficulty == 3
    ) {
      targetDiv.className =
        "targetDiv topRightDifficulty3Variation" +
        (Math.floor(Math.random() * 5) + 1);
    } else if (
      leftDisplacement <= 50 &&
      topDisplacement >= 50 &&
      difficulty == 3
    ) {
      targetDiv.className =
        "targetDiv bottomLeftDifficulty3Variation" +
        (Math.floor(Math.random() * 5) + 1);
    } else if (
      leftDisplacement >= 50 &&
      topDisplacement >= 50 &&
      difficulty == 3
    ) {
      targetDiv.className =
        "targetDiv bottomRightDifficulty3Variation" +
        (Math.floor(Math.random() * 5) + 1);
    }
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
    let ring6 = document.createElement("div");
    ring6.className = "ring6";
    targetDiv.append(ring6);
    let ring7 = document.createElement("div");
    ring7.className = "ring7";
    targetDiv.append(ring7);
    setTimeout(() => {
      targetDiv.remove();
    }, targetDissapearTime);

    if (gameTimer === 0) {
      clearInterval(createTargetInterval);
    }
  }, createTargetsSpeed);
};

const generateTargets = () => {
  createTarget();
  let targetInterval = setInterval(() => {
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
      targetZIndex = 0;
      difficultyText.style = "display:block";
      difficultySelect.style = "display:block";
      startTimerContainer.style = "display:none";
      targetsContainer.style = "display:none";
      playAgainBtn.style = "display:block";
      gameTimerDiv.style = "display:none";
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
  gameTimer = 10;
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
  difficultySelect.style = "display:none";
  difficultyText.style = "display:none";
  startTimerContainer.style = "display:flex";
  difficulty = difficultySelect.value;
  console.log(difficulty);
  setDifficulty();
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
  $(document).on("mousedown", ".target", function () {
    console.log("mousedowned target");
    $(this).parent().remove();
    score += 10;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring1", function () {
    console.log("mousedowned ring1");

    $(this).parent().remove();
    score += 20;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring2", function () {
    console.log("mousedowned ring2");

    $(this).parent().remove();
    score += 30;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring3", function () {
    console.log("mousedowned ring3");

    $(this).parent().remove();
    score += 40;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring4", function () {
    console.log("mousedowned ring4");

    $(this).parent().remove();
    score += 50;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring5", function () {
    console.log("mousedowned ring5");

    $(this).parent().remove();
    score += 60;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring6", function () {
    console.log("mousedowned ring6");

    $(this).parent().remove();
    score += 75;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
  $(document).on("mousedown", ".ring7", function () {
    console.log("mousedowned ring7");

    $(this).parent().remove();
    score += 100;
    hits += 1;
    updateScore();
    $(this).off("mousedown");
  });
});

//targets persisting on level two (cause: time for dissappear needs to be under 3 seconds)

//circular motion animation for difficulty 3
//or do something else
