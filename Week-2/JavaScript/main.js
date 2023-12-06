// //## Data types

// ```js
// typeof 15; // number
// typeof 5.5; // number: ...
// typeof NaN; // number
// typeof "hello"; // string:
// typeof true; // boolean:
// typeof (1 != 2); // boolean:
// "hamburger" + "s"; // hamburgers:
// "hamburgers" - "s"; // nan:
// "1" + "3"; // : 13
// "1" - "3"; // : -2
// "johnny" + 5; // johnny5:
// "johnny" - 5; // nan:
// 99 * "luftbaloons"; // nan:

const firstName = "Maddison";
const lastName = "Wells";
let age = 33;

console.log(
  "My name is " +
    firstName +
    " " +
    lastName +
    " and I am " +
    age +
    " years old."
);

// 2 == "2"; true
// 2 === 2; true
// 2 === "2"; false
// "2" + 3 == 23; true
// "2" + 3 === 5; false
// 10 % 3; 1
// 10 % 3 === 1; true
// (100 % 7) % 5; 2
// (100 % 7) % 5 !== 0; true
// (100 % 7) % 9 == 2;true
// !(10 % 2); true
// !!!!((10 % 7) % 3); false
// 10 % 3 === -1 % 2; false
// (892783 != "89278" + 3) == 0; true
// true && false; false
// false || true; true
// true || false; true
// true || false; true
// true || false + true; true
// true * false && false + true;
// 10 && 123 && -1 && 3; 3 last truthy
// 10 && 123 && 0 && 3; 0 first falsy
// (10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; 0 - truthy truthy Nan=falsy
// 3 && "Calum" && ("" || 26); 26
// 3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); CatDog
// ```

console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")));

// let n = 10;

function oddOrEven(n) {
  if (n % 2 == 0) {
    return "n is even";
  } else {
    return "n is odd";
  }
}

console.log(oddOrEven(22));

// Check for the smallest value
// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y
// Challenge: User Input Type
// MVP:
// Console log the user's input depending on the data type
// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say "invalid input"

let x = 9;
let y = 9;

if (x > y) {
  console.log("x is greater than y");
} else if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is less than y");
}

let userInput = 5;

if (typeof userInput === "string") {
  console.log(userInput);
} else if (typeof userInput === "number") {
  console.log(userInput ** 2);
} else {
  console.log("invaild input");
}
// MVP:
// Create a switch block that will log a string for each day of the week.
// Create a variable called day
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range

let day = 6;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Incorrect value");
}

// Challenge: Eye Colour (Check the attached image)
// MVP:
// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference
// Bonus:
// Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

const parent1 = "green";
const parent2 = "blue";
let childEyeColour = "";

switch (`${parent1}, ${parent2}`) {
  case "brown, brown":
    console.log(
      `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%`
    );
    childEyeColour = "blue";
    break;
  case "green, brown":
  case "brown, green":
    console.log(
      `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%`
    );
    childEyeColour = "brown";
    break;
  case "blue, brown":
  case "brown, blue":
    console.log(
      `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%`
    );
    childEyeColour = "brown or blue";
    break;
  case "green, green":
    console.log(
      `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%`
    );
    childEyeColour = "green";
    break;
  case "green, blue":
  case "blue, green":
    console.log(
      `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%`
    );
    childEyeColour = "blue or green";
    break;
  case "blue, blue":
    console.log(
      `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%`
    );
    childEyeColour = "blue";
    break;
  default:
    console.log("Please enter either blue, green or brown");
}
console.log(childEyeColour);
switch (childEyeColour) {
  case "blue":
    console.log("This is a good colour");
    break;
  case "green":
    console.log("This is an okay colour");
    break;
  case "brown":
    console.log("This is an unpopular colour");
    break;
  default:
    console.log("This could be 50/50");
}

function moonOrbit(days) {
  return (days / 27.3).toFixed(2);
}

console.log(moonOrbit(340));

function circleArea(radius) {
  return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}

console.log(circleArea(9));

function circlePerimeter(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}

console.log(circlePerimeter(8));

function ageInDays(years) {
  return years * 365;
}

function ageInSeconds(years) {
  return years * 31536000;
}

function remainder(num1, num2) {
  return num1 % num2;
}

console.log(remainder(5, 5));

function gameScore(twoPointers, threePointers) {
  return threePointers * 3 + twoPointers * 2;
}

console.log(gameScore(5, 5));

function sumLessThanOneHundred(num1, num2) {
  return num1 + num2 >= 100 ? false : true;
}

console.log(sumLessThanOneHundred(90, 10));

const a = 1;
const b = 2;
const c = 3;

