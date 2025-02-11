const student={
    name: 'Helsinki',
    age: 24,
    maths: 90,
    science: 80,
    english: 70,
    getAvg(){
        let avg= (this.maths+this.science+this.english)/3;
        console.log(`The average marks of ${this.name} is ${avg}`);
    }

}

try{
    console.log(X);
}
catch(err){
    console.log("caught an error, variable a is not defined");
    console.log(err);
}

const sum=(a,b)=>{
    console.log(a+b);
};

//timeout function
console.log("Start");
setTimeout(()=>{
    console.log("Inside timeout function");
},6000);
console.log("End");

//setInterval function
let i=0;
const interval=setInterval(()=>{
    console.log("Hello");
    i++;
    if(i===5){
        clearInterval(interval);
    }
},1000);

sqr=(n)=>{
    return n*n;
}