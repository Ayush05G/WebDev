let gameseq=[];
let userseq=[];
let btns=["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    
    if(!started){
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    level++;
    h2.innertext = `Level ${level}`;
    let random = Math.floor(Math.random()*3);
    let randomclr = btns[random];
    let randombtnElement = document.querySelector(`#${randomclr}`);
        console.log(random);
        console.log(randomclr);
        console.log(randombtnElement);
        btnFlash(randombtnElement);

}

function btnPress(btn){
    console.log(this);
    let btn=this;
    userFlash(btn);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}