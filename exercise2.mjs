/**
 * Exercise 2 : Using Objects and Arrow Functions
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise2.mjs
 */

const albumData = {
  name: "Thriller",
  artist: "Michael Jackson",
  releaseYear: 1982,
  tracks: [
    "Wanna Be Startin' Somethin'",
    "Baby Be Mine",
    "The Girl Is Mine",
    "Thriller",
    "Beat It",
  ],
};

// Your code here
const products = [
  "  mobile phone ",
  " laptop computer  ",
  "Headphones",
  "  smartwatch",
];

// Format product names
const formattedProducts = products.map(product => {
  const trimmed = product.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
});
console.log(formattedProducts);
