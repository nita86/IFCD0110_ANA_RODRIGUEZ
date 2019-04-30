window.onload=inicio;

// variables locles
function inicio(){
	variablesLocales();
}

function variablesLocales(){
	 var numero=0;
	 const dato=2;
	 var texto = 'escribe lo que quieras';
	console.log('El valor de dato es ' + dato);
	for(let i=0;i<5;i++){
		console.log('valor de i dentro de for' + i);
	}
	// dato=17;

	console.log('En función variableslocales numero vale ' + numero);
	console.log('En función variableslocales texto vale ' + texto);
	nuevaFuncion(numero,texto);
}

function nuevaFuncion(numero,texto){
	console.log('El valor de dato es ' + dato);
	console.log('En función nuevaFuncion numero vale ' + numero);
	console.log('En función variableslocales texto vale ' + texto);

}





