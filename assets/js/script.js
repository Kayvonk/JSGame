let targetsDiv = document.getElementById("targets")
let gameUiDiv = document.getElementById("gameUi")
let highScoreDiv = document.getElementById("highScore")
let headerTargetDiv = document.getElementById("headerTarget")
let startBtn = document.getElementById("startBtn")
let title = document.getElementById("title")
let header = document.querySelector("header")
let main = document.querySelector("main")



let score = 0; 
let highScore = 0;

const headerTarget = () => {
    let target = document.createElement("div")
    target.className = "headerTarget"
    targetsDiv.append(target)
    let ring1 = document.createElement("div")
    ring1.className = "ring1"
    target.append(ring1)
    let ring2 = document.createElement("div")
    ring2.className = "ring2"
    target.append(ring2)
    let ring3 = document.createElement("div")
    ring3.className = "ring3"
    target.append(ring3)
    let ring4 = document.createElement("div")
    ring4.className = "ring4"
    target.append(ring4)
    let ring5 = document.createElement("div")
    ring5.className = "ring5"
    target.append(ring5)
    headerTargetDiv.append(target)
}

headerTarget();

// const clearTarget = (event) => {
//     event.target
// }


const createTarget = () => {
    let target = document.createElement("div")
    target.className = "target"
    target.style.left = (100*Math.random()) + "%";
    target.style.top = (100*Math.random()) + "%";
    targetsDiv.append(target)
    let ring1 = document.createElement("div")
    ring1.className = "ring1"
    target.append(ring1)
      let ring2 = document.createElement("div")
    ring2.className = "ring2"
    target.append(ring2)

    let ring3 = document.createElement("div")
    ring3.className = "ring3"
    target.append(ring3)
 
    let ring4 = document.createElement("div")
    ring4.className = "ring4"
    target.append(ring4)
  
    let ring5 = document.createElement("div")
    ring5.className = "ring5"
    target.append(ring5)
    setTimeout(() => {
        target.style = "display: none"
    }, 1000);
   
}





let gameTimer = 60
const generateTargets = () => {
    let targetInterval = setInterval(() => {
        createTarget()
        gameTimer--
        if(gameTimer === 0) {
            clearInterval(targetInterval)
        }
            }, 1000);
}




const createHeader = () => {
    let hitsDiv = document.createElement("div")
    hitsDiv.className = "hitsDiv"
    gameUiDiv.append(hitsDiv)
    let missesDiv = document.createElement("div")
    missesDiv.className = "missesDiv"
    gameUiDiv.append(missesDiv)
}

const startGame = () => {
    title.style = "display:none"
    headerTargetDiv.style = "display:none"
    startBtn.style = "display:none"
    countdown();
}

let count = 4
startBtn.addEventListener("click", startGame)

const countdown = () => {
    let startCountdownDiv = document.getElementById("startCountdown")
    let startInterval = setInterval(function(){
        count--
        startCountdownDiv.textContent = count
        if (count === 0) {
            clearInterval(startInterval)
            startCountdownDiv.style = "display: none"
            header.style = "display: none"
            targetsDiv.style = "display:flex"
            main.style= "flex-direction: row"
            generateTargets()
        }
    }, 1000)
    
}

$(document).ready(function() {
    $(document).on('click','.target',function(){
        $(this).parent().toggleClass("hideTarget");
    });
    $(document).on('click','.ring1',function(){
        $(this).parent().toggleClass("hideTarget");
    });
    $(document).on('click','.ring2',function(){
        $(this).parent().toggleClass("hideTarget");
    });
    $(document).on('click','.ring3',function(){
        $(this).parent().toggleClass("hideTarget");
    });
    $(document).on('click','.ring4',function(){
        $(this).parent().toggleClass("hideTarget");
    });
    $(document).on('click','.ring5',function(){
        $(this).parent().toggleClass("hideTarget");
    });
  
});