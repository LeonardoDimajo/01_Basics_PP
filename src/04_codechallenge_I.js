
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

//Geben Sie über eine Prompt-Anforderung eine Zahl ein.
let number1 = prompt("erste Zahl?: ");

//Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
let number2 = prompt("zweite Zahl?: ");

//Berechnen Sie die Summe der beiden Zahlen.
let summe = Number(number1) + Number(number2)

//Geben Sie die Summe der Zahlen in die Konsole aus:
console.log("Die Summe der Zahlen ist: " + summe);