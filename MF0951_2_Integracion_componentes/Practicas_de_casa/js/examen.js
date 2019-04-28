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
    var entrada=(document.getElementById("tres").value);//coge el string
    var frutas=entrada.split(",");//corta los valores por los "," y crea el array
    var lista="";//para hacer la lista se declara la variable de texto
    for (i=0;i<frutas.length;i++) {
        lista += "<li>"+frutas[i]+"</li>";//+= se pone para que al recorrer el bucle se añadan los valores dentro de la lista en los distintos li
    document.getElementById('pTres').innerHTML=lista;
    }
}


function cuatro() {
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

function cinco() {
    var bruto=document.getElementById('cinco').value;
    bruto=parseFloat(bruto);
    var dto=bruto-(bruto*0.20);
    var iva=bruto+(bruto*0.21);
    var total=String(bruto-dto+iva);//se convierte a string para poder quitar los decimales que sobran 
    var punto=total.indexOf(".");
    var corregido=total.slice(0,punto+3);//corta desde la posición 0 hasta doz por detrás del punto
    document.getElementById("pCinco").innerHTML="precio "+bruto+" euros <br>"+
    "descuento (-20%) "+dto+"<br>"+
    "impuestos (+21%)"+iva+"<br>"+
    "total "+corregido+" €";
}

function seis() {
    var fecha= new Date(document.getElementById("seis").value);
    var dia=fecha.getDate();
    var mes=fecha.getMonth()+1;
    var signo="";
    var img="";
    //aries 21marzo 20abril
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        signo="aries";
        img="../img/aries.jpg";
    }
    //Tauro (Fecha: Del 21 de abril al 20 de mayo) 
    else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
        signo="tauro";
        img="../img/tauro.jpg";
    }
    //Géminis (Fecha: Del 21 de mayo al 21 de junio)
    else if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)) {
        signo="géminis";
        img="../img/geminis.jpg";
    }
    //Cáncer (Fecha: Del 22 de junio al 22 de julio)
    else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
        signo="cáncer";
        img="../img/cancer.jpg";
    }
    //Leo (Fecha: Del 23 de julio al 23 de agosto)
    else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
        signo="leo";
        img="../img/leo.jpg";
    }
    //Virgo (Fecha: Del 24 de agosto al 23 de septiembre)
    else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
        signo="virgo";
        img="../img/virgo.jpg";
    }
    //Libra (Fecha: Del 24 de septiembre al 22 de octubre)
    else if ((dia >= 24 && mes == 9) || (dia <= 22 && mes == 10)) {
        signo="libra";
        img="../img/libra.jpg";
    }
    //Escorpio (Fecha: Del 23 de octubre al 22 de noviembre)
    else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {
        signo="escorpio";
        img="../img/escorpio.jpg";
    }
    //Sagitario (Fecha: Del 23 de noviembre al 21 de diciembre)
    else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo="sagitario";
        img="../img/sagitario.jpg";
    }
    //Capricornio (Fecha: Del 22 de diciembre al 19 de enero)
    else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 01)) {
        signo="capricornio";
        img="../img/capricornio.jpg";
    }
    //Acuario (Fecha: Del 20 de enero al 19 de febrero)
    else if ((dia >= 20 && mes == 01) || (dia <= 19 && mes == 02)) {
        signo="acuario";
        img="../img/acuario.jpg";
    }
    //Piscis (Fecha: Del 20 de febrero al 20 de marzo) 
    else {
        signo="piscis";
        img="../img/piscis.jpg";
    }
    document.getElementById("pSeis").innerHTML=
    "<p style='font-size:1.2em'><strong>Eres "+signo+"</strong></p> <br>"+
    "<img src="+"'"+img+"'"+"width=100px height=100px>";
    document.getElementById("pSeis").style.margin="0 auto";
}

function siete() {
    var entrada=document.getElementById("siete").value;//lo que mete
    var i;//incremento
    var resultado="";//para hacer la tabla se hace como la lista anterior
    if(isNaN(entrada)) {
        document.getElementById("pSiete").innerHTML="introduce sun número correcto";
        document.getElementById("pSiete").style.color="red";
        return;//salir de la funcion
        }
    else if ((entrada <1) || (entrada>10)) {
        document.getElementById("pSiete").innerHTML="introduce sun número correcto";
        document.getElementById("pSiete").style.color="red";
        return;//salir de la funcion
    }
    for (i=0; i<=10;i++) {
        resultado += "<tr><td>("+entrada+"x"+i+")="+(entrada*i)+"</td></tr>";
        document.getElementById("contenedor2").style.display = "block";
        document.getElementById('tabla').innerHTML=resultado;
    }
}

function ocho() {
    //edad
    var fecha= new Date(document.getElementById("ocho").value);
    var fechaActual=new Date();
    var resta=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        resta=parseInt(resta);//edad en años
    if (resta <= 4) {document.getElementById("pOcho").innerHTML="eres muy joven para jugar con nosotros";}
    else if (resta >= 20){document.getElementById("pOcho").innerHTML="eres muy mayor para jugar con nosotros";}
    else {
    var categoria;
    //categoria
        switch(resta) {
            case 5://Prebenjamines = 5,6,7 años
            case 6:
            case 7:
                categoria="prebenjamines";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            case 8://benjamines
            case 9:
                categoria="benjamines";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            case 10://alevines
            case 11:
                categoria="alevines";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            case 12://infantiles
            case 13:
                categoria="alevines";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            case 14://cadetes
            case 15:
                categoria="cadetes";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            case 16://juveniles
            case 17:
            case 18:
                categoria="juveniles";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            default:
                categoria="aficionados";
                document.getElementById("pOcho").innerHTML="tu categoria es "+categoria;
                break;
            }
        } 
}

function nueve() {
    //var nombre=prompt("introduce tu nombre", " ");
    //var apellidos=prompt("introduce tus apellidos", " ");
    //var telefono=prompt("introduce tu telefono", " ");
   // var mail=prompt("introduce tu email", " ");
    var fechaUser=prompt("introduce tu fecha de nacimiento", " ");
    alert(fechaUser);
    var fecha=new Date(fechaUser);
   // alert(fecha);
    var fechaActual=new Date();
    var edad;
    if (fecha<fechaActual) {
        edad=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        edad=parseInt(edad);
        
        document.getElementById("pNueve").innerHTML=
        "<table>"+
            "<tr><td>tu nombre es "+nombre+"</td></tr>"+
            "<tr><td>tus apellidos son "+apellidos+"</td></tr>"+
            "<tr><td>tu telefono es "+telefono+"</td></tr>"+
            "<tr><td>tu email es "+mail+"</td></tr>"+
            "<tr><td>tu edad es "+edad+"</td></tr>"+
        "</table>";
    }
    else {
        document.getElementById("pNueve").innerHTML="la fecha introducida debe ser mayor o igual a la actual"
    }  
}
