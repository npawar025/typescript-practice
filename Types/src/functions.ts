export {};

function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hello there ${person}!`;
}

const arrowFunction = (name: string, age: number, isAdult: boolean = false) => {
  if (isAdult) {
    return `Hi ${name} you can access this resource as your age is ${age}`;
  } else {
    return `Hi ${name} you can not access this resource as your age is ${age}`;
  }
};

//assigning default values to parameter
function greetPerson(person: string = "Stranger") {
  return `Hello there ${person}!`;
}

greetPerson();
greetPerson("Sachin");

let result = arrowFunction("Nilesh", 29, true); //order of arguments should be same as the parameters in function
console.log(result);

let hi = greet("Nilesh");
console.log(hi);

let sq = square(2);
console.log(sq);

//function parameter we can give annotation about function parameter values
//The default type for a function parameter is "any", if no type is specified.

//***Functions return types - Though typescript infers the return type of a function it is always good to use annotation for return
//types values

function addition(num: number): number {
  return num + num;
}
addition(9 + 8);

const sayHello = (person: string): string => {
  return `Hello there ${person}!`;
};
sayHello("Suraj");

const names = ["suraj", "sachin", "chetan"];

names.map(name => {
  name.toLowerCase();
});
//in case of a anonymous functions typescript will infer the type of parameter in which context it is called
//for case above it is called on a string array

//Exercise

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

const twoFer = (name: string = "you"): string => {
  return `One for ${name}, one for me`;
};

const ans = twoFer();
const ans1 = twoFer("Elton");
console.log(ans);
console.log(ans1);

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const ans2 = isLeapYear(2013);
console.log(ans2);
