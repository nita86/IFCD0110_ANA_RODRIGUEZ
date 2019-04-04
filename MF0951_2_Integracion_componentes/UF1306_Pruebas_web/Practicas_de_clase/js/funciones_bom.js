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
    x.innerHTML = "<h3>la anchura de la ventana del navegador: " + w + " y su altura es: " + h + "</h3>";
}

//ancho y alto de la pantalla
function pantalla() {
    document.getElementById("divBom").innerHTML = "el ancho de pantalla es " + screen.width + " y el alto es " + screen.height;
}

//ancho y alto de la pantalla disponible
function pantallaDisponible() {
    document.getElementById("divBom").innerHTML = "el ancho de pantalla disponible es " + screen.availWidth + " y el alto disponible es " + screen.availHeight;
}

//profuncidad de color y pixeles
function pantallaProfundidad() {
    document.getElementById("divBom").innerHTML = "la profundidad de color de la pantalla es " + screen.colorDepth + " y los pixeles " + screen.pixelDepth;
}

//información página web
function urlPagina() {
    document.getElementById("infoPantalla").innerHTML = "la localización de la página es " + windows.location.href;
}

function dominiioPagina() {
    document.getElementById("infoPantalla").innerHTML = "el dominio de la página es " + windows.location.hostname;
}

function rutaPagina() {
    document.getElementById("infoPantalla").innerHTML = "la ruta de la página es " + window.location.pathname;
}

function protocoloPagina() {
    document.getElementById("infoPantalla").innerHTML = "el protocolo de la página es " + window.location.protocol;
}

function cargarPagina() {
    document.getElementById("infoPantalla").innerHTML = "la página asignada es " + window.location.assign("https://www.w3schools.com");
}

//historial
function irAtras() {
    window.history.back()
}

function irAdelante() {
    window.history.forward()
}

function history() {
    window.history.go(-2);
}

//cajas emergentes
function alerta() {
    window.alert("esto es un mensaje de alerta");
}

function confirmar() {
    window.confirm("esto es un mensaje de confirmación");
}

function introducir() {
    window.prompt("introduce un valor", "hola Ana");
}

//tiempo
//setTimeout
function miFuncion() {
    alert('Hello');
}

//setInterval
var myVar;
function intervalo() {
    myVar = setInterval(myTimer, 1000);
}

function myTimer() {
    var d = new Date();
    document.getElementById('temporizador').innerHTML=d.toLocaleTimeString();
}

//clearInterval
function parar() {
    window.clearInterval(myVar);
}

