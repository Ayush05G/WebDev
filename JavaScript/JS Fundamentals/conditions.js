console.log("Before my if statement");
let age=23;
if(age>=18){
    console.log("You are an adult");
    console.log("You can drive");
}
else{
    console.log("You are a minor");
    console.log("You cannot drive");
}
if(age>20){
    console.log("You are in 20s");
}
console.log("After my if statement");

let marks=72;
if(marks>=40){
    console.log("You passed the exam");
    if(marks>=90){
        console.log("A grade");
    }

    else if(marks>=80){
        console.log("B grade");
    }
    else if(marks>=70){
        console.log("C grade");
    }
    else if(marks>=60){
        console.log("D grade");
    }
    else{
        console.log("E grade");
    }
}
else{
    console.log("You failed the exam");
}
console.log("After my nested if statement");

let color="red";
switch(color){
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    case "green":
        console.log("Color is green");
        break;
    default:
        console.log("Color is not red, blue or green");
}
console.log("After my switch statement");