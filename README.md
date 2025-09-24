# Week 1: Introduction & Modern JavaScript Fundamentals

Welcome to the first week of our course on mobile development with React Native! This week, we are laying the essential groundwork by ensuring everyone is comfortable with modern JavaScript features. These concepts are crucial, as React and React Native use them extensively.

## Weekly Objectives

- **Master** key JavaScript ES6+ features (arrow functions, destructuring, `map`, `filter`, `reduce`).
- **Understand** and **use** asynchronous programming with Promises and the `async/await` syntax.
- **Set up** your work environment and get familiar with this course's Git workflow.

---

## Prerequisites

Before starting the exercises, please ensure you have completed the following steps:

1. **Install Node.js:**  
   Download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/en).  
   _Note: Node.js is required to run JavaScript code outside the browser and to use modern development tools._

2. **Verify Node.js Installation:**  
   Open your command prompt (Windows) or terminal (macOS/Linux) and run:

```bash
node -v
```

You should see the installed Node.js version number. If you see an error, repeat the installation process.

3. **Choose and Install a Code Editor:**  
   We recommend [Visual Studio Code](https://code.visualstudio.com/) for its features and integration with JavaScript/TypeScript.

- Download and install Visual Studio Code, or use another editor of your choice (e.g., Sublime Text, Atom).

4. **Install Git:**  
   If you do not already have Git installed, download it from [git-scm.com](https://git-scm.com/) and follow the installation instructions.

- Verify installation by running:
  ```bash
  git --version
  ```
  You should see the installed Git version.

Once you have completed these steps, you are ready to proceed with the exercises.

---

## Practical Exercises

To complete these exercises, follow this procedure:

1.  Make sure you are on the `main` branch: `git checkout main`
2.  Create and switch to the exercises branch: `git checkout -b week1-js-exercises`
3.  Create or edit an `exercise<X>.mjs`, where X is the exercise number, file where you will write your solutions. Write your results in console (`console.log()`).
4.  Execute the script using `node exercise<X>.mjs`
5.  Once the exercises are complete, commit your changes on this branch. **Do not merge it into `main`**.

### Exercise 1: Data Manipulation

```bash
☢️☢️☢️
"It's useless to use generative AI for this part, it has no sense. Please play the game, as the main goal is to learn. It's useful to master these JavaScript concepts before starting to work with React Native."
☢️☢️☢️
```

Given the following array of data, write the code to perform the operations listed below using modern array manipulation methods (`map`, `filter`, `reduce`).

```javascript
const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];
```

1.  **User Names:** Create a new variable `userNames` that contains an array with only the names of all users.
    - _Expected result:_ `['Alice', 'Bob', 'Charlie', 'David', 'Eve']`
2.  **Engineers:** Create a new variable `engineers` that contains an array of user objects working in the 'Engineering' specialty.
    - _Expected result:_ `[{ id: 2, ... }, { id: 4, ... }]`
3.  **Average Age:** Calculate the average age of all users and store it in a variable `averageAge`.
    - _Expected result:_ `31.2`
4.  **User Descriptions:** Create a new variable `userDescriptions` which is an array of strings describing each user.
    - _Expected format:_ `"Alice is 28 years old."`

---

### Exercise 2: String and Array Manipulation

---

### Scenario

You're working on an e-commerce application and need to clean up product data received from an API. You have a list of product names and need to format them for proper display.

### Working Data

```javascript
const products = [
  "  mobile phone ",
  " laptop computer  ",
  "Headphones",
  "  smartwatch",
];
```

### Instructions

1.  For each product name, remove any extra spaces at the beginning and end.
2.  Capitalize the first character of each name and make the rest lowercase.
3.  Store the formatted names in a new array.
4.  Display the final array in the console.

### Tips and Reminders 💡

- Use the `trim()` method to remove spaces.
- Think about `map()` to iterate over the array and create a new one.
- The `slice()`, `toUpperCase()`, and `toLowerCase()` methods will be useful for formatting.

---

## Exercise 3: Using Objects and Arrow Functions

### Scenario

Your music application manages information about artists and their albums. You have raw data and need to create a structured object for a clearer display.

### Working Data

```javascript
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
```

### Instructions

1.  Create an arrow function `formatAlbum` that takes an `album` object as a parameter.
2.  This function should return a formatted string using **template literals**. The string should look like this: `"The album Thriller by Michael Jackson, released in 1982, contains 5 tracks."`.
3.  Display the result of the function call in the console.
4.  Modify the function to accept an additional parameter, `showTracks`. If `showTracks` is `true`, add the list of tracks to the end of the string, like this: `"Tracks: Wanna Be Startin' Somethin', Baby Be Mine, ..."`. Use the `join()` method to format the list of tracks.

### Tips and Reminders 💡

- Arrow functions (`=>`) are more concise and useful for callbacks.
- Template literals (with backticks \`\`) allow you to inject variables directly into a string.
- Don't forget about object destructuring to easily access properties of the `album` object.

---

## 🏠 Homework Assignment 🏠

```bash
"If you achieve this exercice, you are more than ready to start working with React Native and the group project."
```

```
This assignment counts towards the continuous assessment grade for this course. As a reminder, continuous assessment represents 30% of the final grade.

⚠️ You are allowed to discuss the material with your classmates to aid understanding. However, any plagiarism will be penalized, and a grade of 0 will be given to all parties involved. If this occurs, thorough checks will be carried out on all future assignments.

You are not prohibited from using generative AI tools for your assignments. If you do use them, please add the prompts you used as comments in your code.

Your 'main' branch must be up to date by the defined deadline!
```

No assignment this week.

## Documentation and Resources

Feel free to consult these resources to help you. The key is to understand, not to copy-paste.

- **Arrow Functions:**
  - [MDN Web Docs: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- **Array Manipulation:**

  - [MDN Web Docs: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [MDN Web Docs: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [MDN Web Docs: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
  - [MDN Web Docs: Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

  - [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

- **Asynchronous Programming:**
  - [MDN Web Docs: Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  - [MDN Web Docs: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- **Fetch API:**

  - [MDN Web Docs: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

  For a comprehensive understanding and to deepen your knowledge of the concepts covered in the exercises, here is a list of official documentation that will be very useful.
