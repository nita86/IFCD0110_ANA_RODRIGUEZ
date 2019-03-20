//JavaScript

//CONTADOR
function reloj() {
	var fecha=new Date();
	var ano= fecha.getFullYear();
	var mes= newFunction(fecha);//+1 porque enero 0, febrero 1, marzo 2.......
	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var nombreMes= meses[fecha.getMonth()];
	var dia= fecha.getDate();
	var hora= fecha.getHours();
	var min= fecha.getMinutes();
	var seg= fecha.getSeconds();
	var diaSemana= fecha.getDay()-1;//-1 porque domingo 0 lunes 1....
	var dias= ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];

document.getElementById("link1").innerHTML="Año "+ano;
	if(mes<10) {mes="0"+mes;}//cuando mes<10 se añade un 0 para que tenga dos cifras
document.getElementById("link2").innerHTML="Mes "+mes;
	if(dia<10) {dia="0"+dia;}//cuando dia<10 se añade un 0 para que tenga dos cifras
document.getElementById("link3").innerHTML="Dia "+dia;
	if(hora<10) {hora="0"+hora;}//cuando hora<10 se añade un 0 para que tenga dos cifras
document.getElementById("link4").innerHTML="Hora "+hora;
	if(min<10) {min="0"+min;}//cuando min<10 se añade un 0 para que tenga dos cifras
document.getElementById("link5").innerHTML="Minutos "+min;
	if(seg<10) {seg="0"+seg;}//cuando seg<10 se añade un 0 para que tenga dos cifras
document.getElementById("link6").innerHTML="Segundos "+seg;

document.getElementById("fechaLarga").innerHTML="hoy es "+dias[diaSemana]+" "+dia+ " de "+ nombreMes+ " de "+ ano;

setTimeout(reloj, 1000);//cada cuantos milisg se ejecuta la función reloj
}

function newFunction(fecha) {
	return fecha.getMonth() + 1;
}

//-------------------------------------
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

//Método newDate()
function nuevaFecha() {
  var fecha =new Date();
  document.getElementById("fecha").innerHTML="<strong>"+fecha+"</strong>";

setTimeout(nuevaFecha, 1000);//cada cuantos milisg se ejecuta la función nuevaFecha
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




