// Day 4 - JavaScript Combined Concepts
// Functions, setTimeout, Arrays, Strings, Objects

// Function
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Nitin"));

// setTimeout example
setTimeout(() => {
  console.log("This message appears after 2 seconds");
}, 2000);

// Arrays and array methods
let numbers = [1, 2, 3, 4];

numbers.push(5);
numbers.pop();

console.log("Numbers:", numbers);
console.log("Array length:", numbers.length);

// Strings and string methods
let language = "JavaScript";

console.log(language.toUpperCase());
console.log(language.toLowerCase());
console.log(language.includes("Script"));
console.log(language.slice(0, 4));

// Objects and object access
let student = {
  name: "Nitin",
  age: 20,
  skills: ["JS", "HTML"]
};

console.log(student.name);
console.log(student.skills[0]);
