
document.getElementById('opera').onclick=solicitaInfo;

function solicitaInfo(){

	var operacion = prompt('indique operación').toLowerCase();

	switch(operacion){
		case 'suma':
		suma();	
		break;
		case 'resta':
		resta();
		break;
		case 'multiplicacion':
		multiplicacion();
		break;
		case 'division':
		division();
		break;
		default:
		document.getElementById('resultado').innerHTML = 'Operación solicitada no válida';

	}
}

function obtenNumeros(){
		var n1= parseInt(prompt('inserte primer operando'));
		var n2= parseInt(prompt('inserte segundo operando'));	
		var numeros = [n1,n2]
		return numeros;
}

function suma(){
	var info = obtenNumeros();
	muestraResultado(info[0]+info[1]);
}

function resta(){
	var info = obtenNumeros();
	muestraResultado(info[0]-info[1]);
}

function division(){
	var info = obtenNumeros();
	var division = info[0]/info[1];
	muestraResultado(division);
}

function multiplicacion(){
	var info = obtenNumeros();
	var multiplicacion = info[0]*info[1];
	muestraResultado(multiplicacion);
}

function muestraResultado(resul){
	document.getElementById('resultado').innerHTML = 'El resultado es ' + resul;
}


