// ? function

// ?Normal function or named function

// function jsp() {
//     console.log("we love jspider")
// }
// jsp()

// ?parameters : variable declared during function declaration
// ? argument : values passed to argument

// function add(a,b){
//     console.log(a+b)
//  console.log(arguments)
// }
// add(10,20,30,40)
// console.log(add.length)

// function sub(a,b=20){
//     console.log(a-b)
// }
// add(10,50)

// function div(a,b=20){ //default value
//     console.log(a/b)
// }
// div(10, undefined)

// function mul(a, b =29){ // default value
//     console.log(a*b)
// }
// mul(10,null)

// ? return value

// function name1 () {
//     return "sanjiw"
// }
// console.log(name1())
// let res = name1();
// console.log(res)

// ? what if not return value

// function demo(){
//     console.log("demo") // undefined
// }
// console.log(demo())
// let res1 = demo();
// console.log(res1) // undefined

// ? 2. Anonymous function

// let test = function() {
//     console.log("test")
// }
// test()

// let addition = function (a,b) {
//     console.log(a+b)
//     return a-b
// }
// let result = addition(10,20)
// console.log(result)


// ?arrow function

// let arrow = () => {
//     console.log("Arrow function")
// }
// arrow()

// let arrow2 = (a,b) => {
//     console.log(a+b)
//     console.log(arguments) // reference error
// }
// arrow2(100,200)

// let arrow3 = a => {
//     console.log("arrow function")
//     console.log(a)
// }
// arrow3(100)

//single line expression returns the value automatically
// let arrow4 =(a,b) => a+b
// console.log(arrow4(100,200))

//{} are mandatory for multiples lines  and return keyword

// let jsp1 =()=> {
//     console.log("js")
//     console.log("jspider")
//     console.log(this)
//     return "abc"
// }
// console.log(jsp1())

// ? limitations :
// no arguements object
// no this keywords
// can not be used as constructor

// ? IIFE(Immediately Invoked function expression)

// console.log("first");
// (function(){
//     console.log("IIFE USING ANONYMOUS")
// })
// ()

// ;
// (()=>{
//   console.log("IIFE using arrow")
// })
// ()


// ?  HOF : higher order function
// function accept another function as argument

// function jsp(a) {
//     console.log("jspiders")
//     a()
// }
// jsp(() => console.log("arrow as arguement"))

// function demo(test){
//     console.log("demo function")
//     test()
// }
// function test1() {
//     console.log("test function")
// }
// demo(test1)

// function return another function

// function qsp() {
//     console.log("qsp returns jsp")
//     return function() {
//         console.log("function return from qsp")
//     }
// }
// let jsp2 =qsp()
// jsp2()

//?Nested function

// function outer() {
//     console.log("outer function")
//     function inner() {
//         console.log("inner function")
//     }
//     inner()
// }
// outer()

//  var a = 100
//  let b =200
//  const c =300

//  console.log(a)
//  console.log(b)
//  console.log(c)

// console.log("fuction executing")
//  function demo(){
//     console.log("demo call")
//     console.log("jsp ")

//  }
//  demo()

//? counter example using closuer

function counter() {
    let count  = 0
    return() => {
        count++
        console.log(count)
    }

}
let incCount = counter()
incCount()
incCount()
incCount()