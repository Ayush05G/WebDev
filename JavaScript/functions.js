function hello() {
    console.log("Hello");
}
hello();

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Tim");

function avg(a, b, c) {
    return (a + b + c) / 3;
}
console.log(avg(2, 3, 4));

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}
rollDie();

const calculator = {
    num:1,
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};