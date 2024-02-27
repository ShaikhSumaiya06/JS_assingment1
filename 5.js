/*
you are building a shipping application. Write a program that takes the type of package
("standard","express",or "overnight") and uses a switch statement to calculate and print the 
estimated delivery time based on the package type.
for example, "standard" might takes 3-5 days,
"express" 1-days, and "overnight" would be delivered the next day.
*/
let typeOfPackage = 'Overnight';
switch (typeOfPackage) {
    case 'Standard':
        console.log("Your package will be delivered in next 3-5 days.");
        break;
    case 'Express':
        console.log("Your package will be delivered in next 1 day.");
        break;
    case 'Overnight':
        console.log("Your package will be deliverd by tomorrow. ");
        break;
    default:
        console.log("Invalid Package type.");
        break;
}