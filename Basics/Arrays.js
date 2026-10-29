// ? Arrays

//way to create array
//?Literals:

// let arr = [20,'js',20,"true", 20n, {}, ()=>{}];
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[7])

// ? update
// arr[0] = 200
// console.log(arr)
// arr[50] = 1000
// console.log(arr)
// console.log(arr.length)

// //? Delete
// delete arr[0]
// console.log(arr)
// console.log(arr.length)

//new keyword
// let arr2 = [20,'js',20,"true", 20n, {}, ()=>{}];
// let arr3 = new Array(100) // length of array
// console.log(arr3.length)
// arr2[0]= 100
// console.log(arr[2])

// ?Method of Array

// ? 1 Mutating methods of array

// 1. push()
// let arr = [10, 20, 30, 40, 50];
// arr.push(60, 70, 80);
// console.log(arr); // [10, 20, 30, 40, 50, 60, 70, 80]

// 2. pop()
// let arr2 = [10, 20, 30, 40, 50];
// arr2.pop(); // removes 50
// arr2.pop(); // removes 40
// console.log(arr2); // [10, 20, 30]
// console.log(arr2.pop()); // 30

// 3. unshift()
// let arr3 = [10, 20, 30, 40, 50];
// arr3.unshift("java", "javascript", "sql");
// console.log(arr3); // ["java", "javascript", "sql", 10, 20, 30, 40, 50]

// 4. shift()
// let arr4 = [10, 20, 30, 40, 50];
// arr4.shift(); // removes 10
// arr4.shift(); // removes 20
// console.log(arr4); // [30, 40, 50]

// 5. splice()
// let arr5 = [10, 20, 30, 40, 50];
// console.log(arr5.splice(2)); // [30, 40, 50]
// console.log(arr5); // [10, 20]

// let arr6 = [10, 20, 30, 40, 50];
// console.log(arr6.splice(1, 2)); // [20, 30]
// console.log(arr6); // [10, 40, 50]

// let arr7 = [10, 20, 30, 40, 50];
// console.log(arr7.splice(3, 2, 60, 70)); // [40, 50]
// console.log(arr7); // [10, 20, 30, 60, 70]

// 6. reverse()
// let arr8 = [10, 20, 30, 40, 50];
// console.log(arr8.reverse()); // [50, 40, 30, 20, 10]
// console.log(arr8); // [50, 40, 30, 20, 10]

// 7. sort() with strings
// let names = [
//     "Rahul", "Lala", "rathi", "mandal", "bunty",
//     "Bubbli", "panda", "khushi", "shanmukha", "kashish"
// ];

// console.log(names.sort((a, b) => a.localeCompare(b)));
// ["bunty", "Bubbli", "kashish", "khushi", "Lala", "mandal", "panda", "Rahul", "rathi", "shanmukha"]

// console.log(names.sort((a, b) => b.localeCompare(a)));
// ["shanmukha", "rathi", "Rahul", "panda", "mandal", "Lala", "khushi", "kashish", "Bubbli", "bunty"]

// 8. sort() with numbers
// let arr9 = [100, 1, 30, 199, 101, 6, 9, 1000];

// console.log(arr9.sort()); // [1, 100, 1000, 101, 199, 30, 6, 9]
// console.log(arr9.sort((a, b) => a - b)); // [1, 6, 9, 30, 100, 101, 199, 1000]
// console.log(arr9.sort((a, b) => b - a)); // [1000, 199, 101, 100, 30, 9, 6, 1]

// //? Non-mutating methods
// let arr10 = [10, 20, 30, 40, 50, 30];

// 1. join()
// console.log(arr10.join()); // "10,20,30,40,50,30"
// console.log(arr10.join("")); // "102030405030"
// console.log(arr10.join(" ")); // "10 20 30 40 50 30"
// console.log(arr10.join("@")); // "10@20@30@40@50@30"

// 2. slice(start, end)
// console.log(arr10.slice(0, 3)); // [10, 20, 30]
// console.log(arr10.slice(2)); // [30, 40, 50, 30]
// console.log(arr10.slice(-2)); // [50, 30]

// 3. includes()
// console.log(arr10.includes(10)); // true
// console.log(arr10.includes(100)); // false

// 4. indexOf()
// console.log(arr10.indexOf(30)); // 2
// console.log(arr10.indexOf(300)); // -1

