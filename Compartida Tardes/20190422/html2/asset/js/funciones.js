window.onload=init;

function init(){
	// alert('función para detectar eventos');
	document.getElementById('span_cookie').onmouseover=cambioEstilos;
document.getElementById('span_cookie').onclick=cierraCookie;
	
}


function cierraCookie(){

	document.getElementById('contenedor_cookie').style.display='none';
}

function cambioEstilos(){

	document.getElementById('span_cookie').style.backgroundColor = 'red';
	document.getElementById('span_cookie').style.fontSize = '30px';
}

function vuelveOrigen(){
	document.getElementById('span_cookie').style.backgroundColor='green';
	document.getElementById('span_cookie').style.fontSize='12px';
}
