// importing prompt method 
const prompt = require("prompt-sync")();
// console.log(123124234);
// console.log("This is my first JS class with 79C");

// C variable declaration comparing with JS
// int, double, float, char, boolean = variable data type
// var- iable
// int a;
// float b = 12.34;
// before ES6
// var a = 12.234;
// console.log(a);
// after ES6
// let, const
// let temp = 30;
// // const age = 20;
// // console.log(temp);
// // console.log(age);
// // temp = 35;
// // age = 18;
// // console.log(temp);
// // console.log(age);
// // console.log('External JS file added');

// // data types in c: int, float, double, char
// // int x;
// // float y;
// // double z;
// // char c;


// // let x = 10, y = 20;
// // console.log(typeof (x));
// // var ans;
// // ans = x + y;
// // console.log(ans);

// // let a, b, res;
// // a = prompt('Enter your first number');
// // console.log(typeof (a));
// // a = parseInt(a);
// // console.log(typeof (a));
// // console.log('The number is:', a);
// // b = prompt("Enter your second number: ");
// // b = 40;
// // console.log(typeof (b));
// // console.log(b);

// // res = a + b;
// // console.log("your final result", res);
// // console.log('Saima' + 'Siddique');

// // var f;
// // f = prompt("Enter a float number");
// // // console.log(typeof (f));
// // f = parseFloat(f);
// // console.log(f.toFixed(2));

// // ES6 standard method JS---> let,const
// // c syntax comparison
// // conditional statements
// // if (condition ){
// //     statement
// // }
// // else{
// //     statement
// // }
// // let age;
// // age = parseInt(prompt());

// if (age > 20 && age < 30) {
//     console.log('Young person');
// }
// else if (age > 30 && age < 50) {
//     console.log('Mid aged person');
// }
// else if (age > 50) {
//     console.log('Aged person');
// }

// else {
//     console.log('child');
// }





// loop
// while, do..while, for

// initial variable's value has to be assigned
// while (condition )
// {
//     statement
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;//i+1
// }
myFunc();
// for ( initial_var , condition; variable_value_change){
//     condition
// }
// let i;
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// int array_name = [1,2,35]; 
// array index always starts from 0

let arr = [1, 2, 3, 5];
// console.log(typeof (arr));
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// for (let i = 0; i < 4; i++) {
//     console.log(arr[i]);
// }
// console.log('Element position', arr.indexOf(11));

// Function
// void function_name(parameter){
//     statement;
// }

//function definition
function myFunc() {
    console.log('First Js Function');
}

// myFunc();

function addFunc(a, b) {
    // let x, y, res;
    // x = 10;
    // y = 20;
    // res = x + y;
    res = a + b;
    console.log(res);
    return res;
}

let x, y;
x = 30;
y = 40;

let ret = addFunc(x, y);
console.log('return value', ret * 100);