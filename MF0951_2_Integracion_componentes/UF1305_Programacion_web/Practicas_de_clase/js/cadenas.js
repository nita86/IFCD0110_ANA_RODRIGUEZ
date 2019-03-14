//JavaScript 

//Método length
function longitud() {
    var Frase = prompt("introduce una frase");
    var largoFrase = Frase.length;
    alert("la frase tiene "+ largoFrase + " caracteres");
}

//Método charAt()
function posicion() {
    var Frase =prompt("introduce una frase");
    var largo =Frase.length;
    var numero =prompt("introduce un numero del 1 al "+largo);
    var posicionFrase = Frase.charAt(numero-1);
    alert("el caracter que ocupa la posición que has elegido en tu frase es: "+posicionFrase);
}

//Método charCodeAt()
function caractercode() {
    var Frase =prompt("introduce una frase");
    var largo =Frase.length;
    var numero =prompt("introduce un numero del 1 al "+largo);
    var unicode = Frase.charCodeAt(numero-1);
    alert("el caracter Unicode correspondiente al número que has introducido es: "+unicode);
}

//Método fromCharCode()
function personaje() {
    var Frase =prompt("introduce una serie de números del 32 al 136");
    var convertir =parseInt(Frase);
    var tipo = typeof(convertir);
    alert (tipo);
    
}

//Método toUpperCase()
function mayusculas() {
    var Frase =prompt("introduce una frase en letras MINUSCULAS");
    var mayuscula = Frase.toUpperCase();
    alert("tu frase en mayúscualas es: "+mayuscula);
}

//Método toLowerCase()
function minusculas() {
    var Frase =prompt("introduce una frase en letras MAYUSCULAS");
    var minuscula = Frase.toLowerCase();
    alert("tu frase en mayúscualas es: "+minuscula);
}

//Método concat()
function concatenar() {
    var nombre =prompt("introduce tu Nombre");
    var apellido1 =prompt("introduce tu primer Apellido");
    var apellido2 =prompt("introduce tu segundo Apellido");
    alert("tu nombre y apellidos es: " + nombre.concat(" ",apellido1," ",apellido2));
}

//Método endsWith()
function terminaCon() {
    var Frase =prompt("introduce una frase");
    var palabra =prompt("introduce una palabra");
    var termina = Frase.endsWith(palabra);
    alert ("tu frase termina con la palabra que has elegido: "+termina);
}

//Método includes()
function incluida() {
    var Frase =prompt("introduce una frase");
    var palabra =prompt("introduce una palabra");
    var incluida = Frase.includes(palabra);
    alert("¿la palabra que has introducido está dentro de tu frase? "+incluida);
}

//Método indexOf()
function aparicion1() {
    var Frase =prompt("introduce una frase");
    var letra =prompt("introduce una letra");
    var primeraVez = Frase.indexOf(letra-1);
    alert("dentro de tu frase, la primera vez que aparece la letra que has elegido es: "+primeraVez);

}

//Método lastIndexOf()
function aparicionUltima() {
    var Frase =prompt("introduce una frase");
    var letra =prompt("introduce una letra");
    var ultimaVez =Frase.lastIndexOf(letra-1);
    alert("dentro de tu frase, la ultima vez que aparece la letra que has elegido es: "+ultimaVez);
}

//Método localeCompare()
function locale() {
}

//Método match()
function