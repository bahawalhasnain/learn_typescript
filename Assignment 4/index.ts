//1- Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string = "Hello, World!";
console.log(greeting);

//2- Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1: number = 10;
let num2: number = 5;
let sum: number = num1 + num2;
let difference: number = num1 - num2;
let product: number = num1 * num2;
let quotient: number = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

//3- Swap the values of two variables without using a third variable.
let a: number = 5;
let b: number = 10;
console.log("Before Swaping:");
console.log("a:", a);
console.log("b:", b);
[a, b] = [b, a];
console.log("After Swaping:");
console.log("a:", a);
console.log("b:", b);

//4- This applies to TypeScript. Create a string variable and try changing its type.
let myString: string = "Hello, World!";
let myNumber: number = parseInt(myString); // Assuming the string contains a valid number
console.log("Original string:", myString);
console.log("Converted to number:", myNumber);

//5- Use the modulus operator to find the remainder of two numbers.
let number1: number = 10;
let number2: number = 3;
let remainder: number = number1 % number2;
console.log("The remainder of", num1, "divided by", num2, "is", remainder);

//6- Increment a variable's value by 1 using two different methods.
number1++;
number1 = number1 + number1;

//7- Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1: boolean = true;
let b1: boolean = false;
let c1: boolean = true;
let andResult: boolean = a1 && b1 && c1;
let orResult: boolean = a1 || b1 || c1;
let notAResult: boolean = !a1;
let notBResult: boolean = !b1;
let notCResult: boolean = !c1;
// Print the results
console.log("AND gate result:", andResult);
console.log("OR gate result:", orResult);
console.log("NOT gate result for a:", notAResult);
console.log("NOT gate result for b:", notBResult);
console.log("NOT gate result for c:", notCResult);

//8-Show examples of using compound assignment operators.
number2 += number2;
number2 -= number2;
number2 *= number2;
number2 /= number2;

//9- Write a program to check if a number is even or odd.
let num = 6;
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//10- Check if a person is eligible to vote.
let age = 19;
if (age < 18 && age >= 0) {
  console.log("Not eligible to vote.");
} else if (age >= 18) {
  console.log("Eligible to vote.");
}

//11- Assign a grade based on a numerical score.
let scores: number = 85;
if (scores >= 90) {
  console.log("A");
} else if (scores >= 80) {
  console.log("B");
} else if (scores >= 70) {
  console.log("C");
} else if (scores >= 60) {
  console.log("d");
} else {
  console.log("F");
}

//12- Find the maximum of three numbers.
let x: number = 3;
let y: number = 4;
let z: number = 6;
if (x > y && x > z) {
  console.log(`Maximum number: ${x}`);
} else if (y > x && y > z) {
  console.log(`Maximum number: ${y}`);
} else if (z > x && z > y) {
  console.log(`Maximum number: ${z}`);
}

//13- Check if a given year is a leap year.
let year_days: number = 365;
if (year_days == 365) {
  console.log("Not leap year");
} else if (year_days == 366) {
  console.log("Leap year");
}

//14. Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheitTemp: number = 98.6;
let celsiusTemp: number = ((fahrenheitTemp - 32) * 5) / 9;
console.log("Temperature in Fahrenheit:", fahrenheitTemp);
console.log("Temperature in Celsius:", celsiusTemp.toFixed(2));

//15. Check if a number is positive, negative, or zero.
let number: number = 5;
if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//16. Write a program that prints the multiplication table of a given number up to 10.
console.log("Teble of 2:");
console.log("2 * 1 = ", 2 * 1);
console.log("2 * 2 = ", 2 * 2);
console.log("2 * 3 = ", 2 * 3);
console.log("2 * 4 = ", 2 * 4);
console.log("2 * 5 = ", 2 * 5);
console.log("2 * 6 = ", 2 * 6);
console.log("2 * 7 = ", 2 * 7);
console.log("2 * 8 = ", 2 * 8);
console.log("2 * 9 = ", 2 * 9);
console.log("2 * 10 = ", 2 * 10);
