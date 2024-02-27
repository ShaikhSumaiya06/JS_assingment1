/* 
You are working on a currency conversion application. write a program that has a variable which stores 
the amount in Indian Rupees(INR) and prints the equivalent amount in US Dollars(USD).
Use the current exchange rate of 1 USD = 82 INR
*/
let ammountInINR = 850;
let ammountInUSD = 82;
let exchange = ammountInINR / ammountInUSD;
console.log(`${ammountInINR} INR is ${exchange}`);