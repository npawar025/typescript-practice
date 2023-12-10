// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [12, 34, 67, 30, 29];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var products = [
    { name: "pen", price: 34 },
    { name: "book", price: 67 }
];
function getTotal(products) {
    return products.reduce(function (acc, product) { return acc + product.price; }, 0);
}
var ans = getTotal(products);
console.log(ans);