//informacion navegador
function infoNavegador() {//funcion que va a contener todas las funciones que dan info del navegador

//motor navegador
var motorNombre=navigator.appName;
if (motorNombre === "Netscape") {
    motorNombre = "JavaScript";
    }
//nombre nav
var navegador=navigator.appCodeName;
var userNombre=navigator.userAgent;
if(userNombre.indexOf("Firefox")>-1) {navegador="Firefox";}
else if ((userNombre.indexOf("Opera")>-1) || (userNombre.indexOf("OPR")>-1)) {navegador="Opera";}
else if ((userNombre.indexOf("Trident")>-1) || (userNombre.indexOf("MSIE")>-1)) {navegador="Internet Explorer";}
else if ((userNombre.indexOf("Edge")>-1)) {navegador="Edge";}
else if ((userNombre.indexOf("Chrome")>-1)) {navegador="Chrome";}
else if ((userNombre.indexOf("Safari")>-1)) {navegador="Safari";}
else {navegador="Desconocido";}
//version nav Agente Usuario Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0
var version=navigator.appVersion;
var userVersion=navigator.userAgent;
if (userVersion.indexOf("Firefox")>-1) {
    var indice1=userVersion.lastIndexOf("Firefox/");
    var version=userVersion.substr(indice1,12);
    var localizar=version.search("/");
    var versionNav =version.slice(localizar+1,12);
}
else if (userVersion.indexOf("OPR")>-1) {
    var indice1=userVersion.lastIndexOf("OPR/");
    var version=userVersion.substr(indice1,12);
    var localizar=version.search("/");
    var versionNav =version.slice(localizar+1,12);
}
else if (userVersion.indexOf("Chrome")>-1) {
    var indice1=userVersion.lastIndexOf("Chrome/");
    var version=userVersion.substr(indice1,12);
    var localizar=version.search("/");
    var versionNav =version.slice(localizar+1,12);
}
else if (userVersion.indexOf("Edge")>-1) {
    var indice1=userVersion.lastIndexOf("Edge/");
    var version=userVersion.substr(indice1,12);
    var localizar=version.search("/");
    var versionNav =version.slice(localizar+1,12);
}
else if (userVersion.indexOf("Trident")>-1) {
    var indice1=userVersion.lastIndexOf("Trident/");
    var version=userVersion.substr(indice1,12);
    var localizar=version.search("/");
    var versionNav =version.slice(localizar+1,12);
}
else if (userVersion.indexOf("Safari")>-1) {
    var indice1=userVersion.lastIndexOf("Safari/");
    var version=userVersion.substr(indice1,12);
    var localizar=version.search("/");
    var versionNav =version.slice(localizar+1,12);
}else {version="Desconocido";}
//propietario
var propietarioNav, propietario=navigator.userAgent;
if(propietario.indexOf("Firefox")>-1) {propietarioNav="Fundación Mozilla";}
else if ((propietario.indexOf("Opera")>-1) || (propietario.indexOf("OPR")>-1)) {propietarioNav="Opera software";}
else if ((propietario.indexOf("Trident")>-1) || (propietario.indexOf("MSIE")>-1)) {propietarioNav="Microsoft Corporation";}
else if ((propietario.indexOf("Edge")>-1)) {propietarioNav="Microsoft Corporation";}
else if ((propietario.indexOf("Chrome")>-1)) {propietarioNav="Google, Inc.";}
else if ((propietario.indexOf("Safari")>-1)) {propietarioNav="Apple Computer,";}
else {propietarioNav="Desconocido";}
//lenguaje nav
var lenguaje=navigator.language;
//Plataforma
var plataforma=navigator.platform;
var userPlataforma=navigator.userAgent;
if((userPlataforma.indexOf("Chrome") >-1) ||//si la encuentra
    (userPlataforma.indexOf("OPR")>-1) ||
    (userPlataforma.indexOf("Edge")>-1) ||
    (userPlataforma.indexOf("Firefox")>-1)) {
        var indice7=userPlataforma.lastIndexOf("Win64");
        var plataforma=userPlataforma.substring(indice7,5);
    }
//sistema operativo no existe metodo para sacar eso. se hace extrayendo el valor del resultado de user agent
var sistemaOP= "";
var userPlataforma=navigator.userAgent;
if(userPlataforma.indexOf("Windows")) {
    var sistOp="Windows";
} else if (userPlataforma.indexOf("Apple")) {
    var sistOp="Apple";
} else if (userPlataforma.indexOf("Linux")) {
    var sistOp="Linux";
} else if (userPlataforma.indexOf("iPhone")) {
    var sistOp="iPhone";
} else if (userPlataforma.indexOf("iPod")) {
    var sistOp="iPod";
} else if (userPlataforma.indexOf("Android")) {
    var sistOp="Android";
}
//on line?
var enLinea=navigator.onLine;
if (enLinea === true) {
    var enLinea = "Si";
} else {var enLinea = "No";}
//java activo
var javaActivo=navigator.javaEnabled();
if (javaActivo === true) {
    var javaActivo = "Si";
} else {var javaActivo = "No";}
//cookes
var cookies=navigator.cookieEnabled;
var cookies=navigator.javaEnabled();
if (cookies === true) {
    var cookies = "Si";
} else {var cookies = "No";}
//plugins
var plugin=navigator.plugins.length;//cuántos hay
//user agent
var user=navigator.userAgent;


//mostrar info
var text="";
text += "<h3>Información navegador</h3>";
text += "<p>Motor del navegador "+motorNombre+"</p>";
text += "<p>Nombre del navegador "+navegador+"</p>";
text += "<p>Versión del navegador "+version+"</p>";
text += "<p>Propietariodel navegador "+propietarioNav+"</p>";
text += "<p>Lenguaje del navegador "+lenguaje+"</p>";
text += "<p>Sistema operativo Windows</p>";
text += "<p>Plataforma del navegador "+plataforma+"</p>";
text += "<p>Navegador en linea "+enLinea+"</p>";
text += "<p>Java activo "+javaActivo+"</p>";
text += "<p>Cookes activas "+cookies+"</p>";
text += "<p>Pluggins activas "+plugin+"</p>";
text += "<p>Agente Usuario "+user+"</p>";
document.getElementById("infoNav").innerHTML=text;

}//fin function infoNavegador

//GEOLOCALIZACION
function geoLocation() {
    if (navigator.location) {
        navigator.location.getCurrentPosition(showPosition);
    } else {
        document.getElementById("geolocalizacion").innerHTML="la geolocalización no es soportada por este navegador";
    }
}

//COOCKIES
//crear cookies
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
//obtener cookies
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
//checkear cookies  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
var galleta=document.cookie;
alert(galleta);



