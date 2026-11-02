// ?Question 1: Move all zeros to the end of an array
//  [1, 3, 0, 4, 0, 6, 3, 0, 9, 0];
let arr = [1, 3, 0, 4, 0, 6, 3, 0, 9, 0];
let j = 0;

for(let i = 0; i< arr.length; i++){
    if(arr[i] !==0){
        arr[j] = arr[i];
        j++;
    }
}
for(let i = j; i< arr.length; i++){
        arr[i] = 0
    }
console.log(arr);