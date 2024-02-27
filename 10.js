/*
you are given with an array of numbers both +ve and -ve.
your task is to print only the +ve numbers.
*/
let arr = [1, 2, -3, 5, -9, -8, -7, 7];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        console.log(arr[i]);
    }
}