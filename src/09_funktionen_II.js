

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  semi - check!
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const prompt = require('prompt-sync')({sigint: true});

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";
const ERNROR_STR_GEN = "Irgendwas ging schief!";

startApp()
function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
	
}

function getNum1() {
	return parseInt(prompt("Zahl 1?: "));
}
function getNum2() {
	return parseInt(prompt("Zahl 2?: "));
}
function getOp() {
	return prompt("OP?: ");
}
// Was soll gemacht werden?

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));

function calculator(a,b,op) {  
	switch (op) {
		case "+": // add
			return add(a,b);
		case "-": // sub
			return sub(a,b);
		case "*": // mult
			return mult(a,b);
		case "/": // div
		case ":": // div
			return div(a,b);
		default:
			return ERNROR_STR_GEN
	}
}

//Wie sollen die Aufgaben erledigt werden?

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a,b) {
	return a + b;
}

// module: subtraction a - b |  test:
// output(sub(2,2));
// output(sub(2,-2));
// output(sub(2,0));

function sub(a,b) {
	return a - b;
}

// module: multiplication a * b |  test:
// output(mult(2,2));
// output(mult(2,-2));
// output(mult(2,0));

function mult(a,b) {
	return a * b;
}

// module: divison a / b |  test:
// output(div(2,2));
// output(div(2,-2));
// output(div(2,0));

function div(a,b) {

	if (b == 0) {
		return ERROR_STR_DIV; // Ausnahme
		
	}
	return a / b; // Regel
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  