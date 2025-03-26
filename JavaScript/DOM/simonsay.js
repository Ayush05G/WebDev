let gameseq = [];
let userseq = [];
let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = []; // Reset user sequence for new level
    level++;
    h2.innerText = `Level ${level}`; // Fixed typo from innertext to innerText
    
    let randomIndex = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    
    gameseq.push(randomColor);
    console.log("Game Sequence:", gameseq);
    
    // Show the game sequence
    showGameSequence();
}

function showGameSequence() {
    for (let i = 0; i < gameseq.length; i++) {
        setTimeout(() => {
            let btn = document.querySelector(`.${gameseq[i]}`);
            btnFlash(btn);
        }, (i + 1) * 500);
    }
}

function checkSequence(currentLevel) {
    if (userseq[currentLevel] === gameseq[currentLevel]) {
        if (userseq.length === gameseq.length) {
            // Completed the current level successfully
            setTimeout(levelup, 1000);
        }
    } else {
        // Game over
        h2.innerHTML = `Game Over! Your score was Level ${level}. Press any key to restart.`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 500);
        gameReset();
    }
}

function btnPress() {
    if (!started) return;
    
    let btn = this;
    let color = btn.classList[1]; // Get the color class
    
    userFlash(btn);
    userseq.push(color);
    
    checkSequence(userseq.length - 1);
}

function gameReset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}