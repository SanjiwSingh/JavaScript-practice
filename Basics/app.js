// console.log("External js code")
//  let h1 = document.querySelector('h1')
//  h1.textContent = "Jspider"

//  // to//  place script tag in the head tag used defer async keyword

//? var:

// var a  //declaration
// a = 10 // initialization

// console.log(a)

// var b = 20 //dec & initi
// console.log(b)

// b = 30 // res -initi
// console.log(30)

// var b =200 // re dec
// console.log(b)

//?let
// let a
// a = 10
// console.log(a)

// let b = 20
// console.log(b)

// b=30
// console.log(b)

// let b = 200
// console.log(b)

//?const
// const a // declaration
//a =10 // initialization
//console.log(a)

// const b = 20
// console.log(b)

// b = 30
// console.log(b)

// const b = 200
// console.log(b)

//?scope
//Global
//Block
//Functional

// var a  = 10
// //global
// {
//     var a = 20
//     console.log(a)
//     let c  = 30 // block
//     const d  = 100 //block
//}
//console.log(b)

// console.log(a)
// console.log(c)
// console.log(d)

//?functional
// function Demo() {
//     var x =100
//     let y = 200
//     const z = 300
//     console.log(x)
// }
// Demo()
// console.log(x)
// console.log(y)
// console.log(z)

//Demo

//?Hoisting
// console.log(a) // undifiend
// var a = 10

// console.log(b)
// let b = 10

// console.log(c)
// const c  = 10

//?typeof

// var a=100
// let b="jsp"
// const c=true

// let d={}
// let e=[]

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)

//?Equality operators

// let a=10
// let b="10"

// console.log(a==b)
// console.log(a===b)

//?BigInt and number range
// let a=10n
// console.log(typeof a)

// range of number: -(2^53 - 1)

//?null and undefined

// console.log(null==undefined)
// console.log(null===undefined)

// console.log(undefined=="")
// console.log(null=="")

// console.log("2"+2-2)
// console.log(null==0)
// console.log(1/0)

// console.log(undefined+0)
// console.log("abcd"-20)

//?NaN

// console.log(typeof NaN)

// console.log(NaN==NaN)
// console.log(NaN===NaN)

// console.log(typeof typeof typeof NaN)

//? conditional statement

//if(condition)

// if(10>15) console.log("10 is grater")

// let age = 22
// if(age > 21){
//   console.log("Eligible for marrriage")
// } else{
//     console.log("Not Eligible ... kidooooo")
// }

//? else if

// let marks = 90
// if(marks>=90){
//     console.log("Sabhashhhh..... PROUD")
// }else if(marks>=75){
//    console.log("very good")
// }else if(marks>=55){
//     console.log("good one")
// }else if(marks>=35){
//     console.log("All is welll")
// }else{
//     console.log("fail wasted money")
// }

//?Swith():

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("its moday again .... !!");
//     break;
//   case 2:
//     console.log("its tuesday again .... !!");
//     break;
//   case 1:
//     console.log("its wedesday again .... !!");
//     break;
//     default: console.log("bad one")
// }


//? nested if():

// let balance = 400
// if(balance>0){
//     console.log("you have money too buy")
//     if(balance>300){
//         console.log("I will by biryani for me")
//     }
// }else{
//     console.log("call to papa and cry")
// }


// if("0") console.log("jsp")
// if([""]) console.log("jsp")


// ?Looping statement

// for(let i =1; i< 11; i++){
//     console.log(i)
// }

// let a =1;
// while(a<11){
//     console.log(a)
//     a++
// }

// let b = 1;
// do{
//     console.log(a)
//     b++
// }while(a<1)