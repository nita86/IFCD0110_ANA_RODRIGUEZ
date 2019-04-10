//funciones ejercicio02

function abrir() {
    document.getElementById("cuadroGrande").style.display="block";
}
function cerrar() {
    document.getElementById("cuadroGrande").style.display="none";
}
function cerrar2() {
    document.getElementById("cuadroGrande").style.display="none";
}
//--------lightbox----------------
function caja() {
    var fotos=document.getElementsByClassName("img");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x[i].src + "<br>";}
}
//-------------Paco
function abrirFoto1() {
    var foto='<img id="foto1" src="../img/house1.jpg" alt="House">';
    document.getElementById("contenido").innerHTML=foto;
    document.getElementById("cuadroGrande").style.display="block";
}
