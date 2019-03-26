//Funciones JavaScript

//Volumen
function obtenerlitros() {
       if (document.getElementById('number1').value!="") { 
           var valor=document.getElementById('number1').value;//obtiene el valor del input number1
           valor= parseInt(valor);
           var dl= valor*10;
           var cl= valor*100;
           var ml= valor*1000;
           document.getElementById("etiqueta1").innerHTML="el resultado es: "+dl+ " decilitros, "+cl+" <strong>centilitros y "+ml+" mililitros";
        } 
    else {
        alert("introduce un valor");
        }
}

//Longitud
function obtenerlongitud() {
    if (document.getElementById('number2').value!="") { 
        var valor=document.getElementById('number2').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var m= valor*1000;
        var cm= m*100;
        var mm= m*1000;
        document.getElementById("etiqueta2").innerHTML="el resultado es: "+m+ " metros, "+cm+" centímetros y "+mm+" milimetros";
     } 
    else {
        alert("introduce un valor");
        }
}

//tiempo
function obtenerTiempo() {
    if (document.getElementById('number3').value!="") { 
        var valor=document.getElementById('number3').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var h= valor*24;
        var min= h*60;
        var seg= min*60;
        document.getElementById("etiqueta3").innerHTML="el resultado es: "+h+ " horas, "+min+" minutos y "+seg+" segundos";
     } 
    else {
        alert("introduce un valor");
        }
}

//temperatura
function obtenerTemperatura() {
    if (document.getElementById('number4').value!="") { 
        var valor=document.getElementById('number4').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var F= (valor*1.8)+32;
        var k= valor+273.15;
        document.getElementById("etiqueta4").innerHTML="el resultado es: "+F+ " grados Fahrenheit y "+k+" grados Kelvin";
     } 
    else {
        alert("introduce un valor");
        }
}

//peso
function obtenerPeso() {
    if (document.getElementById('number5').value!="") { 
        var valor=document.getElementById('number5').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var kg= valor*1000;
        var g= kg*1000;
        var mg= g*1000;
        document.getElementById("etiqueta5").innerHTML="el resultado es: "+kg+ " kilogramos, "+g+" gramos y "+mg+" miligramos";
     } 
    else {
        alert("introduce un valor");
        }
}

//pesaje
function obtenerPesaje() {
    if (document.getElementById('number6').value!="") { 
        var valor=document.getElementById('number6').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var piedras= valor*0.1575;
        var lb= valor*2.2046;
        var oz= valor*35.274;
        var kilates= valor*5000;
        document.getElementById("etiqueta6").innerHTML="el resultado es: "+piedras+ " piedras, "+lb+" libras, "+oz+" onzas y "+kilates+" kilates";
     } 
    else {
        alert("introduce un valor");
        }
}

//distancia
function obtenerDistancia() {
    if (document.getElementById('number7').value!="") { 
        var valor=document.getElementById('number7').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var millas= valor*0.621371;
        var yardas= valor*1093.61;
        var pies= valor*3280.84;
        var pulgadas= valor*39370.1;
        document.getElementById("etiqueta7").innerHTML="el resultado es: "+millas+ " millas, "+yardas+" yardas, "+pies+" pies y "+pulgadas+" pulgadas";
     } 
    else {
        alert("introduce un valor");
        }
}

//moneda
function obtenerMoneda() {
    if (document.getElementById('number8').value!="") { 
        var valor=document.getElementById('number8').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var dolares= valor*1.13;
        var libras= valor*0.88;
        var yenes= valor*128.27;
        var yuanes= valor*7.85 ;
        document.getElementById("etiqueta8").innerHTML="el resultado es: "+dolares+ " dolares, "+libras+" libras, "+yenes+" yenes y "+yuanes+" yuanes";
     } 
    else {
        alert("introduce un valor");
        }
}

//velocidad
function obtenerVelocidad() {
    if (document.getElementById('number9').value!="") { 
        var valor=document.getElementById('number9').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var millas= valor*0.62137;
        var nudos= valor*0.539957;
        document.getElementById("etiqueta9").innerHTML="el resultado es: "+millas+ " millas/hora y "+nudos+" nudos";
     } 
    else {
        alert("introduce un valor");
        }
}

//areas
function obtenerArea() {
    if (document.getElementById('number10').value!="") { 
        var valor=document.getElementById('number10').value;//obtiene el valor del input number1
        valor= parseInt(valor);
        var hectareas= valor*100;
        var acres= valor*247.105;
        var millas= valor*0.386102;
        document.getElementById("etiqueta10").innerHTML="el resultado es: "+hectareas+ " hectareas, "+acres+" acres y "+millas+" millas cuadradas";
     } 
    else {
        alert("introduce un valor");
        }
}
