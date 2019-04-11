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
//--------lightbox Ana----------------
function abrirFotoA(name) {//sacamos la información de this.id y la traemos a través del parametro name. Para que funcione, el id de la etiqueta« y el nombre del archivo deben coincidir (house1)
    var foto='<img id="'+name+'cuadroGrande" src="../img/'+name+'.jpg" alt="'+name+ '">';
    document.getElementById("contenido").innerHTML=foto;
    document.getElementById("cuadroGrande").style.display="block";
}

function fotosSrc(src) {//sacamos la información de this.src y la traemos a través del parametro src. 
    var foto='<img src="'+src+'">';
    document.getElementById("contenido").innerHTML=foto;
    document.getElementById("cuadroGrande").style.display="block";
}
//-------------Paco---------------
function abrirFoto1() {
    var foto='<img id="foto1" src="../img/house1.jpg" alt="House">';
    document.getElementById("contenido").innerHTML=foto;
    document.getElementById("cuadroGrande").style.display="block";
}
