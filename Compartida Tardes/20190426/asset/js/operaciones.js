
document.getElementById('opera').onclick=solicitaInfo;

document.getElementById('numero').onchange=calculaPrimo;

document.getElementById('loteria').onclick=loteria;

function loteria(){
	var combinacion = [];
	var i=0;
	var numero_aleatorio = 0;
	var repetido = false;
	while(i<6){
	 	numero_aleatorio= Math.floor(Math.random()*49)+1;
	 	if(i==0){
	 		combinacion[i]= numero_aleatorio;
	 		i++;
	 	}
	 	for(let j=0;j<combinacion.length;j++){
	 		if(numero_aleatorio == combinacion[j]){
	 			repetido=true;
	 			break;
	 		}
	 	}
	 	if(repetido == false){
	 		combinacion[i]= numero_aleatorio;
	 		i++;	
	 	}else{
	 		repetido=false;
	 	}
	}
	document.getElementById('muestra_combinacion').innerHTML = 'la combinación ganadora es ' +combinacion;
}

function calculaPrimo(){

	var numero = document.getElementById('numero').value;
	var primo = true;

	if (isNaN(numero)== true){
		document.getElementById('muestra_primo').innerHTML='Por favor introduzca un número válido';
	}else {
		for(var i=2;i<numero;i++){
			if(numero%i==0){
				primo = false;	
				break;
			}
		}

		if(primo == false){
			document.getElementById('muestra_primo').innerHTML='El número  ' + numero + ' no es primo';
		}else{
			document.getElementById('muestra_primo').innerHTML='El número  ' + numero + ' es primo';
		}
	}		
}


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
		var cantidad = prompt('Por favor indique cuantos números quiere operar');	
		var numeros = [];
		for (let i=0;i<cantidad;i++){
			let numero = parseInt(prompt('inserte el número'));
			 numeros.push(numero);
			 // numeros.push(prompt('inserte el número'));
			//numeros[i]=numero;
		}
		
		return numeros;
}

function suma(){
	var info = obtenNumeros();
	var resultado =0;
	for(let i=0;i<info.length;i++){
		resultado =resultado + info[i];
	}
	muestraResultado(resultado);
}

function resta(){
	var info = obtenNumeros();
	var resultado =info[0];
	for(let i=1;i<info.length;i++){
		resultado =resultado - info[i];
	}
	muestraResultado(resultado);
}

function division(){
	var info = obtenNumeros();
	var resultado =info[0];
	for(let i=1;i<info.length;i++){
		resultado =resultado/info[i];
	}
	muestraResultado(resultado);
}

function multiplicacion(){
	var info = obtenNumeros();
	var resultado =1;
	for(let i=0;i<info.length;i++){
		resultado =resultado*info[i];
	}
	muestraResultado(resultado);
}

function muestraResultado(resul){
	document.getElementById('resultado').innerHTML = 'El resultado es ' + resul;

}


