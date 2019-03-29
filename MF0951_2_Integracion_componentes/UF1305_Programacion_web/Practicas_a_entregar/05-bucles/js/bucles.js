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
    //

document.getElementById("etiqueta2").innerHTML=
"naciste un "+dia+"/"+mes+"<br> <strong>Eres "+signo+"</strong> <br>"+
"<img src="+"'"+img+"'"+"width=100px height=100px>";
}