//?Object

// let std = {
//     name : 'Sanjiw',
//     email: 'sanjiw@00',
//     gender:'male',
//     degree: 'B.tech',
//     stream:'IT',
//     address: {
//         state: 'Bihar',
//         city: 'siwan',
//         pinCode: 841504,
//     }
// }

// console.log(std)
// console.log(std.email)
// console.log(std['degree'])
// console.log(std.address.state)
// console.log(std['address']['state'])

//? modify
// std.name="vickey"
// std.email='vickey@76gmail.com'
// console.log(std)

// ? delete

// delete std.address
// delete std.stream
// console.log(std)
// console.log(std.address)

// !2. by using new keyword:

// let person = new Object();
// console.log(person)

// ! 3. constructor function

// function student(name , age){
//     this.name = name;
//     this.age = age;

// }
// let s1 = new student("sanjiw", 22);
// console.log(s1)
// let s2 = new student("Ashish", 26);
// console.log(s2)

// ! 4 class:
// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age= age;
//     }
// }
// let p1 = new student("sanjiw", 22);
// console.log(s1)
// let p2 = new student("Ashish", 26);
// console.log(s2)


// let std = {
//     name : 'Sanjiw',
//     email: 'sanjiw@00',
//     gender:'male',
//     degree: 'B.tech',
//     stream:'IT',
//     address: {
//         state: 'Bihar',
//         city: 'siwan',
//         pinCode: 841504,
//     }
// }

// ? Object.keys();
// console.log(Object.keys(std))

//?2. Object.values():
// console.log(Object.values(std));

//? 3. object.entries():
// console.log(Object.entries(std))

//? 4. Object.assign()
// let p1 = {name:"abc", age:21}
// let p2 = {phno:363878222, email:"abc@gmail.com"}

// console.log(Object.assign(p1,p2))
// console.log(Object.assign({},p1,p2)) // Recomended way

// const p1 ={
//     name:'abc',
//     age:20
// }
// p1.age = 30
// console.log(p1.age)

// let a = {
//     a:10,
//     b:20
// }
// let b =a
// b.a = 30

// console.log(a.a)

// ? 5 Object.seal()
// Object.seal(p1)
// p1.age = 100
// p1.degree = 'b.tech'
// delete p1.age
// console.log(p1)

// ? 6 Object.freeze()
// Object.freeze(p1)
// p1.age=100
// p1.degree='b.tech'
// delete p1.age
// console.log(p1)


// ? Object.isSealed
// console.log(Object.isSealed)

//? Object.isFrozen(p1):
// console.log(Object.isFrozen)

// ! This keyword:
// ? In js file

// console.log(this) // window

// function demo(){
//     console.log(this)
// }
// demo()

// let arrow=() => {
//     console.log(this)
// }
// arrow()

// ? inside object
// let user = {
//     name : 'jsp',
//     age: 22,
//     demo:function(){
//         console.log(this)
//     },
//     arrow:() => {
//         console.log(this)
//     },
//     nestedArrow:function(){
//         let arrow=()=>{
//             console.log(this)
//         }
//         arrow()
//     }
// }
// user.demo()
// user.arrow()
// user.nestedArrow()

//? Dynamic behaviour of this keywords:

function test(){
    console.log(this)
}
test()

let person = {
    name: 'lala',
    phono: 98789886867
}