// 5. lastIndexOf()
// console.log(arr10.lastIndexOf(30)); // 5
// console.log(arr10.lastIndexOf(300)); // -1

// 6. at()
// console.log(arr10.at(0)); // 10
// console.log(arr10.at(3)); // 40
// console.log(arr10.at(10)); // undefined
// console.log(arr10.at(-1)); // 30
// console.log(arr10.at(-2)); // 50

// 7. concat()
// let arr11 = [100, 200, 300];

// console.log(arr10.concat(arr11));
// [10, 20, 30, 40, 50, 30, 100, 200, 300]

// console.log(arr11.concat(arr10));
// [100, 200, 300, 10, 20, 30, 40, 50, 30]

// console.log(arr11.concat(arr10, "js", "html", "java"));
// [100, 200, 300, 10, 20, 30, 40, 50, 30, "js", "html", "java"]

// 8. flat(depth)
// let nested = [10, 20, [30, 60, [80, 90], 200], 100, 500];

// console.log(nested.length); // 5
// console.log(nested); // [10, 20, [30, 60, [80, 90], 200], 100, 500]

// console.log(nested.flat());
// [10, 20, 30, 60, [80, 90], 200, 100, 500]

// console.log(nested.flat(1));
// [10, 20, 30, 60, [80, 90], 200, 100, 500]

// console.log(nested.flat(2));
// [10, 20, 30, 60, 80, 90, 200, 100, 500]

// console.log(nested.flat(3));
// [10, 20, 30, 60, 80, 90, 200, 100, 500]

// console.log(nested.flat(Infinity));
// [10, 20, 30, 60, 80, 90, 200, 100, 500]

// When you don't know the depth
// let nested2 = [10, [20, [30], 40], 50];

// console.log(nested2.flat(Infinity)); // [10, 20, 30, 40, 50]

//? 9.toSorted():
// let unsorted =[10,1,2,200,656,1000,9]
// let res = unsorted.toSorted()
// console.log(res)
// console.log(unsorted)

// ? we are javascript students
// o/p:1 students javascript are we
// o/p:2 stneduts tpircsavaj era ew
// o/p: ew era tpircsavaj stneduts

// let str = "we are javascript students"
//  let result = str.split("").reverse().join("")
// let result = str.split(" ").reverse().join(" ")

// let result = str.split(" ").reverse().join(" ");
// result = result.split("").reverse().join("");

// console.log(result)

// ? Array Advanced Methods:
// let arr =[10,20,3,30,40,50]
// arr.forEach((e1,i,arr)=> {
//     console.log(e1)
//     console.log(i)
//     console.log(arr)
// return e1 // returns undefined
// })

//? find():
// console.log(arr.find((e1) => {
//     return e1>30
// }))

// return first even and odd element of array

// console.log(arr.find((e1) => {
//     return e1 % 2 === 0

// }))
// console.log(arr.find(e1=>e1% 2 === 1))

// ? filter():
// console.log(arr.filter((e1)=> e1>30))
// console.log(arr.filter((e1) => e1>100))

// let arr = [
//     10, 0, "jsp", "abcd", "", 20, [],
//     false, null, undefined, {}, () => {},
//     44, 8, 20n
// ];

// ? 2. Truthy values
// console.log(arr.filter((el) => el));
// o/p: [10, "jsp", "abcd", 20, [], {}, () => {}, 44, 8, 20]

// ? 3. Falsy values
// console.log(arr.filter((el) => !el));
// o/p: [0, "", false, null, undefined]

//? map(callback)

// let nums = [1,2,3]
// console.log(nums.map(el=> el*el))

//? some(callback)
// let even = [2,4,6,8,10,3]
// console.log(even.some(el=> el%2 == 1) )

//? every(callback)
// let even = [2,4,6,8,10,3]
// console.log(even.every(el=> el%2 == 1) )

// console.log([].some(el=>el>10))
// console.log([].every(el=>el>10))

//? reduce(callback,intialvalue)
// let nums = [2,2,3]
// console.log(nums.map(el=> el* el).reduce((acc,el)=> acc+el));
// console.log(nums.reduce((acc,el) =>acc+(el*el),0))

let values = [1,9,0,9,2,1,3,5,1,0]
console.log(values.reduce((acc,el)=>{
    acc[el] = (acc[el] || 0) +1
    return acc

},{}))