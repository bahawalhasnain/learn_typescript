"use strict";
//Functions: A function is a block of code that perform a specific task
//Syntax of functions: function nameOfFunction(){}
function greet() {
    console.log("hello there!");
}
greet(); //Calling a function
function add(num1, num2) {
    return num1 + num2;
}
let sum1 = add(1, 2);
console.log("Sum of 1 and 2: ", sum1);
// ---------- JSON Object: ------------- 
// Array = ["valu1","value2"]
// object = {}
// keys : value
// one obkect cannot have two or more keys with same name
let obj = {
    name: "Bahawal",
    gender: "male",
    age: 20,
    isUser: true
};
console.log(obj);
console.log("key Name ", obj.name);
