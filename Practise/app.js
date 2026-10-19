// ? if statement

// let age = 21
// if(age>=18){
//     console.log("Cast to vote")
// }

// ? if and else
 
// let age = 21
// if(age>=18){
//     console.log("eligible to vote")
// } else{
//     console.log("not eligible")
// }

// ? else if 

// let marks = 42
// if(marks >=90){
//     console.log("Topper")
// }
// else if(marks >=75){
//     console.log("Parents happy")
// }
// else if(marks >=60){
//     console.log("good one")
// }
// else if(marks >=35){
//     console.log("just passed")
// }else{
//     console.log("fail")
// }

//?Question 1 — Even or Odd

// let num = 10

// if(num%2 === 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }
// ? Question 2 — Positive, Negative, or Zero

// let num = 0;

// if (num < 0) {
//     console.log("Negative Number");
// } else if (num > 0) {
//     console.log("Positive Number");
// } else {
//     console.log("Zero");
// }

// ?Question 3 — Eligible to Vote
// let age =19
// if(age>=18){
//     console.log("eligible to vote")
// }else{
//     console.log("not eligible")
// }

// ?Question 4 — Find the Greatest of Two Numbers

// let a = 25
// let b = 40

// if (b > a) {
//     console.log(b + " is greater");
// } else {
//     console.log(a + " is greater");
// }

// ? Question 5 — Greatest of Three Numbers

// let a = 10
// let b = 25
// let c = 30

// if (a > b && a > c) {
//     console.log(a + " is greatest");
// } else if (b > a && b > c) {
//     console.log(b + " is greatest");
// } else {
//     console.log(c + " is greatest");
// }

// //? Question 6 — Grade Calculator
// let marks = 82
// if(marks >= 90){
//     console.log("A")
// }else if(marks >=75 && marks <= 89){
//     console.log("B")
// }else if(marks >=60 && marks <=74){
//     console.log("C")
// }else if(marks >=40 && marks<=50){
//     console.log("D")
// }else{
//     console.log("fail")
// }

//? Question 7 — Leap Year 📅

let year = 2024;

if (year % 400 === 0) {
    console.log("Leap Year");
} else if (year % 100 === 0) {
    console.log("Not a Leap Year");
} else if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}