// Add an Event listener on clicking a button
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// 1) setting a value in LocalStorage
localStorage.setItem("name", "Manju");
localStorage.setItem("name1", "Manisha");
localStorage.setItem("name2", "Varshan");
localStorage.setItem("name3", "Varshika");
localStorage.setItem("name4", "Jothi");

// 2) getting a value in LocalStorage
const n = localStorage.getItem("name");
console.log(n);

// 3) removing a value in LocalStorage
localStorage.removeItem("name");

// 4) removing all values in LocalStorage
localStorage.clear();

//Ternary condition
let age = 20;
let result = age >= 18 ? "Adult" : "Child";
console.log(result);

// in operator - to find whether a property exists in an object. const user = { name: "Alice", age: 25 }
const user = {
  name: "Alice",
  age: 25,
};
console.log("name" in user);

// Optional Chaining
const user1 = {
  name: "Alice",
  address: {
    city: "Chennai",
  },
};
console.log(user1.address?.city);

// How will you make a ‘this’ keyword of an Object to point to another Object
const user2 = {
  name: "Alice",
};
const user3 = {
  name: "Bob",
};
function greet() {
  console.log("Hello " + this.name);
}
greet.call(user2);
greet.call(user3);


// 1) setTimeout

setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);

// 2) setInterval
const id = setInterval(function () {
  console.log("Hello");
}, 2000);

clearInterval(id);