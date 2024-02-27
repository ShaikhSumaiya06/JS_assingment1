/*
you are building a simple login system. Implement the login feature that has two variables:
'username' and 'password'. you should check if the username is "admin" nad the password is "12345".
if both conditions are ture, print "login successful"; otherwise, print "invalid credentials".

*/

let username = "admin";
let password = "12345";
if (username === "admin" && password === "12345") {
    console.log("Login successful.");
} else { console.log("Invalid Credentials !"); }