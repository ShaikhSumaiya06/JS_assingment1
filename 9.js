/*
you are given an array of numbers and strings. your
task is to find the first string in the array.
on finding the first string print "found the first string" and its value.
*/

const arr = [1, 2, 999, 56, "Mihir", 1234, "Hala", "Megha"];
for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(`Found the first string : ${arr[i]}`);
        break;
    }
}