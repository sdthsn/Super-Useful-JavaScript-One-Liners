/****************** Strings *********************/

//Capitalize the first letter of a sentence
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
//Convert a letter to his associate emoji
const letterToEmoji = c => String.fromCodePoint(c.toLowerCase().charCodeAt() + 127365);
//Reverse a String
const reverseString = (str) => str.split('').reverse().join('');
//know if a string is a palindrome
const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

/****************** Dates *********************/

// Knowing if a date corresponds to the current date

const isCurrentDay = (date) =>  new Date().toISOString().slice(0, 10) === date.toISOString().slice(0, 10);

//know if a date is between two dates
const isBetweenTwoDates = ( min, max, date) => date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
// know if a date falls on a weekend
const isWeekend = ( date ) => date.getDay() === 6 || date.getDay() === 0;

//Check if a date is in a year
const isInAYear = (date, year) => date.getUTCFullYear() === new Date(`${year}`).getUTCFullYear();

//Convert an hour to AM-PM format
const toAMPMFormat= (h) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? ' am.' : ' pm.'}`;

/****************** Arrays *********************/
//Copy an array to another array
const copyToArray = (arr) => [...arr];
//Get the unique elements from an Array
const getUnique = (arr) => [...new Set(arr)];

//Shuffle Array
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

//Group an Array by a property
// const groupBy = (arr, groupFn) =>   arr.reduce( (grouped, obj) => ({...grouped, [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj], }),{});
const groupBy = (arr, groupFn) =>   arr.reduce( (grouped, obj) => ({...grouped, [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj]}),{});
//Check if two arrays contain the same values

const containSameValues= (arr1, arr2) =>   arr1.sort().join(',') === arr2.sort().join(',');

/****************** Numbers *********************/

// calculate the factorial of a number
const getFactorial = (n) => (n <= 1 ? 1 : n * getFactorial(n - 1));
//obtain the Fibonacci of a number
const getFibonacci = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = getFibonacci(n - 1, memo) + getFibonacci(n - 2, memo)));

/****************** Utils *********************/
//Convert Celsius to Fahrenheit
const toFahrenheit= (celsius) => (celsius * 9) / 5 + 32;
//Convert Fahrenheit to Celsius
const toCelsius=  (fahrenheit) => (fahrenheit- 32) * 5 / 9;

//clear all cookies from the browser
const clearAllCookies = () => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));

//convert from HEX to RGB
const toRGB= (hex) => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));

//convert from RGB to HEX
const toHEX = (r,g,b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

//Check if a function is an Async function
const isAsyncFunction = (f) => Object.prototype.toString.call(f) === '[object AsyncFunction]';

//check if a code is running in the browser
const runningInBrowser = typeof window === 'object' && typeof document === 'object';

//Check if a code is running in node
const runningInNode= typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
//Detect Dark Mode
const isDarkMode = () =>  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
//Scroll to the Top
const toTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "start" });

//Scroll to Bottom
const toBottom = (element) => element.scrollIntoView({ behavior: "smooth", block: "end" });

//Convert a JSON to a Map
const jsonToMap = (json) => new Map(Object.entries(JSON.parse(json)));

//Generate a 128-bit UUID
const generateUUID = (a) => a ? (a^((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace( /[018]/g, generateUUID);

/***** to be added more ...................  *************/

