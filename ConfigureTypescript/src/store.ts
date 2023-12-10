interface Product {
  name: string;
  quantity: number;
  price: number;
}
const printProduct = (product: Product): void => {
  console.log(`${product.name} - ${product.price} - ${product.quantity}`);
};

const book: Product = {
  name: "Last Train",
  quantity: 56,
  price: 345
};

printProduct(book);
