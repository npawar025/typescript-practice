"use strict";
const printProduct = (product) => {
    console.log(`${product.name} - ${product.price} - ${product.quantity}`);
};
const book = {
    name: "Last Train",
    quantity: 56,
    price: 345
};
printProduct(book);
