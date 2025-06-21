let jsonRes= '{"name":"John","age":30,"city":"New York"}';
let obj = JSON.parse(jsonRes);
console.log(obj.name); // Output: John

let student = {
    name: "Alice",
    age: 22,
    city: "Los Angeles"
};
let jsonString = JSON.stringify(student);
console.log(jsonString); // Output: {"name":"Alice","age":22,"city":"Los Angeles"}