 
function muestra_alert(){

	alert('ejecuto funcion muestra alert por mouse over');
}
 function par_impar(){

 	var numero = document.getElementById('entrada').value;
 	alert(numero);
  	if(numero%2==0){
 		document.getElementById('texto_par_impar').innerHTML += ' número par';
 	}else{
 		document.getElementById('texto_par_impar').innerHTML += ' número impar';
 	}
 }

function ciudades (){

	var ciudades= new Array();
	var ciudad;
	var i=0;

	// for(i;i<4;i++){
	// 	ciudad= prompt('inserte ciudad');
	// 	ciudades[i]=ciudad;
	// }

	while(i<4){
		ciudad= prompt('inserte ciudad');
		ciudades[i]=ciudad;
		i=i+1;
	}

	var j=1;

	// for(j;j<4;j=j+2){
	// 	document.getElementById('ciudades').innerHTML += ciudades[j] + ', ';
	// }

	while(j<4){
		console.log('ciudad insertada en posicion ' 
		+j+ ' es ' + ciudades[j]);
		j=j+2;
	}

}










 
  





