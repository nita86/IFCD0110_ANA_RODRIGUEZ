//funciones prácticas examen

function uno() {
    if (document.getElementById("uno").value == ""){ //chequeo del campo vacio
        document.getElementById("pUno").innerHTML= "introduce una fecha";
        document.getElementById("pUno").style.color= "blue";
    } else {
        var fechaUsuario=new Date(document.getElementById("uno").value);
        var fechaSistema=new Date();
        var yearSistema=parseInt(fechaSistema.getFullYear());
        fechaUsuario.setFullYear(yearSistema);//no se puede meter en una variable porque lo transforma en milisegundos
            if (fechaUsuario>fechaSistema) { //no ha llegado la fecha
            var resta=parseInt((fechaUsuario-fechaSistema)/1000/60/60/24);//dias faltan
            document.getElementById("pUno").innerHTML= "introduce una fecha anterior a la actual";
            document.getElementById("pUno").style.color= "red";
        }  
        else {//fechaUsuario<fechaSistema
            var resta=parseInt((fechaSistema-fechaUsuario)/1000/60/60/24); //dias transcurridos
            document.getElementById("pUno").innerHTML= "han transcurrido "+resta+" dias";
            document.getElementById("pUno").style.color= "green";   
        } 
    } //Else campo lleno
    
}

function dos() {
    var fecha= new Date(document.getElementById("dos").value);
    var year= fecha.getFullYear();
	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var nombreMes= meses[fecha.getMonth()];
    var dia= fecha.getDate();
    var diaSemana= fecha.getDay();
    var dias=["domingo","lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
    document.getElementById("pDos").innerHTML="la fecha que has introducido es: "+dias[diaSemana]+" "+dia+ " de "+ nombreMes+ " de "+ year;
}

function tres() {

}


function cuatro () {
    var fecha=new Date(document.getElementById("cuatro").value);
    var cadena=fecha.toLocaleDateString();
    //d/m/yyyy
    var primerEspacio=cadena.indexOf("/");
    var segundoEspacio=cadena.lastIndexOf("/");
    var dia=cadena.slice(0,primerEspacio);
    var mes=cadena.slice(primerEspacio+1,segundoEspacio);
    var year=cadena.slice(segundoEspacio+1);
    //dd/mm/yyyy
    var nuevaFecha=new Array(dia,mes,year);
    var hoy="";//inicializamos la variable de tipo string
    for (i=0; i<nuevaFecha.length; i++) {
        if (nuevaFecha[i]<10) {
            nuevaFecha[i]="0"+nuevaFecha[i];
        }
        if (i<2) {hoy=hoy+nuevaFecha[i]+"/";}//para que salgan las / entre dd mm yyyy
        else {hoy=hoy+nuevaFecha[i];}
    }
    var horarioActual=new Date();
    var nuevaHora=new Array(horarioActual.getHours(),horarioActual.getMinutes(),horarioActual.getSeconds());
    var hora="";//inicializamos la variable de tipo string
    for (i=0;i<nuevaHora.length;i++) {
        if(nuevaHora[i]<10) {
            nuevaHora[i]="0"+nuevaHora[i];
        }
    if (i<2) {hora=hora+nuevaHora[i]+":";}//para que salgan los : entre hh mm ss
    else {hora=hora+nuevaHora[i];}
    }
    document.getElementById("pCuatro").innerHTML="hoy es: "+hoy+"<br> y la hora actual es: "+hora;
    setTimeout(cuatro, 1000);//cada cuantos milisg se ejecuta la función
}
