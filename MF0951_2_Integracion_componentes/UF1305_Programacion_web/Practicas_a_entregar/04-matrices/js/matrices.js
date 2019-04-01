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
    alert(final);
    var resultado
}

