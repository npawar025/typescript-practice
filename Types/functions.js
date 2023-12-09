"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(num) {
    return num * num;
}
function greet(person) {
    return "Hello there ".concat(person, "!");
}
var arrowFunction = function (name, age, isAdult) {
    if (isAdult === void 0) { isAdult = false; }
    if (isAdult) {
        return "Hi ".concat(name, " you can access this resource as your age is ").concat(age);
    }
    else {
        return "Hi ".concat(name, " you can not access this resource as your age is ").concat(age);
    }
};
//assigning default values to parameter
function greetPerson(person) {
    if (person === void 0) { person = "Stranger"; }
    return "Hello there ".concat(person, "!");
}
greetPerson();
greetPerson("Sachin");
var result = arrowFunction("Nilesh", 29, true); //order of arguments should be same as the parameters in function
console.log(result);
var hi = greet("Nilesh");
console.log(hi);
var sq = square(2);
console.log(sq);
//function parameter we can give annotation about function parameter values
//The default type for a function parameter is "any", if no type is specified.
//***Functions return types - Though typescript infers the return type of a function it is always good to use annotation for return
//types values
function addition(num) {
    return num + num;
}
addition(9 + 8);
var sayHello = function (person) {
    return "Hello there ".concat(person, "!");
};
sayHello("Suraj");
var names = ["suraj", "sachin", "chetan"];
names.map(function (name) {
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
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
var ans = twoFer();
var ans1 = twoFer("Elton");
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
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
var ans2 = isLeapYear(2013);
console.log(ans2);
