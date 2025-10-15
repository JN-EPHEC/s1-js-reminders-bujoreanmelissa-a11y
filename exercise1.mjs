/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]

const products = [
  "  mobile phone ",
  " laptop computer  ",
  "Headphones",
  "  smartwatch",
];

// Your code here
const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];

// 1. User Names
const userNames = users.map(user => user.name);
console.log('User Names:', userNames);

// 2. Engineers
const engineers = users.filter(user => user.specialty === 'Engineering');
console.log('Engineers:', engineers);

// 3. Average Age
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log('Average Age:', averageAge);

// 4. User Descriptions
const userDescriptions = users.map(user => `${user.name} is ${user.age} years old.`);
console.log('User Descriptions:', userDescriptions);
