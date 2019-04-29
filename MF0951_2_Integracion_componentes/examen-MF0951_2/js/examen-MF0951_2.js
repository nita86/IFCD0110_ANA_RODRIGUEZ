//Funciones examen módulo JS

//---------------ejercicio1-----------------
function infoNavegador() {
//nombre nav
var navegador=navigator.appCodeName;
var userNombre=navigator.userAgent;
if(userNombre.indexOf("Firefox")>-1) {navegador="Firefox";}//si está firefox
else if ((userNombre.indexOf("Opera")>-1) || (userNombre.indexOf("OPR")>-1)) {navegador="Opera";}//si está opera/opr
else if ((userNombre.indexOf("Trident")>-1) || (userNombre.indexOf("MSIE")>-1)) {navegador="Internet Explorer";}//si está trident/msie
else if ((userNombre.indexOf("Edge")>-1)) {navegador="Edge";}//si está edge
else if ((userNombre.indexOf("Chrome")>-1)) {navegador="Chrome";}//si está chrome
else if ((userNombre.indexOf("Safari")>-1)) {navegador="Safari";}//si está safari
else {navegador="Desconocido";}

//propietario
var propietarioNav, propietario=navigator.userAgent;
if(propietario.indexOf("Firefox")>-1) {propietarioNav="Fundación Mozilla";}
else if ((propietario.indexOf("Opera")>-1) || (propietario.indexOf("OPR")>-1)) {propietarioNav="Opera software";}
else if ((propietario.indexOf("Trident")>-1) || (propietario.indexOf("MSIE")>-1)) {propietarioNav="Microsoft Corporation";}
else if ((propietario.indexOf("Edge")>-1)) {propietarioNav="Microsoft Corporation";}
else if ((propietario.indexOf("Chrome")>-1)) {propietarioNav="Google, Inc.";}
else if ((propietario.indexOf("Safari")>-1)) {propietarioNav="Apple Computer,";}
else {propietarioNav="Desconocido";}

//mostrar info
var text="";
text += "<p>Nombre del navegador "+navegador+"</p>";
text += "<p>Propietariodel navegador "+propietarioNav+"</p>";
document.getElementById("etiqueta1").innerHTML=text;
document.getElementById("etiqueta1").style.color="blue";
}

//---------ejercicio2----------------
function dos() {
    var fecha= new Date(document.getElementById("date2").value);
    var year= fecha.getFullYear();
	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var nombreMes= meses[fecha.getMonth()];
    var dia= fecha.getDate();
    var diaSemana= fecha.getDay();
    var dias=["domingo","lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];//las semanas empeizan por domingo
    document.getElementById("etiqueta2").innerHTML="la fecha que has introducido es: "+dias[diaSemana]+" "+dia+ " de "+ nombreMes+ " de "+ year;
    document.getElementById("etiqueta2").style.color="blue";
}

//-----------ejercicio3----------------
function tres() {
    var entrada=(document.getElementById("textfield1").value);//coge el string
    var comas=entrada.replace(/,/g, " ");//quitar comas y poner espacios en su lugar
    var frutas=comas.split(" ");//quita espacios y convierte en un array
    var lista="";//para hacer la lista se declara la variable de texto
    for (i=0;i<frutas.length;i++) {
        lista += "<li>"+frutas[i]+"</li>";//+= se pone para que al recorrer el bucle se añadan los valores dentro de la lista en los distintos li
    document.getElementById('etiqueta3').innerHTML=lista;
    document.getElementById('etiqueta3').style.color="green";
    }
}

//----------ejercicio4----------------
function cuatro() {
    var fecha=new Date(document.getElementById("date3").value);
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
        if (nuevaFecha[i]<10) {//si el numero que ocupa la posicio i<10
            nuevaFecha[i]="0"+nuevaFecha[i];//para que salgan dos digitos en dd y mm
        }
        if (i<2) {hoy=hoy+nuevaFecha[i]+"/";}//para que salgan las / entre dd mm yyyy
        else {hoy=hoy+nuevaFecha[i];}
    }
    var horarioActual=new Date();
    var nuevaHora=new Array(horarioActual.getHours(),horarioActual.getMinutes(),horarioActual.getSeconds());
    var hora="";//inicializamos la variable de tipo string
    for (i=0;i<nuevaHora.length;i++) {
        if(nuevaHora[i]<10) {//si el numero que ocupa la posicio i<10
            nuevaHora[i]="0"+nuevaHora[i];//para que salgan dos digitos en hh mm ss
        }
    if (i<2) {hora=hora+nuevaHora[i]+":";}//para que salgan los : entre hh mm ss
    else {hora=hora+nuevaHora[i];}
    }
    document.getElementById("etiqueta4").innerHTML="hoy es: "+hoy+"<br> y la hora actual es: "+hora;
    document.getElementById("etiqueta4").style.fontWeight="bold";
    setTimeout(cuatro, 1000);//cada cuantos milisg se ejecuta la función
}

