// 1- Write a script to log "Hello, World!" to the console.
console.log("Hello, World!");

// 2- Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature: number = 15;
if (temperature < 20) {
  console.log("It's cold!");
}

// 3- Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apples: number = 10;
let givenAway: number = 3;
let remainingApples: number = apples - givenAway;
console.log("Remaining apples:", remainingApples);

// 4- Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstname: string = "Bahawal";
let lastname: string = "Hasnain";
let fullName: string = firstname + " " + lastname;
console.log("Full Name:", fullName);

// 5- Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
if (5 > 3) {
  console.log("Yes");
} else {
  console.log("No");
}

// 6- Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
let radius: number = 6;
function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

// 7- Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 8- Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperatures = [25, 28, 30, 22, 26];
let highestTemperature = temperatures[0];
for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > highestTemperature) {
    highestTemperature = temperatures[i];
  }
}
console.log("The highest temperature is:", highestTemperature);

// 9- Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
const age1: number = 15;
if (age1 < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

// 10- Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function countPositiveNumbers(numbers: number[]): number {
  let count: number = 0;
  for (const num of numbers) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}

// 11- Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'. 
function wordsStartingWithA(words: string[]): string[]
{
    const filteredWords: string[] = [];
    for (let i = 0; i < words.length; i++)
    {
        const word: string = words[i];
        if (word[0].toLowerCase() === 'a') {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}

// 12- Create a script that logs the second to last element of an array named fruits.
const fruits: string[] = ['apple', 'banana', 'orange', 'kiwi'];
let secondToLast: string | undefined = ''; // Initialize with a default value

for (let i = 0; i < fruits.length; i++) {
    if (i === fruits.length - 2) {
        secondToLast = fruits[i];
    }
}
console.log(secondToLast);

// 13- Develop a function that takes an array of numbers and returns a new array with each number squared.
function squareNumbers(numbers: number[]): number[] {
    const squaredNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        const squared: number = numbers[i] * numbers[i];
        squaredNumbers.push(squared);
    }
    return squaredNumbers;
}

// 14- Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray<T>(arr: T[]): T[]
{
    const reversedArray: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--)
    {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// 15- Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function logScoreStats(scores: number[]): void {
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceededMaxCount = 0;
    let fellBelowMinCount = 0;
    // Finding max and min scores
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
        }
    }
    // Counting scores exceeding max and falling below min
    for (const score of scores) {
        if (score > maxScore) {
            exceededMaxCount++;
        }
        if (score < minScore) {
            fellBelowMinCount++;
        }
    }
    console.log(`Number of times score exceeded maximum: ${exceededMaxCount}`);
    console.log(`Number of times score fell below minimum: ${fellBelowMinCount}`);
}


// 16- Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function removeFalseyValues(arr: any[]): any[]
{
    const filteredArray: any[] = [];
    for (const value of arr) {
        if (value) {
            filteredArray.push(value);
        }
    }
    return filteredArray;
}

// 17- Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const concatenatedArray: number[] = [...array1, ...array2];
console.log(concatenatedArray);

// 18- Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr: number[], isEven: boolean): number
{
    let sum = 0;
    for (const num of arr) {
        if ((num % 2 === 0 && isEven) || (num % 2 !== 0 && !isEven)) {
            sum += num;
        }
    }
    return sum;
}

// 19- Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function sumOfElement(arr: number[], isEven: boolean): number
{
    let sum = 0;
    for (const num of arr) {
        if ((num % 2 === 0 && isEven) || (num % 2 !== 0 && !isEven)) {
            sum += num;
        }
    }
    return sum;
}

// 20- Write a function to find and return the smallest number in an array of integers.
function findSmallestNumber(arr: number[]): number
{
    let smallest = arr[0];
    for (const num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}

// 21- Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(nums: number[]): number
{
    let product = 1;
    for (const num of nums) {
        product *= num;
    }
    return product;
}

// 22- Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function filterByLength(strings: string[], n: number): string[]
{
    const filteredStrings: string[] = [];
    for (const str of strings) {function findDuplicates(arr: any[]): void {
        const duplicates: any[] = [];
        const seen: {[key: string]: boolean} = {};
    
        for (const item of arr) {
            if (seen[item]) {
                duplicates.push(item);
            } else {
                seen[item] = true;
            }
        }
    
        console.log("Duplicates:", duplicates);
    }
        if (str.length > n) {
            filteredStrings.push(str);
        }
    }
    return filteredStrings;
}

// 23- Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr: any[]): void {
    const duplicates: any[] = [];
    const seen: {[key: string]: boolean} = {};

    for (const item of arr) {
        if (seen[item]) {
            duplicates.push(item);
        } else {
            seen[item] = true;
        }
    }

    console.log("Duplicates:", duplicates);
}

// 24- Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr: number[]): void
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i]++;
    }
}


// 25- Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr: any[], target: any): number
{
    let count = 0;
    for (const item of arr) {
        if (item === target) {
            count++;
        }
    }
    return count;
}

// 26- Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr: number[]): boolean
{
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// 27- Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names: string[]): string
{
    if (names.length === 0) return "";
    if (names.length === 1) return names[0];

    const lastTwo = names.slice(-2).join(" and ");
    const remaining = names.slice(0, -2).join(", ");
    
    return `${remaining ? remaining + ", " : ""}${lastTwo}`;
}

// 28- Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function fahrenheitToCelsius(temps: number[]): void
{
    const convertedTemps: number[] = [];
    for (const temp of temps) {
        convertedTemps.push((temp - 32) * 5 / 9);
    }
    console.log("Temperatures in Celsius:", convertedTemps);
}

// 29- Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(nums: number[]): {min: number, max: number, average: number} {
    if (nums.length === 0) {
        return { min: NaN, max: NaN, average: NaN };
    }

    let min = nums[0];
    let max = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const average = sum / nums.length;
    return { min, max, average };
}

// 30- Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr: any[], index1: number, index2: number): void
{
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// 31- Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countCharacterOccurrence(str: string, char: string): number
{
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// 32- Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
interface ToDoItem
{
    task: string;
    completed: boolean;
}
function logIncompleteTasks(todoList: ToDoItem[]): void {
    for (const item of todoList) {
        if (!item.completed) {
            console.log(item.task);
        }
    }
}

// 33- Write a function that takes an array of integers and sorts them from smallest to largest.
function sortArray(arr: number[]): number[]
{
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 34- Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayInReverse<T>(arr: T[]): void
{
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// 35- Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function basicCalculator(): void {
    const operand1 = 4;
    const operator = prompt("Enter the operator (+, -, *, /):");
    const operand2 = 2;

    let result: number;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}
