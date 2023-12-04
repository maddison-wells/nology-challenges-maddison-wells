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
