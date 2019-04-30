window.onload=inicio;

function inicio(){
	document.getElementById('operacion').onclick=infoUsuario;
}

var resultado;



function dimeNumero(){
	var n1 = parseInt(prompt('inserte primer operando'));	 
	var n2 = parseInt(prompt('inserte segundo operando'));
	var numeros = [n1,n2];
	return numeros;
}



function infoUsuario(){

	var oper = prompt('indique si quiere realizar suma o resta').toLowerCase();
	var cantidad = prompt('cuantos operandos quieren operar');
	 
	 switch(oper){
	 	case 'suma':
	 	var datos = dimeNumero();
	 	sumar(datos[0],datos[1]);
	 	break;
	 	case 'resta':
		var datos = dimeNumero();
	 	resta(datos[0],datos[1]);
	 	break;
	 	case 'multiplicacion':
		var datos = dimeNumero();
	 	multiplicacion(datos[0],datos[1]);
	 	break;
	 	case 'division':
	 	var datos = dimeNumero();
	 	division(datos[0],datos[1]);
	 	break;
	 	default:
	 	document.getElementById('resultado').innerHTML = 'La operación solicitada no es correcta. Las operaciones válidas son, suma, resta, multiplicacion y division';
	 }
}

function sumar(n1,n2){
	resultado= n1+n2;
	mensajeHTML();
}

function resta(arg3,arg4){
	resultado= arg3-arg4;
	mensajeHTML();
}

function multiplicacion(n1,n2){
	resultado= n1*n2;
	mensajeHTML();

}

function division(n1,n2){
	resultado = n1/n2;
	mensajeHTML();

}

function mensajeHTML(){
	document.getElementById('resultado').innerHTML = 'el valor de la operación es' + resultado;
}


