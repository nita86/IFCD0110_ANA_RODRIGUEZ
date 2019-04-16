

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


var pass=new Array("1234","4321","1324");
var pin=new Array("1147","258","369");


//VALIDACIONES
function validarUser() {
    valido=true;
    var nombre =document.forms["formulario_acceso"]["usuario"].value;
    var illegalChars = /\W/; // allow letters, numbers, and underscores. http://webcheatsheet.com/javascript/form_validation.php
    var user=new Array("juan","pedro","jose");
    var juan=user[0].toString();
    var pedro=user[1].toString();
    var jose=user[2].toString();
    if (nombre == "") {//si está vacio
        document.getElementById("mensajeUser").innerHTML="Este campo es obligatorio";
        document.getElementById("mensajeUser").style.color="red";
        valid=false;
      }
    else if (nombre != juan) {
        document.getElementById("mensajeUser").innerHTML="Error";
        document.getElementById("mensajeUser").style.color="red";
        valid=false;
    }
    else if (nombre != pedro) {
      document.getElementById("mensajeUser").innerHTML="Error";
      document.getElementById("mensajeUser").style.color="red";
      valid=false;
  }
  else if (nombre != jose) {
    document.getElementById("mensajeUser").innerHTML="Error";
    document.getElementById("mensajeUser").style.color="red";
    valid=false;
}
  return valid;
}

function validarPas() {
  var contrasena =document.forms["formulario_acceso"]["contrasena"].value;
  var illegalChars = /[\W_]/; // allow only letters and numbers 
  if (contrasena == "") {//si está vacio
      document.getElementById("mensajePas").innerHTML="Este campo es obligatorio";
      document.getElementById("mensajePas").style.color="red";
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
    var casilla=document.forms["formulario_acceso"]["acepto"].value;
    if (casilla == true) {//el usuario señala la casilla
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