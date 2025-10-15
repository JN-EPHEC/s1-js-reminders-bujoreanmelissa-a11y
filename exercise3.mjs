/**
 * Exercise 3 : Destructuring and Spread Operators
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise3.mjs
 */

const userProfile = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  settings: {
    theme: "light",
    notifications: true,
  },
};

const newInfo = {
  lastName: "Smith",
  settings: {
    theme: "dark",
  },
};

// ...existing code...

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

// Arrow function to format album info
const formatAlbum = (album, showTracks = false) => {
  const { name, artist, releaseYear, tracks } = album;
  let result = `The album ${name} by ${artist}, released in ${releaseYear}, contains ${tracks.length} tracks.`;
  if (showTracks) {
    result += `\nTracks: ${tracks.join(', ')}`;
  }
  return result;
};

console.log(formatAlbum(albumData));
console.log(formatAlbum(albumData, true));
