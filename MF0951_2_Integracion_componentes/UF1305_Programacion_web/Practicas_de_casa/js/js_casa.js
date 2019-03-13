//JavaScript 

function mifuncion() {
    document.getElementById("demostracion").style.color="red";
    document.getElementById("demostracion").innerHTML="chanchan";
   }

function encenderBombilla() {
    var element=document.getElementsByClassName('pruebas'); // Obtiene los elementos y los almacena en un array [0,1,2]
    for (var i=0;i<element.length;i++){
        // var i Inicializa la variable con valor 0
        // element.length obtiene el tamaño del array = 3
        // i < element.length se ejecuta el bucle o loop mientras se cumpla la condición
        // i++ suma 1, cada vez que de produzca un ciclo completo
        element[i].src='../img/pic_bulbon.gif'; //Modifica la imagen 
        }
}

function apagarBombilla() {
    var element=document.getElementsByClassName('pruebas');
    for (var i=0;i<element.length;i++){
    element[i].src='../img/pic_bulboff.gif';
    }
}

function entrada() {
    respuesta=prompt ("¿qué quieres hacer?", " ");
    alert (respuesta);
}
function entrada2() {//sin parseInt
    valor1=prompt("dame el valor a", " ");
    valor2=prompt("dame el valor b", " ");
    operacion2 (valor1, valor2);
}
function operacion2(v1, v2) {//sin parseInt
    total=(v1+v2);
    alert (total);
}
function entrada3() {//con parseInt
    valor1=prompt("dame el valor a", " ");
    valor2=prompt("dame el valor b", " ");
    operacion3(valor1, valor2);
}
function operacion3(v1, v2) {//con parseInt
    total=parseInt(v1)+parseInt(v2);//convierte texto en número
    alert (total);
}

function mayormenor() {
    var a = document.getElementById("valor1").value;//obtiene el valor del input valor1
    var b = document.getElementById("valor2").value;//obtiene el valor del input valor2
    a = parseInt(a);
    b = parseInt(b);
    
    if(isNaN(a)||isNaN(b)) {
        //si a no es un número OR si b no es un numero
        alert("introducir solo numeros");
        return;//salir de la funcion
    }
    if(a<b) {
        alert("a es menor que b");//si se cumple a<b
    }
    else {
        alert("a es mayor que b");//si NO se cumple a<b
    }
}

function calcular(operacion) {
    var a=document.getElementById("valor3").value;
        a=parseInt(a);
    var b=document.getElementById("valor4").value;
        b=parseInt(b);
    if(isNaN(a) || isNaN(b)) {
        alert("introducir solo numeros");
        return;//salir de la funcion
    }
    switch(operacion) {
        case "suma":
        suma=a+b;
        alert("a+b es igual a "+suma);
        break;
        case "resta":
        resta=a-b;
        alert("a-b es igual a "+resta);
        break;
        case "multiplicacion":
        multiplicacion=a*b;
        alert("a*b es igual a "+multiplicacion);
        break;
        case "division":
        if (b!=0) {//b distinto de 0
            division=a/b;
            alert("a/b es igual a "+division);
        }
        else {
            alert ("b no puede ser 0");
        }
        break;
    }
}