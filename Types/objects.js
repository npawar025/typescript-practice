"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
sayHello({ last: "Samwell", first: "Tally" }); //order dose not matter while using but need all the keys should be present in it
var coordinate = {
    x: 23,
    y: 56
};
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
var ans = randomCoordinates();
console.log(ans);
// function randomCoordinateCreate(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: Math.random(), y: Math.random() };
// }
function randomCoordinateCreate(point) {
    return { x: point.x * Math.random(), y: point.y * Math.random() };
}
var answer = randomCoordinateCreate({ x: 6, y: 8 });
console.log(answer);
function calculatePayout(song) {
    return song.numOfStreams * 1.2;
}
function printSong(song) {
    console.log("".concat(song.credits.producer, "-").concat(song.name));
}
var mySong = {
    name: "Kaho Na Pyar Hai",
    artist: "Dont Know",
    numOfStreams: 2500,
    credits: {
        producer: "Dont Know",
        writer: "Dont Know"
    }
};
var payout = calculatePayout(mySong);
console.log(payout);
printSong(mySong);
var points = { x: 9, y: 8, z: 7 };
var firstUser = {
    id: 2321,
    name: "Tom"
};
console.log(firstUser.id);
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
var res = getProfit(cats);
console.log(res);
