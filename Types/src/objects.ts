export {};

function sayHello(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

sayHello({ last: "Samwell", first: "Tally" }); //order dose not matter while using but need all the keys should be present in it

const coordinate: { x: number; y: number } = {
  x: 23,
  y: 56
};

function randomCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

const ans = randomCoordinates();
console.log(ans);

//Type aliases - when we are repeatedly using an object with more keys then we can make type aliases as below
type Point = { x: number; y: number };

// function randomCoordinateCreate(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: Math.random(), y: Math.random() };
// }

function randomCoordinateCreate(point: Point): Point {
  return { x: point.x * Math.random(), y: point.y * Math.random() };
}

const answer = randomCoordinateCreate({ x: 6, y: 8 });
console.log(answer);

type Song = {
  name: string;
  artist: string;
  numOfStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numOfStreams * 1.2;
}

function printSong(song: Song): void {
  console.log(`${song.credits.producer}-${song.name}`);
}

const mySong = {
  name: "Kaho Na Pyar Hai",
  artist: "Dont Know",
  numOfStreams: 2500,
  credits: {
    producer: "Dont Know",
    writer: "Dont Know"
  }
};

const payout = calculatePayout(mySong);
console.log(payout);
printSong(mySong);

//If in object I dont want any property to be compulsory then just put an ? mark in front of it doing so if we dont have that property
//or missing it then it will not complain or throw any error

type MyPoint = {
  x: number;
  y: number;
  z?: number;
};

const points: MyPoint = { x: 9, y: 8, z: 7 };

//readonly access modifier in TS is used to show only readable things in objects we can not write to it

type User = {
  readonly id: number;
  name: string;
};

const firstUser: User = {
  id: 2321,
  name: "Tom"
};

console.log(firstUser.id);
// firstUser.id = 3432; we can not write to this property now

//Exercise
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};
const dune: Movie = {
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

const cats: Movie = {
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

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
const res = getProfit(cats);
console.log(res);
