// ? Browser object model


// ! dialog Methods:
// ? prompt():
// let a = Number(prompt("enter value of a"));
// let b = Number(prompt("enter value of b"))
// console.log(a+b)


//? alert(message)
// alert("dont sleep in my class !")

// ? confirm():

// let res = confirm('Are you sure want to sleep in my class .... ?')
// console.log(res)

// ? SetTimeout(callback, delay):
// let std_id = setTimeout(() => {
//     console.log("hello")
// }, 3000);

// clearInterval(std_id)

// ? setInterval(callback, interval):
// let std_id1 = setInterval(() => {
//     console.log("hello")
// }, 3000);

// clearInterval(std_id1);

// for(let i = 1; i<=5; i++){
//     setTimeout(() => {
//         console.log(i)
//     },3000)
// }

for(var i = 1; i<=5; i++){
    setTimeout(() => {
        console.log(i)
    },3000)
}