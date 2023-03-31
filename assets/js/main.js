/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1. Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

import songs from "./songs.js";
import * as utils from "./utils.js";

console.log('Ex 2.', songs.map(({ title }) => title.toUpperCase()));

console.log('Ex 3.', songs.filter(({ year }) => year < 1975));

const [{ title: firstSongTitle }] = songs;
console.log('Ex 4.', firstSongTitle);

console.log('Ex 5.', songs.find(({ title }) => title === "Hotel California"));

console.log('Ex 6.', utils.sum(4, 6, 5));

console.log('Ex 7.', songs.map(({ title, artist, year }) => `${title} - ${artist} (${year})`));

console.log('Ex 8.', songs.filter(({ artist }) => artist === "The Beatles").map(({ title }) => title));

console.log('Ex 9.', utils.sum(...songs.map(({ year }) => year)));

console.log('Ex 10.', Math.floor(utils.sum(...songs.map(({ year }) => year)) / songs.length));

const longestTitleLength = Math.max(...songs.map(({ title }) => title.length))
console.log('Ex 11.', songs.find(({ title }) => title.length === longestTitleLength));

const [{ title, artist, year }] = songs;
console.log('Ex 12.', `Title: ${title}, Artist: ${artist}, Year: ${year}`);

const [, ...restOfSongs] = songs;
console.log('Ex 13.', restOfSongs);

console.log('Ex 14.', songs.filter(({ title }) => title.includes("Love")));

console.log('Ex 15.', songs.every(({ title }) => title.length >= 5));

console.log('Ex 16.', songs.some(({ year }) => year >= 1980 && year < 1990));

const { title: aTitle, artist: anArtist, year: anYear } = songs.find(({ title }) => title === "Let It Be");
console.log('Ex 17.', `${anArtist} released ${aTitle} in ${anYear}`);

console.log('Ex 18.', songs.map(({ artist }) => artist));

const randomSong = () => songs[utils.getRandom(songs.length)];
console.log('Ex 19.', randomSong(), randomSong(), randomSong());

const oneWordTitleSongs = () => songs.map(({ title }) => title).filter((title) => !title.includes(' '));
console.log('Ex 20.', oneWordTitleSongs());