console.log("1. Variable Declaration and Assignment");

let studentName;
studentName = "Saipriya";
console.log("Student Name:", studentName);

console.log("2. Creating an Array");
let fruits = ["Apple", "Mango", "Orange"];
console.log("Fruits:", fruits);

console.log("3. Accessing Array Elements");
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Third Fruit:", fruits[2]);


console.log("4. Creating an Object Literal");
let student = {
    name: "Saipriya",
    age: 21,
    department: "CSE"
};
console.log("Student Object:", student);

console.log("5. Accessing Object Properties");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("Name using bracket notation:", student["name"]);

console.log("6. Getting the Length of an Array");
console.log("Number of Fruits:", fruits.length);

console.log("7. Multiplying Array Numbers by 2");
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}
