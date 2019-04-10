//funciones ejercicio02

function abrir() {
    document.getElementById("cuadroGrande").style.display="block";
}
function cerrar() {
    document.getElementById("cuadroGrande").style.display="none";
}
//--------lightbox----------------
function caja() {
    var fotos=document.getElementsByClassName("img");
    for (i=0;i<fotos.length;i++) {
        var insertar=document.getElementById("contenido").src=fotos[i];
        fotos[i]=abrir()+insertar;
    }
}