//funciones JavaScript

//ejercicio1
function sueldo() {
    var sueldoAnual=document.getElementById('number1').value;
    sueldoAnual=parseInt(sueldoAnual);
    var sueldoMes= sueldoAnual/14;
    var ss=(sueldoMes*6.4)/100;
    var irpf=(sueldoMes*15)/100
    var sueldoNeto= sueldoMes-(ss+irpf);
    var resultado=sueldoNeto.toFixed(0)//quitar los decimales
    document.getElementById("etiqueta1").innerHTML="tu sueldo neto mensual es de "+resultado+" euros";
}

//ejercicio2
function precio() {
    var bruto=document.getElementById('number2').value;
    bruto=parseInt(bruto);
    var dto=bruto-(bruto*0.20);
    var iva=bruto+(bruto*0.21);
    var total=bruto-dto+iva;
    document.getElementById("etiqueta2").innerHTML="precio "+bruto+" euros <br>"+
    "descuento (-20%) "+dto+"<br>"+
    "impuestos (+21%)"+iva+"<br>"+
    "total "+total+" euros";
}

//ejercico3
function descarga() {
    var peso=document.getElementById('number3').value;
    peso=parseInt(peso);//en megabyte
    var bajada=(peso*8)/10;//en megabits/s
    var resultado=bajada/60;//en megabits/min
    var tiempo=resultado.toFixed(0);//quitar los decimales
    document.getElementById("etiqueta3").innerHTML="te quedan "+tiempo+" minutos";
}

//ejercicio4
function frase() {
    var inicial=document.getElementById("number4").value;
    var comillas="\""+inicial+"\"";
    var mayusculas=inicial.toUpperCase();
    var minusculas=mayusculas.toLowerCase();
    var cortar=inicial.split(" ");//separamos cada palabra y las transformamos en valores individuales
    var reves=cortar.reverse().join(" "); 
    var cita="\"Cita:\""+inicial;
    document.getElementById("etiqueta4").innerHTML="tu frase inicial era: "+inicial+"<br> entrecomillada queda así: "+comillas+"<br> en mayúsculas: "+mayusculas+"<br> en minusculas: "+minusculas+"<br> del revés: "+reves+"<br> y con la palabra añadida: "+cita;
}

//ejercicio5
function numeros() {
    var inicial=document.getElementById("number5").value;
    var primerEspacio=inicial.indexOf(" ");
    var primerValor=inicial.slice(0,primerEspacio);
    var ultimoEspacio=inicial.lastIndexOf(" ");
    var segundoValor=inicial.slice(primerEspacio+1, ultimoEspacio);
    var tercerValor=inicial.slice(ultimoEspacio+1);
    var a=Number(primerValor);
    var b=Number(segundoValor);
    var c=Number(tercerValor);
    var suma=a+b+c;
    if (a>b && a>c) {
        document.getElementById("etiqueta5").innerHTML=
        "<ul><li>"+suma+"</li><li>"+a+" es el mayor</li></ul>";
    }
    else if (b>a && b>c) {
        document.getElementById("etiqueta5").innerHTML=
        "<ul><li>"+suma+"</li><li>"+b+" es el mayor</li></ul>";
    }
    else {
        document.getElementById("etiqueta5").innerHTML=
        "<ul><li>"+suma+"</li><li>"+c+" es el mayor</li></ul>";
    }
}    
