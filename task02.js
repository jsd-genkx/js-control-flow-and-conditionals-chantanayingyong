"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log(userInput,"is a number");
} else {
  console.log(userInput, "is not a number");
}

// Try changing to "hello", 10, null, NaN
const userInput1 = "hello";
if (typeof userInput1 === "number" && !isNaN(userInput1)) {
  console.log(userInput1,"is a number");
} else {
  console.log(userInput1,"is not a number");
}

const userInput2 = 10;
if (typeof userInput2 === "number" && !isNaN(userInput2)) {
  console.log(userInput2,"is a number");
} else {
  console.log(userInput2,"is not a number");
}

const userInput3 = null;
if (typeof userInput3 === "number"&& !isNaN(userInput3)) {
  console.log(userInput3,"is a number");
} else {
  console.log(userInput3,"is not a number");
}

const userInput4 = NaN;
if (typeof userInput4 === "number" && !isNaN(userInput4)) {
  console.log(userInput4,"is a number");
} else {
  console.log(userInput4,"is not a number");
}