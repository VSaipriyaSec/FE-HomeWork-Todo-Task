console.log("1. Array.map() - Square Each Element");
let numbers = [2, 4, 3, 5, 10];
let squares = numbers.map(function (number) {
    return number * number;
});
console.log("Original Array:", numbers);
console.log("Squared Array:", squares);


console.log("2. Array.filter() - Numbers Greater Than or Equal to 18");
let ages = [12, 18, 34, 32, 23, 21, 19];
let filteredAges = ages.filter(function (age) {
    return age >= 18;
});
console.log("Original Array:", ages);
console.log("Numbers 18 and Above:", filteredAges);