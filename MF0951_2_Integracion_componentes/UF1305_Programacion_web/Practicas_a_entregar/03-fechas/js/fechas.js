//funciones JavaScript

//ejercicio1
function edad() {
    var fecha= new Date(document.getElementById("date1").value);
    var fechaActual=new Date();
    var base;
    var resta
    if (fecha<fechaActual) {
        base=(fechaActual-fecha);//el resultado está en milisegundos
        var seg=parseInt(base/1000);
        var min=parseInt(seg/60);
        var hora=parseInt(min/60);
        var dia=parseInt(hora/24);
        var mes=parseInt(dia/30);
        resta=(fechaActual-fecha)/1000/60/60/24/365;//pasar los milisegundos que arroja el resultado a años
        resta=parseInt(resta);
        document.getElementById("etiqueta1").innerHTML=
        "<ul>"+
            "<li> tu edad actual es "+resta+" años</li>"+
            "<li>tu edad desglosada es:"+
                "<ul>"+
                "<li>"+resta+" años</li>"+
                "<li>"+mes+" meses</li>"+
                "<li>"+dia+" dias</li>"+
                "<li>"+hora+" horas</li>"+
                "<li>"+min+" minutos</li>"+
                "<li>"+seg+" segundos</li>"+
                "</ul"+
            "</li>"+
        "</ul>";
    }
    else {
        document.getElementById("etiqueta1").innerHTML="la fecha introducida debe ser mayor o igual a la actual"
    }
    
}