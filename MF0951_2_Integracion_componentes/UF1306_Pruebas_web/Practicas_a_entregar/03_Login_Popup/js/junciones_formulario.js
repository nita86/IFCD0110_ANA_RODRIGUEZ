//funciones formulario

function abrirModal() {
    document.getElementById("modal").style.display="block";
}
function cerrarModal() {
    document.getElementById("modal").style.display="none";
}

//estas variables nos las da Paco
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};

var user=new Array("juan","pedro","jose");
var pass=new Array("1234","4321","1324");
var pin=new Array("1147","258","369");

//VALIDACIONES
function validarUser() {
    var nombre =document.forms["formulario_acceso"]["usuario"].value;
    if (nombre === "") {//si está vacio o tiene espacios en blanco
      document.forms["formulario_acceso"]["usuario"].style.background="red";
      valid=false;
      }
    else if (nombre === user[0]) {
      document.forms["formulario_acceso"]["usuario"].style.background="blue";
      valid=false;
    }
    else if (nombre === user[1]) {
      document.forms["formulario_acceso"]["usuario"].style.background="blue";
      valid=false;
    }
    else if (nombre === user[2]) {
      document.forms["formulario_acceso"]["usuario"].style.background="blue";
      valid=false;
    }
    else {
      document.forms["formulario_acceso"]["usuario"].style.background="red";
      valid=false;
      }
  return valid;
}

function validarPas() {
  var contrasena =document.forms["formulario_acceso"]["contrasena"].value;
  if ((contrasena === "") || (contrasena === " ")) {//si está vacio o tiene espacios en blanco
      document.forms["formulario_acceso"]["usuario"].style.background="red";
      valid=false;
    }
  else if (isNaN(contrasena) || contrasena.length !=4) {//si no es un numero o su longitud !=4
    document.forms["formulario_acceso"]["usuario"].style.background="red";
    valid=false;
    }
  return valid;
}

function verPas() {
  document.forms["formulario_acceso"]["contrasena"].type="text";
  document.getElementById("ojo").innerHTML='<i class="fas fa-eye"></i>';
}

/* function ocultarPas() {
  document.forms["formulario_acceso"]["contrasena"].type="password";
  document.getElementById("ojo").innerHTML='<i class="fas fa-eye-slash"></i>';
} */

function verPin() {
  document.getElementById("span").style.display="block";
}

function validarPin() {
  var pin=document.forms["formulario_acceso"]["pin"].value;
  var nombre =document.forms["formulario_acceso"]["usuario"].value;
  if ((pin === "") || (pin === " ") || (isNaN(pin) || pin.length !=4)) {//si está vacio o tiene espacios en blanco si no es un numero o su longitud !=4
    var nuevoParrafo = document.createElement("p");//crea un <p>
    var nuevoTexto = document.createTextNode("Este campo es obligatorio");//texto del nuevo <p>
    nuevoParrafo.appendChild(nuevoTexto);//agrega el texto al parrafo
    var element= document.getElementById("pin");
    element.appendChild(nuevoParrafo);//agrega el elemento nuevoParrafo al div pin
    valid=false;
  }
  else if ((nombre === user[0]) && (pin === pin[0])) {
    alert("bienvenido "+user[0]);
    valid=false;
  }
  else if ((nombre === user[1]) && (pin === pin[1])) {
    alert("bienvenido "+user[1]);
    valid=false;
  }
  else if ((nombre === pin[2]) && (pin === pin[2])) {
    alert("bienvenido "+user[2]);
    valid=false;
  }
  else {
    var nuevoParrafo2 = document.createElement("p");//crea un <p>
    var nuevoTexto2 = document.createTextNode("Revisa la información que has introducido");//texto del nuevo <p>
    nuevoParrafo2.appendChild(nuevoTexto2);//agrega el texto al parrafo
    var  element= document.getElementById("pin");
    element.appendChild(nuevoParrafo2);//agrega el elemento nuevoParrafo al div pin
    valid=false;
    }
return valid;
}

function validarDatos() {
  var nombre =document.forms["formulario_acceso"]["usuario"].value;
  var contrasena =document.forms["formulario_acceso"]["contrasena"].value;
  if ((nombre == user[0]) && (contrasena == pass[0])) {
    alert("bienvenido "+user[0]);
    valid=false;
  }
  else if ((nombre === user[1]) && (contrasena === pass[1])) {
    alert("bienvenido "+user[1]);
    valid=false;
  }
  else if ((nombre === user[2]) && (contrasena === pass[2])) {
    alert("bienvenido "+user[2]);
    valid=false;
  }
  else {
    alert("revisa la información que has introducido");
    valid=false;
    }
  return valid;
}

//cookie
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
    var decodedCookie = decodeURIComponent(document.cookie);//crea la cookie y descodifica los caracteres ASCII (si los hubiera) para poder interpretarlos. Se trata de una medida de seguridad, ya que las cookies suelen estar codificadas
    var ca = decodedCookie.split(';');//busca todas las cookies y crea un array con ellas
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {//si en i[0] hay un espacio extrae desde i[1] hasta el final
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {//si name está en i[0] extrae la cadena
        return c.substring(name.length, c.length);
      }
    }
    return "";//en todos los casos retorna texto 
  }
  //checkear cookies  
  function check() {
    var casilla=document.forms["formulario_acceso"]["acepto"];
    if (casilla.checked) {//el usuario señala la casilla. fuente https://uniwebsidad.com/libros/javascript/capitulo-7/validacion
        function checkCookie() {
            var user=getCookie("usuario");
            if (user != "") {//si la cookie ya existe
            alert("hola de nuevo "+user);
        } else {//`pide el nombre de usuario y crea la cookie
            user = prompt("introduce tu nombre:","");
            if (user != "" && user != null) {
            setCookie("usuario", user, 30);//caduca 30 dias
            alert("Bienvenid@"+user);
            }//fin if (user != "")
          }//fin else
      }// function checkCookie()
    }//fin if (casilla == check)
}//fin function check()