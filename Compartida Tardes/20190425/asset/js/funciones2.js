
var numero = 0;
var texto = 'Mi nombre';
const dato = 'fecha';
var colores= false;


 document.getElementById('color').onclick=cambioColor;

 document.getElementById('dia').onclick=dimeFecha;

 function dimeFecha(){
 	var fecha = new Date();
 	var dias = fecha.getDay();
 	var dia;

 	switch(dias){
 		case 0:
 		dia = 'Domingo';
 		break;
 		case 1:
 		dia = 'Lunes';
 		break;
 		case 2:
 		dia = 'Martes';
 		break;
 		case 3:
 		dia = 'Miércoles';
 		break;
 		case 4:
 		dia = 'Jueves';
 		break;
 		case 5:
 		dia = 'Viernes';
 		break;
 		case 6:
 		dia = 'Sábado';
 		break;
 		default:
 		dia = 'No válido'
 	}

 	 document.getElementById('fecha').innerHTML = 'Hoy es '+dia;
 	


 }

function cambioColor(){
	
	if(colores==false){
		document.getElementById('color').style.backgroundColor = 'grey';
		colores = true;
	} else{
		document.getElementById('color').style.backgroundColor = 'red';
		colores = false;
	}

}

accesoVariableGlobal();

function accesoVariableGlobal(){
	numero = 15;
	var numero = 2;
	var texto = 'Mi texto local'
	console.log('desde función variableGlobal, numero ' + numero);
	console.log('desde función variableGlobal, texto ' + texto);
	console.log('desde función variableGlobal, dato ' + dato);
	numero = 6;
	texto = 'Hola qué haces';
	console.log('desde función variableGlobal, numero ' + numero);
	console.log('desde función variableGlobal, texto ' + texto);
	console.log('desde función variableGlobal, dato ' + dato);
	numero2();
}

function numero2(){
	console.log('desde función numero2, numero ' + numero);
	console.log('desde función numero2, texto ' + texto);
	console.log('desde función numero2, dato ' + dato);
	numero = 17;
	texto = 'modifico global';
	console.log('desde función numero2, numero ' + numero);
	console.log('desde función numero2, texto ' + texto);
	console.log('desde función numero2, dato ' + dato);

}