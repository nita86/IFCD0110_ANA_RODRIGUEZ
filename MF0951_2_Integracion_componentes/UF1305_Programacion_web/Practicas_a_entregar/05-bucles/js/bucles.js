// JavaScript Document

//ejercicio1
function nif() {
    var dni=document.getElementById('text1').value;
    var numero=dni.substr(0,dni.length-1);//la letra es el ultimo valor que introduce
    var letra=dni.substr(dni.length-1).toUpperCase();//corta desde la posición de la letra hasta el final y la pone en MAYUS porque las letras del array están en MAYUS
    //la formula con la que se hace es de la Policia Nacional
    var numeroDNI=numero % 23;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    //hay que ver si el valor arrojado en numero coincide con la letra que ocupa esa misma posicion
    var letraArray=letras[numeroDNI];
    if (letra == letraArray) {
        document.getElementById("etiqueta1").innerHTML="la letra es CORRECTA";
    }
    else {
        document.getElementById("etiqueta1").innerHTML="la letra es INCORRECTA";
    }
}

//ejercicio2
function signoZodiaco() { 
    var fecha= new Date(document.getElementById("date2").value);
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

    document.getElementById("etiqueta2").innerHTML=
    "naciste un "+dia+"/"+mes+"<br> <strong>Eres "+signo+"</strong> <br>"+
    "<img src="+"'"+img+"'"+"width=100px height=100px>";
}

//ejercicio 3
function categoria() {
    //edad
    var fecha= new Date(document.getElementById("date3").value);
    var fechaActual=new Date();
    var resta=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        resta=parseInt(resta);//edad en años
    if (resta <= 4) {document.getElementById("etiqueta3").innerHTML="eres muy joven para jugar con nosotros";}
    else {
    var categoria;
    //categoria
        switch(resta) {
            case 5://Prebenjamines = 5,6,7 años
            case 6:
            case 7:
                categoria="prebenjamines";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            case 8://benjamines
            case 9:
                categoria="benjamines";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            case 10://alevines
            case 11:
                categoria="alevines";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            case 12://infantiles
            case 13:
                categoria="alevines";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            case 14://cadetes
            case 15:
                categoria="cadetes";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            case 16://juveniles
            case 17:
            case 18:
                categoria="juveniles";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            default:
                categoria="aficionados";
                document.getElementById("etiqueta3").innerHTML="tu categoria es "+categoria;
                break;
            }
        } 
}

//ejercicio 4
function frutas() {
    var entrada=(document.getElementById("text4").value);//coge el string
    var frutas=entrada.split(" ");//corta los valores por los " " y crea el array
    var lista="";//para hacer la lista se declara la variable de texto
    for (i=0;i<frutas.length;i++) {
        lista += "<li>"+frutas[i]+"</li>";//+= se pone para que al recorrer el bucle se añadan los valores dentro de la lista en los distintos li
    document.getElementById('etiqueta4').innerHTML=lista;
    }
}

//ejercicio 5
function tabla() {
    var entrada=document.getElementById("number5").value;//lo que mete
    var i;//incremento
    var resultado="";//para hacer la tabla se hace como la lista anterior
    if(isNaN(entrada)) {
        alert("introducir solo numeros");
        return;//salir de la funcion
        }
    for (i=0; i<=10;i++) {
        resultado += "<tr><td>("+entrada+"x"+i+")="+(entrada*i)+"</td></tr>";
        document.getElementById('tabla').innerHTML=resultado;
    }
}
