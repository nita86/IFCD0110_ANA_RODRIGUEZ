//funciones JavaScript

//ejercicio1
function edad() {
    var fecha= new Date(document.getElementById("date1").value);
    var fechaActual=new Date();
    var base;
    var resta
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
    var dia=cadena.slice(0,primerEspacio);
    var mes=cadena.slice(primerEspacio+1,segundoEspacio);
    var year=cadena.slice(segundoEspacio+1);
    //dd/mm/yyyy
    var nuevaFecha;
    if(dia.length<2 || mes.length<2) {
        dia="0"+dia;
        mes="0"+mes;
        nuevaFecha=dia+"/"+mes+"/"+year;
    }
    else {
        nuevaFecha=dia+"/"+mes+"/"+year;
    }
    var horarioActual=new Date();
    var hora=horarioActual.getHours();
    var min=horarioActual.getMinutes();
    var seg=horarioActual.getSeconds();
    var nuevaHora;
    if(hora<10 || min<10 || seg<10) {
        hora="0"+hora;
        min="0"+min;
        seg="0"+seg;
        nuevaHora=hora+"/"+min+"/"+seg;
    }
    else {
        nuevaHora=hora+"/"+min+"/"+seg;
    }
    document.getElementById("etiqueta2").innerHTML="hoy es: "+nuevaFecha+"<br> y la hora actual es: "+nuevaHora;
    setTimeout(formato, 1000);//cada cuantos milisg se ejecuta la función reloj
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
	var diaSemana= fecha.getDay()-1;//-1 porque domingo 0 lunes 1....
    var dias= ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
    
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
    var nuevaFecha;
    if(dia.length<2 || mes.length<2) {
        dia="0"+dia;
        mes="0"+mes;
        nuevaFecha=dia+"/"+mes+"/"+year;
    }
    else {
        nuevaFecha=dia+"/"+mes+"/"+year;
    }
    var hora=fecha.getHours();
    var min=fecha.getMinutes();
    var seg=fecha.getSeconds();
    var nuevaHora;
    if(hora<10 || min<10 || seg<10) {
        hora="0"+hora;
        min="0"+min;
        seg="0"+seg;
        nuevaHora=hora+":"+min+":"+seg;
    }
    else {
        nuevaHora=hora+":"+min+":"+seg;
    }
    document.getElementById("etiqueta4").innerHTML="hola "+usuario+" has iniciado sesión el dia "+nuevaFecha+" a las "+nuevaHora;
}

//ejercicio 5
function dias() {
    fechaUsuario=new Date(document.getElementById("date5").value);
    fechaSistema=new Date();
    yearSistema=fechaSistema.getFullYear();
    nuevaFecharUsuario=fechaUsuario.setFullYear(yearSistema);
    
}
