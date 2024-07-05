

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/


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
const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";

output(div(2,2));
output(div(2,-2));
output(div(2,0));

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
  