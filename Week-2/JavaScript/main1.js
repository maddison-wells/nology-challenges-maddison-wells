// if age >= 18 , button bg-colour and i should be green
// if under red

let button = document.querySelector("#myButton");
let drink = document.querySelector("#drink");

function onSubmit(event) {
  event.preventDefault();

  let userInput = document.getElementById("userInput").value;

  let button = document.getElementById("submitButton");
  if (userInput >= 18) {
    button.style.backgroundColor = "green";
    drink.style.color = "green";
  } else {
    button.style.backgroundColor = "red";
    drink.style.color = "red";
  }
}
const user = {
  name: "john",
  username: "jonny",
};

let username = "bob";

const setUserName = (user, username) => {
  if (user.hasOwnProperty("username")) {
    return user;
  } else {
    user.username = username;

    return user;
  }
};
console.log(setUserName(user, username));

const customer = {
  fullName: "John Smith",
};

const splitFullNameToFirstAndLast = (customer) => {
  let splitString = customer.fullName.split(" ");
  console.log(splitString);
  customer.firstName = splitString[0];
  customer.lastName = splitString[1];
  return customer;
};

console.log(splitFullNameToFirstAndLast(customer));

const person = {
  name: "Joe Bloggs",
  height: 170,
  eyeColour: "blue",
  likesIceCream: false,
};
// const accessGivenKey = (object, key) => {
//   const getKey = () => key;

//   if (object.hasOwnProperty(key)) {
//     return object[getKey()];
//   } else {
//     return "nope";
//   }
// };

const personn = {
  name: "Joe Bloggs",
  height: 170,
  eyeColour: "blue",
  likesIceCream: false,
};

const accessGivenKey = (object, key) => {
  if (object.hasOwnProperty(key)) {
    return object[key];
  }
};

// console.log(accessGivenKey(object, "height"));

let userr = {
  id: 101,
  name: "Harry Potter",
  address: {
    line1: "4 Privet Drive",
    line2: "Little Whinging",
    city: "Surrey",
    postcode: "CR3 0AA",
  },
};

const getUserAddress = (userr) => {
  let getAddress = [];
  getAddress.push(
    userr.address.line1,
    userr.address.line2,
    userr.address.city,
    userr.address.postcode
  );
  return getAddress.toString().replace(/,/g, " ");
};

console.log(getUserAddress(userr));

const tableLocationInfo = { id: 101, location: "Bristol", sku: "bXpGsZC2j4" };
const tableProductInfo = {
  id: 101,
  name: "lack",
  price: 6,
  isAvailable: true,
};

const mergeFurniture = (tableProductInfo, tableLocationInfo) => {
  const mergedObject = { ...tableProductInfo };
  Object.keys(tableLocationInfo).forEach((key) => {
    if (!mergedObject.hasOwnProperty(key)) {
      mergedObject[key] = tableLocationInfo[key];
    }
  });
  return mergedObject;
};

console.log(mergeFurniture(tableLocationInfo, tableProductInfo));

console.log(new Array(100).fill(0));

const firstN = "Mad";
const lastN = "Wells";

const fullName = (lastN) => {
  return firstN + " " + lastN;
};

console.log(fullName(lastN));

let str = "";

for (let i = 0; i < 10; i++) {
  str += i;
}

console.log(str);

console.log("ba" + +"a" + "a".toLowerCase());

let firstNa = "Maddy";
let i = 0;
let bytesum = 0;
function getByteSum(firstNa) {
  while (i++ < firstNa.length) {
    bytesum += firstNa.charCodeAt(i);
  }
  return bytesum;
}

console.log(getByteSum(firstNa));

const coordinates = [];

const getCoordinates = (n = 10) => {
  while (coordinates.length < n + 1) {
    const coord = Math.floor(Math.random() * 45);
    if (coordinates.includes(coord)) continue;
    coordinates.push(coord);
  }
};

console.log(getCoordinates(10));
getCoordinates(45);
getCoordinates(23);