//---------------ejercicio5----------------------
function cinco() {
    var bruto=document.getElementById("number1").value;
    bruto=parseFloat(bruto);//para que tenga decimales
    var dto=bruto-(bruto*0.20);
    var iva=bruto+(bruto*0.21);
    var total=String(bruto-dto+iva);//se convierte a string para poder quitar los decimales que sobran 
    var punto=total.indexOf(".");
    if (punto>-1) {//si tiene decimales
        var corregido=total.slice(0,punto+3);//corta desde la posición 0 hasta dos por detrás del punto
        document.getElementById("etiqueta5").innerHTML="precio "+bruto+" euros <br>"+
        "descuento (-20%) "+dto+"<br>"+
        "impuestos (+21%) "+iva+"<br>"+
        "total "+corregido+" €";
    } else {
        document.getElementById("etiqueta5").innerHTML="precio "+bruto+" euros <br>"+
        "descuento (-20%) "+dto+"<br>"+
        "impuestos (+21%) "+iva+"<br>"+
        "total "+total+" €";
    }
}

//----------------------ejercicio6-----------------------
function seis() {
    var fecha= new Date(document.getElementById("date4").value);
    var dia=fecha.getDate();
    var mes=fecha.getMonth()+1;
    var signo="";
    var img="";
    //aries 21marzo 19abril
    if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {
        signo="aries";
        img="img/aries.jpg";
    }
    //Tauro (Fecha: Del 20 de abril al 20 de mayo) 
    else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
        signo="tauro";
        img="img/taurus.jpg";
    }
    //Géminis (Fecha: Del 21 de mayo al 20 de junio)
    else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        signo="géminis";
        img="img/gemini.jpg";
    }
    //Cáncer (Fecha: Del 21 de junio al 22 de julio)
    else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
        signo="cáncer";
        img="img/cancer.jpg";
    }
    //Leo (Fecha: Del 23 de julio al 22 de agosto)
    else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
        signo="leo";
        img="img/leo.jpg";
    }
    //Virgo (Fecha: Del 23 de agosto al 22 de septiembre)
    else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
        signo="virgo";
        img="img/virgo.jpg";
    }
    //Libra (Fecha: Del 23 de septiembre al 22 de octubre)
    else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        signo="libra";
        img="img/libra.jpg";
    }
    //Escorpio (Fecha: Del 23 de octubre al 21 de noviembre)
    else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
        signo="escorpio";
        img="img/scorpio.jpg";
    }
    //Sagitario (Fecha: Del 22 de noviembre al 21 de diciembre)
    else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo="sagitario";
        img="img/sagittarius.jpg";
    }
    //Capricornio (Fecha: Del 22 de diciembre al 19 de enero)
    else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 01)) {
        signo="capricornio";
        img="img/capricorn.jpg";
    }
    //Acuario (Fecha: Del 20 de enero al 18 de febrero)
    else if ((dia >= 20 && mes == 01) || (dia <= 18 && mes == 02)) {
        signo="acuario";
        img="img/aquarius.jpg";
    }
    //Piscis (Fecha: Del 29 de febrero al 20 de marzo) 
    else {
        signo="piscis";
        img="img/pisces.jpg";
    }
    document.getElementById("etiqueta6").innerHTML=
    "<p style='font-size:1.2em'><strong>Eres "+signo+"</strong></p> <br>"+
    "<img src="+"'"+img+"'"+"width=100px height=100px>";
}

