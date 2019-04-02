//funciones JavaScript

//tamaño ventana
function tamanoVentana() {
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    
    var x = document.getElementById("infoVentana");
    x.innerHTML = "la anchura de la ventana del navegador: " + w + " y su altura es: " + h + ".";
}

//ancho y alto de la pantalla
function pantalla() {
    document.getElementById("divBom").innerHTML="el ancho de pantalla es "+screen.width+" y el alto es "+screen.height;
}

//ancho y alto de la pantalla disponible
function pantallaDisponible() {
    document.getElementById("divBom").innerHTML="el ancho de pantalla disponible es "+screen.availWidth+" y el alto disponible es "+screen.availHeight;
}

//profuncidad de color y pixeles
function pantallaProfundidad() {
    document.getElementById("divBom").innerHTML="la profundidad de color de la pantalla es "+screen.colorDepth+" y los pixeles "+screen.pixelDepth;
}

//información página web
function urlPagina() {
    document.getElementById("infoPantalla").innerHTML="la localización de la página es "+windows.location.href;
}

function dominiioPagina() {
    document.getElementById("infoPantalla").innerHTML="el dominio de la página es "+windows.location.hostname;
}

function rutaPagina() {
    document.getElementById("infoPantalla").innerHTML="la ruta de la página es "+window.location.pathname;
}

function protocoloPagina() {
    document.getElementById("infoPantalla").innerHTML="el protocolo de la página es "+window.location.protocol;
}

function cargarPagina() {
    document.getElementById("infoPantalla").innerHTML="la página asignada es "+window.location.assign("https://www.w3schools.com");
}

//historial
function irAtras() {
    window.history.back()
}

function irAdelante() {
    window.history.forward()
}