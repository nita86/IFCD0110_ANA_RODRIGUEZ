function cerrar(){
	
	var dots = document.getElementById("contenedor");
	//var btnText = document.getElementById("boton1");
  
	if (dots.style.display === "none") {
	  dots.style.display = "block";
  /*    btnText.innerHTML = "Cerrar"; 
	  moreText.style.display = "none";*/
	} else {
	  dots.style.display = "none";
  /*    btnText.innerHTML = "Ejecutar"; 
	  moreText.style.display = "inline";*/
	}

  }

function cerrar2() {
document.getElementById("contenedor2").style.display="none";	
}

//MÃ©todo newDate()
function nuevaFecha() {
  var fecha =new Date();
  document.getElementById("fecha").innerHTML=fecha;
}

//Método gerFullYear()
function nuevoAno() {
	var fecha = new Date();
	var ano= fecha.getFullYear();
	alert("el año actual es: "+ano);
}

//Método getMonth()
function nuevoMes() {
	var fecha = new Date();
	var mes= fecha.getMonth()+1;//+1 porque enero 0, febrero 1, marzo 2.......
	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var nombreMes= meses[fecha.getMonth()];
	alert("el mes actual es: "+mes+" ("+nombreMes+")");
}

//Método getDay()
function dia(){
	var fecha = new Date();
	var dia= fecha.getDate();
	alert("hoy es día: "+dia);
}

//Método getHours()
function hora(){
	var fecha = new Date();
	var hora= fecha.getHours();
	alert("estamos en la hora: "+hora);
}

//Método getMinutes()
function minuto(){
	var fecha = new Date();
	var minuto= fecha.getMinutes();
	alert("estamos en los minutos: "+minuto);
}

//Método getSeconds()
function segundo(){
	var fecha = new Date();
	var seg= fecha.getSeconds();
	alert("estamos en los segundos: "+seg);
}

//Método getMilliseconds ()
function miliseg(){
	var fecha = new Date();
	var miliseg= fecha.getMilliseconds();
	alert("estamos en los milisegundos: "+miliseg);
}

//Método getTime ()
function tiempo(){
	var fecha = new Date();
	var tiempo= fecha.getTime();
	alert("desde la fecha de inicio han pasado: "+tiempo+" milisegundos");
}

//Método getDay ()
function diaSemana(){
	var fecha = new Date();
	var diaSemana =fecha.getDay();
	var diaLetra= ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
	var letra= diaLetra[fecha.getDay()-1];//-1 porque domingo 0, lunes 1.......
	alert("el dia actual es: "+diaSemana+" ("+letra+")");
}




