

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

// output(sub(2,2));
// output(sub(2,-2));
// output(sub(2,0));

function sub(a,b) {
	return a - b;
}

// output(mult(2,2));
// output(mult(2,-2));
// output(mult(2,0));

function mult(a,b) {
	return a * b;
}



// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  