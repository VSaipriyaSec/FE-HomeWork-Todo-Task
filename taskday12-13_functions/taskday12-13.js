//Create the first JavaScript function
function greet() {
    console.log("Hello, JavaScript This is Saipriya!");
}
greet();
//a function - then pass parameters.
function greetPerson(name) {
    console.log("Hello " + name);
}
greetPerson("Saipriya");
//Function with Parameters + Return Value
function add(a, b) {
    return a + b;
}
const sum = add(5, 10);
console.log(sum);