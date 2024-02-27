/*
You are developing a form validation system.
write a program that takes user informations
(such as name, email, age) and uses the 'typeof'
operator to check the data type of each input .
print appropriate messages like "Name should be a string",
"Email should be a string",or "Age should be a number".
if any field is not proper.
*/
let name = "Mihir";
let email = "mihir90@gmail.com";
let age = "34";
if (typeof name !== "string") {
    console.log("Name should be a string..");
} else if (typeof age !== "number") {
    console.log("Age should be a number..");
} else if (typeof email !== "string") {
    console.log("Email should be a string..");
} else {
    console.log("Yahh! all the fields value are proper.");
}