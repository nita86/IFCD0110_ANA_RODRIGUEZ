//funciones JavaScript

//ejercicio1
function edad() {
    var fecha= new Date(document.getElementById("date1").value);
    var fechaActual=new Date();
    var base;
    var resta;
    if (fecha<fechaActual) {
        base=(fechaActual-fecha);//el resultado está en milisegundos
        var seg=parseInt(base/1000);
        var min=parseInt(seg/60);
        var hora=parseInt(min/60);
        var dia=parseInt(hora/24);
        var mes=parseInt(dia/30);
        resta=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        resta=parseInt(resta);
        document.getElementById("etiqueta1").innerHTML=
        "<ul>"+
            "<li> tu edad actual es "+resta+" años</li>"+
            "<li>tu edad desglosada es:"+
                "<ul>"+
                "<li>"+resta+" años</li>"+
                "<li>"+mes+" meses</li>"+
                "<li>"+dia+" dias</li>"+
                "<li>"+hora+" horas</li>"+
                "<li>"+min+" minutos</li>"+
                "<li>"+seg+" segundos</li>"+
                "</ul"+
            "</li>"+
        "</ul>";
    }
    else {
        document.getElementById("etiqueta1").innerHTML="la fecha introducida debe ser mayor o igual a la actual"
    }  
}

//ejercicio 2
function formato() { 
    var entrada1=document.getElementById("number2").value;
    var entrada2=document.getElementById("number3").value;
    var entrada3=document.getElementById("number4").value;
    var fecha=new Date(entrada3,entrada2-1, entrada1);//año, mes-1, dia
    var cadena=fecha.toLocaleDateString();
    //d/m/yyyy
    var primerEspacio=cadena.indexOf("/");
    var segundoEspacio=cadena.lastIndexOf("/");
    //dd/mm/yyyy
    var nuevaFecha=new Array(cadena.slice(0,primerEspacio),cadena.slice(primerEspacio+1,segundoEspacio),cadena.slice(segundoEspacio+1));
    var hoy="";
    for (i=0; i<nuevaFecha.length; i++) {
        if (nuevaFecha[i]<10) {
            nuevaFecha[i]="0"+nuevaFecha[i];
        }
        if (i<2) {hoy=hoy+nuevaFecha[i]+"/";}
        else {hoy=hoy+nuevaFecha[i];}
    }
    var horarioActual=new Date();
    var nuevaHora=new Array(horarioActual.getHours(),horarioActual.getMinutes(),horarioActual.getSeconds());
    var hora="";//inicializamos la variable de tipo string
    for (i=0;i<nuevaHora.length;i++) {
        if(nuevaHora[i]<10) {
            nuevaHora[i]="0"+nuevaHora[i];
        }
    if (i<2) {hora=hora+nuevaHora[i]+"/";}
    else {hora=hora+nuevaHora[i];}
    }
    document.getElementById("etiqueta2").innerHTML="hoy es: "+hoy+"<br> y la hora actual es: "+hora;
    setTimeout(formato, 1000);//cada cuantos milisg se ejecuta la función
}

//ejercicio 3
function fechaLarga() {
    var fecha= new Date(document.getElementById("date3").value);
    var year= fecha.getFullYear();
	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var nombreMes= meses[fecha.getMonth()];
	var dia= fecha.getDate();
	var hora= fecha.getHours();
	var min= fecha.getMinutes();
	var seg= fecha.getSeconds();
    var diaSemana= fecha.getDay();
    var dias=["domingo","lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
    
    document.getElementById("etiqueta3").innerHTML="la fecha que has introducido es: "+dias[diaSemana]+" "+dia+ " de "+ nombreMes+ " de "+ year;
}

//ejercicio 4
function sesion() {
    var usuario=document.getElementById("text4").value;
    var fecha=new Date();
    var cadena=fecha.toLocaleDateString();
    //d/m/yyyy
    var primerEspacio=cadena.indexOf("/");
    var segundoEspacio=cadena.lastIndexOf("/");
    var dia=cadena.slice(0,primerEspacio);
    var mes=cadena.slice(primerEspacio+1,segundoEspacio);
    var year=cadena.slice(segundoEspacio+1);
    //dd/mm/yyyy
    var nuevaFecha=new Array(dia,mes,year);
    var hoy="";
    for (i=0; i<nuevaFecha.length; i++) {
        if (nuevaFecha[i]<10) {
            nuevaFecha[i]="0"+nuevaFecha[i];
        }
        if (i<2) {hoy=hoy+nuevaFecha[i]+"/";}
        else {hoy=hoy+nuevaFecha[i];}
    }
    var horarioActual=new Date();
    var nuevaHora=new Array(horarioActual.getHours(),horarioActual.getMinutes(),horarioActual.getSeconds());
    var hora="";//inicializamos la variable de tipo string
    for (i=0;i<nuevaHora.length;i++) {
        if(nuevaHora[i]<10) {
            nuevaHora[i]="0"+nuevaHora[i];
        }
    if (i<2) {hora=hora+nuevaHora[i]+":";}
    else {hora=hora+nuevaHora[i];}
    }
    document.getElementById("etiqueta4").innerHTML="hoy es: "+hoy+"<br> y la hora actual es: "+hora;
    setTimeout(sesion, 1000);//cada cuantos milisg se ejecuta la función
}

//ejercicio 5
function dias() {
    var fechaUsuario=new Date(document.getElementById("date5").value);
    var fechaSistema=new Date();
    var yearSistema=parseInt(fechaSistema.getFullYear());
    fechaUsuario.setFullYear(yearSistema);//no se puede meter en una variable porque lo transforma en miliseg
if (fechaUsuario>fechaSistema) { //no ha llegado su cumple
    var resta=parseInt((fechaUsuario-fechaSistema)/1000/60/60/24);//dias faltan
    document.getElementById("etiqueta5").innerHTML= "tu fecha de nacimiento es: "+document.getElementById("date5").value+" por lo que faltan "+resta+" dias para tu cumpleños"
    }  
    else {
        var resta=parseInt((fechaSistema-fechaUsuario)/1000/60/60/24); //dias transcurridos
        fechaUsuario.setFullYear(yearSistema+1);
        var faltan=parseInt((fechaUsuario-fechaSistema)/1000/60/60/24);//dias faltan
        document.getElementById("etiqueta5").innerHTML= "tu fecha de nacimiento es: "+document.getElementById("date5").value+" por lo que han transcurrido "+resta+" desde tu cumpleaños y faltan "+faltan+" dias hasta el siguiente"   
    }                    
}
