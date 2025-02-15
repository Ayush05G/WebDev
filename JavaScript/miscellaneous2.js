//foreach
let arr = [1, 2, 3, 4, 5];
function print(item) {
    console.log(item);
}
arr.forEach(print);
//OR
// arr.forEach(function (item) {
//     console.log(item);
// });

//map   
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.map(function (item) {
    return item * 2;
});

//filter
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.filter(function (item) {
    return item % 2 === 0;
});