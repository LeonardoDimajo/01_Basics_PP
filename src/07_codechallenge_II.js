/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...
let name = prompt("Name?: ");
let age = prompt("Alter?: ");



if (age >= 0 && age <= 5) 
{
    console.log(name + " trinkt Milch." );   // true
}
else if (age >= 6 && age <= 12) 
{
    console.log(name + " trinkt Saft.");   // alt. true
 }  
 else if (age >= 13 && age <= 17) 
{
    console.log(name + " trinkt Cola.");   // alt. true
}  

else 
{
    console.log(name + " trinkt Wein."); // false
}
