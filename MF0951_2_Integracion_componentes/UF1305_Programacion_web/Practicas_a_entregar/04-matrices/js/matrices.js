//funciones JavaScript

//ejercicio1
function ejercicio1() {
    var entrada=document.getElementById("text1").value;//obtiene string
    var comas=entrada.replace(/,/g, " ");//quitar comas y poner espacios en su lugar
    var array=comas.split(" ");//quita espacios y convierte en un array
    array.splice (0,0, "Grupo Volkswagen:");//introducir los valores al inicio
    document.getElementById('etiqueta1').innerHTML=array;
}

//ejercicio 2
function ejercicio2() {
    var entrada=document.getElementById("text2").value;//obtiene string
    var comas=entrada.replace(/,/g, " ");//quitar comas y poner espacios en su lugar
    var array=comas.split(" ");//quita espacios y convierte en un array
    array.splice(0,0, "Grupo Volkswagen:");//introducir los valores al inicio
    array.push("Volkswagen", "Bentley", "Bugatti");//introducir los valores al final
    document.getElementById('etiqueta2').innerHTML=array;
}

//ejercicio 3
function ejercicio3() {
    var entrada=document.getElementById("text3").value;//obtiene string
    var comas=entrada.replace(/,/g, " ");//quitar comas y poner espacios en su lugar
    var array=comas.split(" ");//quita espacios y convierte en un array
    array.splice(0,0, "Grupo Volkswagen:");//introducir los valores al inicio
    array.push("Volkswagen", "Bentley", "Bugatti");//introducir los valores al final
    array.splice(1,0,"Ducati", "Lamborghini", "Porsche");//introducir los valores al en medio
    var cadena=array.toString();
    var posicionComa=cadena.indexOf(",");
    var quitaComa1=cadena.slice(0,17);
    var final = quitaComa1 + cadena.slice(18);
    document.getElementById('etiquetiqueta3').innerHTML=final;
}

//ejercicio 4
function ejercicio4() {
    var entrada=document.getElementById("text4").value;//obtiene string
    var comas=entrada.replace(/,/g, " ");//quitar comas y poner espacios en su lugar
    var array=comas.split(" ");//quita espacios y convierte en un array
    array.splice(0,0, "Grupo Volkswagen:");//introducir los valores al inicio
    array.push("Volkswagen", "Bentley", "Bugatti");//introducir los valores al final
    array.splice(1,0,"Ducati", "Lamborghini", "Porsche");//introducir los valores al en medio
    var seat=array.indexOf("seat");//4
    array.splice(5,0,"Sacania", "MAN");//introducir los valores al en medio
    var cadena=array.toString();
    var posicionComa=cadena.indexOf(",");//17
    var quitaComa1=cadena.slice(0,17);
    var final = quitaComa1 + cadena.slice(18);
    document.getElementById('etiqueta4').innerHTML=final;
}

//ejercicio 5
function ejercicio5() {
    var entrada=document.getElementById("text5").value;//obtiene string
    var array=entrada.split(",");//quita las comas y convierte en un array
    var longitud=array.length;
    //sort sobreescribe array y prevalece descendente, por lo que para mostrar el resultado hay que convertirlas en string
    var ascendente=array.sort(function(a, b){return a-b});//ascendente
    var cadenaAsc=ascendente.toString();
    var descendente=array.sort(function(a, b){return b-a});//descendente
    var cadenaDesc=descendente.toString();
    //aleatorio
    var aleatorio=new Array();//para que no sobreescriba sort se crea otro array sobre el que trabajamos
    for(i=0;i<array.length;i++) {
        var position =parseInt((Math.random() * 10));//genera numeros aleatorios en un rango 0-10 
        aleatorio.push(array[position]);//los numeros generados con random position en array[position] se usan como los parametros que introduce push en aleatorio
    }
    document.getElementById('etiqueta5').innerHTML="matriz original: "+entrada+"<br> Ascendente: "+cadenaAsc+"<br> Descendente: "+cadenaDesc+"<br> Aleatorio: "+aleatorio+"<br> Longitud: "+longitud;
}
