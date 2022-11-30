
// 1. Generate UUID
/**
 * Generates a random UUID
 * @param a - The parameter a is a number that is used to generate the UUID. If you don't pass a
 * parameter, the function will generate a random number.
 */
const generateRandomUUID = (a) => (a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateRandomUUID));
//2. Shuffle array
/**
 * Return a new array with the elements of the original array in a random order.
 * @param arr - The array to shuffle.
 */
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// 3. Unique array
/**
 * It takes an array, converts it to a Set, and then converts it back to an array
 * @param arr - The array to be filtered.
 */
const getUnique = (arr) => [...new Set(arr)];

//4. Flatten array

/**
 * If the current element is an array, flatten it, otherwise, add it to the accumulator.
 */
const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

//5. Generate random colour
/**
 * Generate a random hex colour code.
 */
const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

//6. RGB < = > Hex code
/**
 * It takes three numbers, one for red, one for green, and one for blue, and returns a hexadecimal
 * string representing the color
 * @param r - red value
 * @param g - The green value of the color.
 * @param b - blue
 */
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

/**
 * It converts a hexadecimal color code to an RGB color code.
 * @param hex - The hexadecimal color code.
 */
const hexToRgb = (hex) => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

//7. Find the average of an array
/**
 * Given an array of numbers, return the average of those numbers.
 */
const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

//8. Casing conversion
/**
 * It converts a string to camel case.
 */
const toCamelCase = str => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index == 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');

/**
 * Replace all words in a string with the first letter capitalized and the rest of the letters
 * lowercase.
 */
const toTitleCase = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

/**
 * Replace all whitespace characters with underscores and convert the string to lowercase.
 */
const toSnakeCase = str => str.replace(/\s+/g, '_').toLowerCase();

//9. Degree < = > Radian
/**
 * Convert a degree value to a radian value.
 */
const degToRad = deg => deg * (Math.PI / 180);


/**
 * Convert radians to degrees.
 */
const radToDeg = rad => rad * (180 / Math.PI);

//10. Visualise a json array in a table
var data = [{ city: "New York" }, { city: "Chicago" }, { city: "Los Angeles" }];
console.table(data);
