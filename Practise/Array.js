// ?Question 1: Move all zeros to the end of an array
// ? [1, 3, 0, 4, 0, 6, 3, 0, 9, 0];
// let arr = [1, 3, 0, 4, 0, 6, 3, 0, 9, 0];
// console.log(arr.filter(el => el!==0).concat(arr.filter(el=>el===0)))


// ? 2nd approach 
// let arr = [1, 3, 0, 4, 0, 6, 3, 0, 9, 0];
// let j = 0;

// for(let i = 0; i< arr.length; i++){
//     if(arr[i] !==0){
//         arr[j] = arr[i];
//         j++;
//     }
// }
// for(let i = j; i< arr.length; i++){
//         arr[i] = 0
//     }
// console.log(arr);

// ?Question 2: If the element is even, cube it; otherwise, square it.

// let arr = [2, 4, 5, 6, 0, 9, 1, 3];
// for(let i =0; i< arr.length;i++){
//     if(arr[i] % 2 === 0){
//         arr[i] = arr[i] *arr[i] *arr[i] ;
//     }else{
//          arr[i] = arr[i] *arr[i];
//     }
// }
// console.log(arr);

//? approach 2
let arr = [2, 4, 5, 6, 0, 9, 1, 3];
console.log(arr.map(el => el%2 === 0? el ** 3:el ** 2))

//? Reverse each string in an array

// let arr = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
// let result = arr.map(str => str.split('').reverse().join(''));

// console.log(result);

//? Question 4: Return the length of each string:
// let arr = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];

// let result = arr.map(str => str.length);

// console.log(result);

//? Question 5: Find the second largest element in an array
// let arr = [10, 5, 20, 8, 15, 20, 3];

// let result = [...new Set(arr)].sort((a, b) => b - a);

// console.log(result[1]);

//? 2nd approach
// let arr = [10, 5, 20, 8, 15, 20, 3];

// let largest = -Infinity;
// let second = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         second = largest;
//         largest = arr[i];
//     } else if (arr[i] > second && arr[i] !== largest) {
//         second = arr[i];
//     }
// }

// console.log(second); // 15

//? Question 6: Remove duplicate elements from an array
// let arr = [1, 3, 2, 4, 3, 5, 1, 6, 2];

// let result = arr.filter((num, index) => {
//     return arr.indexOf(num) === index;
// });

// console.log(result);

//! Arrays of object imp for interview