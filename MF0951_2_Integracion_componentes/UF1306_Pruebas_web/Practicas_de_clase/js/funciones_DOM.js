//junciones JavaScript

function apagarTodas() {
    var bombillas=document.getElementsByClassName("imgBombilla");
    for (i=0;i<bombillas.length;i++) {
        bombillas[i].src="../img/pic_bulboff.gif";
    }
}

function pulsar() {
    document.getElementById('img1').src='../img/pic_bulbon.gif';
}

function doble() {
    document.getElementById('img2').src='../img/pic_bulbon.gif';
}

function derecho() {
    document.getElementById('img3').src='../img/pic_bulbon.gif';
}

function presiona() {
    document.getElementById('img4').src='../img/pic_bulbon.gif';
}

function mueve() {
    document.getElementById('img5').src='../img/pic_bulbon.gif';
}

function deja() {
    document.getElementById('img6').src='../img/pic_bulbon.gif';
}

function sobre() {
    document.getElementById('img7').src='../img/pic_bulbon.gif';
}

function fuera() {
    document.getElementById('img8').src='../img/pic_bulbon.gif';
}

function over() {
    document.getElementById('img9').src='../img/pic_bulbon.gif';
}

function suelta() {
    document.getElementById('img10').src='../img/pic_bulbon.gif';
}

function copia() {
    document.getElementById('demo1').innerHTML="has copiado el texto";
}

function corta() {
    document.getElementById('demo2').innerHTML="has cortado el texto";
}

function pega() {
    document.getElementById('demo3').innerHTML="has pegado el texto";
}

function tecla() {
    document.getElementById('demo4').innerHTML="has presionado una tecla";
}

function tecla2() {
    document.getElementById('demo5').innerHTML="has presionado una tecla";
}

function tecla3() {
    document.getElementById('demo6').innerHTML="has presionado una tecla";
}