//---------------ejercicio7------------------
function siete() {
    var entrada=document.getElementById("number2").value;//lo que mete
    var i;//incremento
    var resultado="";//para hacer la tabla se hace como la lista anterior
    if(isNaN(entrada)) {//si no mete número
        document.getElementById("etiqueta7").innerHTML="introduce un número";
        document.getElementById("etiqueta7").style.color="red";
        return;//salir de la funcion
        }
    else if ((entrada <1) || (entrada>10)) {
        document.getElementById("etiqueta7").innerHTML="introduce un numero del 1-10";
        document.getElementById("etiqueta7").style.color="red";
        return;//salir de la funcion
    }
    for (i=0; i<=10;i++) {
        resultado += "<tr><td>("+entrada+"x"+i+")="+(entrada*i)+"</td></tr>";
        document.getElementById("contenedor2").style.display = "block";
        document.getElementById("tabla").innerHTML=resultado;
    }
}

//-----------------ejercicio8-----------------
function ocho() {
    //edad
    var fecha= new Date(document.getElementById("date5").value);
    var fechaActual=new Date();
    var resta=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        resta=parseInt(resta);//edad en años
    if (resta <= 5) {document.getElementById("etiqueta8").innerHTML="eres muy joven para jugar con nosotros";}
    else {
    var categoria;
    //categoria
        switch(resta) {
            case 6://Prebenjamines = 6,7,8 años
            case 7:
            case 8:
                categoria="prebenjamines";
                document.getElementById("etiqueta8").innerHTML="tu categoria es "+categoria;
                break;
            case 9://benjamines
            case 10:
                categoria="benjamines";
                document.getElementById("etiqueta8").innerHTML="tu categoria es "+categoria;
                break;
            case 11://alevines
            case 12:
                categoria="alevines";
                document.getElementById("etiqueta8").innerHTML="tu categoria es "+categoria;
                break;
            case 13://infantiles
            case 14:
                categoria="alevines";
                document.getElementById("etiqueta8").innerHTML="tu categoria es "+categoria;
                break;
            case 15://cadetes
            case 16:
                categoria="cadetes";
                document.getElementById("etiqueta8").innerHTML="tu categoria es "+categoria;
                break;
            case 17://juveniles
            case 18:
            case 19:
                categoria="juveniles";
                document.getElementById("etiqueta8").innerHTML="tu categoria es "+categoria;
                break;
            default:
                document.getElementById("etiqueta8").innerHTML="eres muy mayor para jugar con nosotros";
                break;
            }
        } 
}

//--------------ejercicio9------------------
function nueve() {
    var car={nombre:"Juan", apellidos:"Fernández", telefono:"654789452", email:"jfernandez@gamil.com", fecha:"02/07/1968", edad:"50 años"};
    var tabla="<table><tbody><tr>";
    for (var x in car) {//x es una variable que vale "Key(nombre, apellidos, telefono....)"
        tabla += "<td>"+x+"</td>";
    }
    tabla += "</tr><tr>";
    for (var i in car) {//i es una variable que vale "Key(nombre, apellidos, telefono....)"
    // car[i]=valor del objeto en la posicion i
        tabla += "<td>"+car[i]+"</td>";
    }
    tabla += "</tr></tbody></table>";
    document.getElementById("contenedor3").style.display="block";
    document.getElementById("contenedor3").innerHTML=tabla;
}

//--------------------------ejercicio10--------------------
function diez () {
    document.getElementById("padre").style.display="block"
    document.getElementById("p").innerHTML="Según el apartado 2 del artículo 22 de la LSSI le informamos que utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Tras aceptar o cerrar el mensaje, entendemos que acepta nuestra Política de Cookies.";
    document.getElementById("p").style.color="white";
}
function cerrar() {
    document.getElementById("padre").style.display="none";
}