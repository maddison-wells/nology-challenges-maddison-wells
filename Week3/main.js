// // // class Dog {
// // //   constructor(name, breed) {
// // //     this.name = name;
// // //     this.breed = breed;
// // //     this.walked = [];
// // //     // this.total = 0;
// // //     // this.average = 0;
// // //   }

// // //   walk(distance) {
// // //     this.walked.push(distance);
// // //   }

// // //   totalWalkDistance() {
// // //     return this.walked.reduce((total, walk) => total + walk, 0);
// // //   }

// // //   averageWalkDistance() {
// // //     const average = this.totalWalkDistance() / this.walked.length;
// // //     return average;
// // //   }

// // //   walkSummary() {
// // //     console.log(
// // //       `${this.name} has gone on ${this.walked.length} walks, totalling ${this.totalWalkDistance} kms`
// // //     );
// // //   }
// // // }

// // class Alert {
// //   /**
// //    * Create an alert.
// //    * @param {string} message - "Are sure you want to proceed?"
// //    */
// //   constructor(message) {
// //     this.message = message;
// //   }

// //   /**
// //    * Returns a string with "!!!! " + " !!!!" added to the start and end of the message key.
// //    * @return {string} "!!!! Are sure you want to proceed? !!!!"
// //    */
// //   printMessage() {
// //     return `!!!! ${this.message} !!!!`;
// //   }
// // }

// // const trial = new Alert("help");

// // console.log(trial.printMessage());

// // // const lab = new Dog("lucky", "lab");
// // // lab.walk(3);
// // // console.log(lab.walkSummary());

// // class Counter {
// //   /**
// //    * Create an counter.
// //    * @param {number} count - 50
// //    */
// //   constructor(count) {
// //     this.count = count;
// //   }
// //   increment() {
// //     return this.count++;
// //   }

// //   decrement() {
// //     this.count > 0 ? this.count-- : this.count;
// //   }
// // }

// // const fifty = new Counter(2);

// // console.log(fifty.count);

// // fifty.increment();

// // console.log(fifty.count);

// // fifty.decrement();
// // fifty.decrement();
// // fifty.decrement();
// // fifty.decrement();
// // console.log(fifty.count);

// class Movie {
//   constructor(name, director, release, imdbRating, runtime) {
//     this.name = name;
//     this.director = director;
//     this.release = release;
//     this.imdbRating = imdbRating;
//     this.runtime = runtime;
//   }
// }

// const movies = [
//   new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
//   new Movie("The incredibles", "Brad Bird", 2004, 8, "1h30m"),
//   new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38"),
// ];

// console.log(movies.filter((movie) => movie.director[0].toLowerCase() == "t"));

// // Get all movies director begins with T
// // Get the first movie in the list where the name contains "the"

// console.log(movies.find((movie) => movie.name.includes("The")));

// // Get the total run time of all movies in seconds

// console.log(
//   movies.map((movie) => movie.runtime.replace(/h/g, ".").replace(/m/g, ""))
// );
// // get the average imdb rating of all movies in the set
// console.log(
//   movies.reduce((acc, i) => )
// )
// // Get the newest movie

// // console.log(movies.
// //   )
// // Get movies that have a greater run time that 90mins

class BankAccount {
  constructor(name, email, balance = 0) {
    this.name = name;
    this.email = email;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  deposit(funds) {
    funds = parseInt(funds);
    if (funds == !NaN || funds > 0) {
      this._balance += funds;
      return this._balance;
    } else {
      return "Invalid input, unable to deposit";
    }
  }

  /**
   * A method that withdraws from the balance.
   * It checks if the input is correct.
   * If if it is incorrect it returns "Invalid input, unable to deposit".
   * If if it is correct but more then the balance it returns "Insufficient funds, unable to withdraw".
   * If it is correct it subtracts the input to the balance and returns the updated balance.
   * @param {(number|string)} toWithdraw 20 or "Bad Input" or 1000
   * @return {(number|string)} 40 or "Invalid input, unable to deposit" or "Insufficient funds, unable to withdraw"
   */

  withdraw(amount) {
    amount = parseInt(amount);
    if (amount == !NaN || amount < this._balance) {
      this._balance -= amount;
      return this._balance;
    } else if (amount > this._balance) {
      return "Insufficient funds, unable to withdraw";
    } else {
      return "Invalid input, unable to withdraw";
    }
  }
}

const newAcc = new BankAccount("m@gmail", "Mads", "5");

console.log(newAcc);

newAcc.deposit = 500;

console.log(newAcc.balance);

newAcc.withdraw("cheese");

console.log(newAcc.balance);
