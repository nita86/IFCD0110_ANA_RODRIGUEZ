//funciones JavaScript

//ejercicio1
function edad() {
    var fecha= new Date(document.getElementById("date1").value);
    var fechaActual=new Date();
    //numero años
    var anoUser=fecha.getFullYear();
    var anoActual=new Date().getFullYear();
    var anos=(anoActual-anoUser);
    var resta;
    var resultado;
    if (fecha<fechaActual) {
        resta=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        resultado=resta.toFixed(0);
    }
    else {
        resta=(fecha-fechaActual)/1000/60/60/24/365;
        resultado=resta.toFixed(0);
    }
    var vida=(fechaActual-fecha)/1000/60/60/24/365+" años"+(fechaActual-fecha)/1000/60/60/24+" meses"+(fechaActual-fecha)/1000/60/60+" dias"+ (fechaActual-fecha)/1000/60+" minutos"
    alert(vida);
}