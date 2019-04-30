window.onload=inicio;

function inicio(){

	document.getElementById('boton_span').onclick=cierraVentana;
	document.getElementById('boton_span').onmouseover=colorBoton;
	document.getElementById('boton_span').onmouseout=quitoColor;

	document.getElementById('span_cookie').onclick=cierraVentana;
	document.getElementById('span_cookie').onmouseover=cambioColor;
	document.getElementById('span_cookie').onmouseout=vuelvoOrigen;
}


	function quitoColor(){
		document.getElementById('boton_span').style.backgroundColor= 'gray';
	}

	function colorBoton(){
		document.getElementById('boton_span').style.backgroundColor= 'blue';
	}

	function cierraVentana(){
		document.getElementById('cierra_cookie').style.display = 'none';
	}

	function cambioColor(){
		document.getElementById('span_cookie').style.backgroundColor = 'red';
		document.getElementById('span_cookie').style.color = 'white';

		// document.getElementById('texto_span').style.fontSize='20px';
	}

	function vuelvoOrigen(){
		document.getElementById('span_cookie').style.backgroundColor= 'green';
		document.getElementById('span_cookie').style.color= 'black';
		// document.getElementById('texto_span').style.fontSize= '12px';

	}

	// function cambioEstilos(){
		
	// 	document.getElementById('texto_span').style.fontSize = '20px';
	// 	document.getElementById('span_cookie').style.backgroundColor = 'red';
	// 	document.getElementById('span_cookie').style.color = 'white';

	// }
