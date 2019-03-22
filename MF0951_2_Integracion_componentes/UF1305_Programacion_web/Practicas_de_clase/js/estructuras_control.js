//JavaScript

//Estructura if
function horaIf() {
    var fecha=new Date();
    var hora=fecha.getHours();
    if(hora=8) {
        alert("despierta");
    }
    if(hora>=9 && hora<=12) {
        alert("buenos dias");
    }
    if(hora>=13 && hora<=20) {
        alert("buenas tardes");
    }
    if(hora>=21 && hora<=0) {
        alert("buenas noches")
    }
    if(hora>=1 && hora<8) {
        alert("vete a dormir");
    }
}

//Estructura else
function horaElse() {
    var fecha=new Date();
    var hora=fecha.getHours();
    if(hora<=12) {
        alert("son menos de las 12");
    }
    else {
        alert("son más de las 12");
    }
}

//Estructura else if
function horaElseIf() {
    var fecha=new Date();
    var hora=fecha.getHours();
    if(hora<=12) {
        alert("son menos de las 12");
    }
    else if(hora=13) {
        alert("es la 1, las 12 en Canarias");
    }
    else {
        alert("son más de la 1");
    }
}

//Estructura switch
function switchCase() {
    var fecha=new Date();
    var trimestre;
    switch(fecha.getMonth()) {
        case 0://se pueden agrupar varios casos que deben cumplir lo mismo
        case 1:
        case 2:
        case 3:    
            trimestre = "primer trimestre";
        break;
        case 4:
        case 5:
        case 6:
        case 7:
            trimestre ="segundo trimestre";
        break;
        case 8:
        case 9:
        case 10:
        case 11:
            trimestre="tercer trimestre";
    }
    alert("hoy es "+trimestre);
}  

//Estructura for
function bucleFor() {
    var array=new Array();
    for (i=0; i<5; i++) {
        array [i]=prompt("introduce un color");
    }
    alert (array);
    
}

