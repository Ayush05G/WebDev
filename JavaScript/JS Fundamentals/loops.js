for(let i=0; i<5; i++) {
    console.log(i);
}
let n=prompt("Enter a number");
n=parseInt(n);
for(let i=n; i<=n*10; i=i+n) {
    console.log(i);
}
for(let i=0; i<5; i++) {
    //outer loop
    for(let j=0; j<5; j++) {
        //inner loop
        console.log(i,j);
    }
}
let i=0;
while(i<5) {
    if (i===3) {
        break;
    }
    console.log(i);
    i++;
}

const favmovie= "Endgame";
let guess= prompt("Guess my favourite movie");
while(guess!=favmovie) {
    if(guess==="quit") {
        console.log("You quit the game");
        break;
    }
    console.log("Try again");
    guess= prompt("Guess my favourite movie");
}
if(guess===favmovie) {
    console.log("You guessed it right");
}

let fruits= ["apple", "banana", "mango", "orange"];
fruits.push("grapes");
for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

//forof loop
for(fruit of fruits) {
    console.log(fruit);
}

