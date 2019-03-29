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