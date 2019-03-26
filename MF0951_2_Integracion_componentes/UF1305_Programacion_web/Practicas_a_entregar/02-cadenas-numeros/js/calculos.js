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
    document.getElementById("etiqueta2").innerHTML="precio "+bruto+" euros \n"+
    "descuento (-20%) "+dto+"\n"+
    "impuestos (+21%)"+iva+"\n"+
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
    
}