


window.onload=init;

function init(){

document.getElementById('evento_color').onmouseover=cambiaColor;
document.getElementById('evento_color').onmouseout=VuelveColor;


// COOKIES
document.getElementById('boton_span').onclick=cierraVentana;
	document.getElementById('boton_span').onmouseover=colorBoton;
	document.getElementById('boton_span').onmouseout=quitoColor;
	document.getElementById('span_cookie').onclick=cierraVentana;
	document.getElementById('span_cookie').onmouseover=cambioColor;
	document.getElementById('span_cookie').onmouseout=vuelvoOrigen;

	// EVENTOS CONFIRMACION

	document.getElementById('boton_pagina2_evento').onmouseover=texto_grande;

	



}


function muestra_mensaje(){
	alert('Rellene el formulario,por favor');
}


function cambiaColor(){
	document.getElementById('evento_color').style.backgroundColor='red';
	document.getElementById('evento_color').style.color='white';
}

function VuelveColor(){
	document.getElementById('evento_color').style.backgroundColor='gray';
	document.getElementById('evento_color').style.color='black';
}

// BARRA DE COOKIES


	function colorBoton(){
		document.getElementById('boton_span').style.backgroundColor='red';
	}


	function quitoColor(){
		document.getElementById('boton_span').style.backgroundColor='silver';
	}




	function cierraVentana(){
		 document.getElementById('cierra_cookie').style.display='none';
	}


	function cambioColor(){
		 document.getElementById('span_cookie').style.backgroundColor='red';
		 document.getElementById('span_cookie').style.color='white';
		 
	}	



	function vuelvoOrigen(){

		document.getElementById('span_cookie').style.backgroundColor='green';
		document.getElementById('span_cookie').style.color='black';
		
	}

	// EVENTOS PAGINA CONFIRMACION

	 function adios_page2(){
	 	alert('Sus datos estan enviados y guardados ,vuelva al formulario o cierre pagina');
	 	

	 }

 function texto_grande(){

 	document.getElementById("boton_pagina2_evento").style.fontSize='50px';
 }
