"use strict";
// 1- Write a script to log "Hello, World!" to the console.
console.log("Hello, World!");
// 2- Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 15;
if (temperature < 20) {
    console.log("It's cold!");
}
// 3- Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apples = 10;
let givenAway = 3;
let remainingApples = apples - givenAway;
console.log("Remaining apples:", remainingApples);
// 4- Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstname = "Bahawal";
let lastname = "Hasnain";
let fullName = firstname + " " + lastname;
console.log("Full Name:", fullName);
// 5- Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
if (5 > 3) {
    console.log("Yes");
}
else {
    console.log("No");
}
// 6- Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
let radius = 6;
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
// 7- Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
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
const age1 = 15;
if (age1 < 18) {
    console.log("You are a minor.");
}
else {
    console.log("You are an adult.");
}
// 10- Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function countPositiveNumbers(numbers) {
    let count = 0;
    for (const num of numbers) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
