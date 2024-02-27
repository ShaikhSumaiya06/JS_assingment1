/*
You are developing a booking application for a cinema.
The ticket price depends on the type of the viewer("child","adult",or "senior").
write a program which calculates the price accordingly and prints the total price to be paid.
let's assume the ticket price for a child is Rs100 , adult ticket
price is Rs.150 and ticket price for a senior is Rs.120.
*/
let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 5;
const priceObj = {
    child: 100,
    adult: 150,
    senior: 120
}
let totalPriceOfTickets = ((priceObj.child) * numberOfChilds) + ((priceObj.adult) * numberOfAdults) + ((priceObj.senior) * numberOfSeniors);
console.log(`The total ticket price is ${totalPriceOfTickets}`);