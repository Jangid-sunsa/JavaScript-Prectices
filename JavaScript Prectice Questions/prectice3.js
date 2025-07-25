/*You're given a list of products, each with:
Task:
    Calculate total value for each product (price × quantity).
    If quantity < 5, mark as "Low Stock".
    Print name, total value, and stock status for each product.
*/

const products = [
  { name: "Pen", quantity: 3, price: 10 },
  { name: "Notebook", quantity: 10, price: 50 },
  { name: "Bag", quantity: 2, price: 500 },
];

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  let totalValue = product.price * product.quantity;
  // console.log(totalValue);

  let stock;

  if (product.quantity < 5) {
    stock = "Low Stock";
  } else {
    stock = "In Stock";
  }
  console.log(`${product.name} : ${totalValue}, ${stock}`);
}