function firstFunction() {
  const b = 5;
  const c = 6;

  console.log(`a: ${a}, b: ${b}, c: ${c}`);

  function secondFunction() {
    const b = 8;

    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    function thirdFunction() {
      const a = 7;
      const c = 9;

      console.log(`a: ${a}, b: ${b}, c: ${c}`);

      function fourthFunction() {
        const a = 1;
        const c = 8;

        console.log(`a: ${a}, b: ${b}, c: ${c}`);
      }

      fourthFunction();
    }

    thirdFunction();
  }

  secondFunction();
}

firstFunction();

console.log(`a: ${a}, b: ${b}, c: ${c}`);

// a:1, b:8, c:6 second scope
// a:1, b:8, c:8 fourth scope
// a:1, b:5, c:6 first scope
// a:7, b:8, c:9 third scope

// 1. Create an array with 3 of your hobbies

let myHobbies = ["drawing", "reading", "travelling"];

// 1. Print in the console the first hobby in the array

console.log(myHobbies[0]);

// 1. Remove that first hobby from the array and store that hobby in a variable

let hobby = myHobbies.shift();

console.log(hobby);

// 1. Store the length of the array in a variable

let hobbiesLength = myHobbies.length;

console.log(hobbiesLength);

// 1. Add another hobby at the end of the array

myHobbies.push("cooking");

console.log(myHobbies);

// 1. Print that last hobby in the console

console.log(myHobbies[myHobbies.length - 1]);

// Bonus:

// 1. Join all your hobbies in a single string each hobby being comma separated
//    (i.e. "My hobbies are: hobby1, hobby2, hobby2")

console.log(myHobbies.join(", "));

// ## Challenge: Grocery Lists

// ### MVP

// 1. Create an array containing 5 grocery items you often buy
// 2. Log this list to the console, make sure the output is pipe delimited

let myShoppingList = ["avo", "chicken", "shampoo", "milk", "ice-cream"];

console.log(myShoppingList.join("|"));

// // ```js
// // ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'
// // ```

// ## Challenge: Sum of `n`

// ### MVP:

// Create a function with a for loop that will add all the numbers up to n

function addItems(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addItems(10));

// 1. You should create a variable to set the upper limit of your loop
// 2. Your loop should increment by 1 on each iteration
// 3. Your loop should print the final result

// ```js
// sum(10) => 55
// ```

// ### Bonus:

// Try writing the function again with the same inputs and outputs **Without**
// using a loop. (You may need to google some formulas!)

function addItem(n) {
  return (n * (n + 1)) / 2;
}

console.log(addItem(10));

function totalScores(scoreArr) {
  let finalScore = 0;
  for (let i = 0; i < scoreArr.length; i++) {
    finalScore += scoreArr[i];
  }
  return finalScore;
}

console.log(totalScores([10, 11, 12]));

const totalRange = (rangeMax) => {
  let sum = 0;
  for (let i = 1; i <= rangeMax; i++) {
    sum += i;
  }
  return sum;
};

console.log(totalRange(10));

let itemsArr = [10, 11, 12];

const moveFirstAndLastItems = (itemsArr) => {
  itemsArr.unshift(itemsArr.pop());
  return itemsArr;
};

console.log(moveFirstAndLastItems([10, 11, 12]));

const generateAverage = (numberArr) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
  }
  average = sum / numberArr.length;
  return Math.round(average, 0);
};

console.log(generateAverage([]));

const reverseOrder = (toReverseArr) => {
  let reverseArr = toReverseArr.reverse();
  return reverseArr;
};

console.log(reverseOrder([10, 11, 12]));

let playersArr = ["Tony", "John", "Dave"];
let scoresArr = [45, 55, 66];

const generateHighscores = (playersArr, scoresArr) => {
  if (playersArr.length === 0) {
    return "Invaild";
  }
  let newArr = [];
  for (let i = 0; i < playersArr.length; i++) {
    newArr.push(`P:${i + 1} ${playersArr[i]} scored ${scoresArr[i]}`);
  }
  return newArr;
};

console.log(generateHighscores(["Tony", "John", "Dave"], [45, 55, 66]));

const encryptString = (toEncrypt) => {
  let newArr = [];
  for (let i = 0; i < toEncrypt.length; i += 3) {
    newArr.push(toEncrypt[i]);
  }
  for (let i = 1; i < toEncrypt.length; i += 3) {
    newArr.push(toEncrypt[i]);
  }
  for (let i = 2; i < toEncrypt.length; i += 3) {
    newArr.push(toEncrypt[i]);
  }
  return newArr.join("");
};

console.log(encryptString("encrypted"));

const reverseOrderr = (toReverseArr) => {
  let newArr = [];
  for (let i = toReverseArr.length - 1; i >= 0; i--) {
    newArr.push(toReverseArr[i]);
  }
  return newArr;
};

console.log(reverseOrderr(["william", 1, 2, 3]));
