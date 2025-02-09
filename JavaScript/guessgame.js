const max =prompt("Enter the maximum number");
const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess=prompt("Enter your guess");
while(true){
    if(guess=="quit"){
        console.log("You quit");
        break;
    }
    if(guess==random){
        console.log("You win");
        break;
    }
    else if(guess>random){
        guess=prompt("Too high, try again");
    }
    else{
        guess=prompt("Too low, try again");
    }
}