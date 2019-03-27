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
    var convertir =parseInt(Frase);//convierte el string del prompt en number
    var resultado =String.fromCharCode(convertir);
    alert("el caracter Unicode correspondiente al número que has introducido es: "+resultado);
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
    var Frase1 =prompt("introduce una frase");
    var Frase2 =prompt("introduce otra frase");
    var resultado =Frase1.localeCompare(Frase2);
    alert("el orden alfabético de las palabras que has introducido es: "+resultado);
}

//Método match()
function encuentra() {
    var Frase =prompt("introduce una frase");
    var letra =prompt("introduce una letra o patrón");
    var expresion = new RegExp (letra, 'gi');//convierte letra en expresion regular
    var buscar =Frase.match(expresion);
    alert(buscar);
}

//Método repeat()
function repetir() {
    var Frase =prompt("introduce una frase");
    var numero =prompt("introduce un numero");
    var valor =parseInt(numero);
    var resultado= Frase.repeat(valor);
    alert("ahora tu frase se repite tantas veces como hayas decidido"+resultado);
}

//Método replace()
function remplazar() {
    var Frase =prompt("introduce una frase");
    var palabra1 =prompt("introduce la palabra que quieres quitar");
    var palabra2 =prompt("introduce la otra palabra");
    var resultado =Frase.replace(palabra1, palabra2);
    alert("tras el cambio, tu frase queda así: "+resultado);
}

//Método search()
function busca() {
    var Frase=prompt("introduce una frase");
    var palabra1 =prompt("introduce la palabra que quieres buscar");
    var resultado= Frase.search(palabra1);
    alert("en tu frase, la palabra que has buscado está en la posición: "+resultado);
}

//Método slice()
function cortar() {
    var Frase=prompt("introduce tu email");
    var arroba =Frase.search(/@/);//busca @
    var punto = Frase.search(/\./);//busca .
    var usuario = Frase.slice(0,arroba);
    var dominio= Frase.slice(arroba+1, punto);
    var extension =Frase.slice(punto);
    alert("tu email es: "+"\n"+"usuario: "+usuario+"\n"+"dominio: "+dominio+"\n"+"extensión: "+extension);
}

//Método split
function extraer() {
    var Frase=prompt("introduce una frase");
    var palabra1 =prompt("introduce la palabra que quieres extraer");
    var resultado= Frase.split(palabra1);
    alert("tras cortarla, tu frase queda así: "+resultado);
}

//Método starsWith
function comienza() {
    var Frase=prompt("introduce una frase");
    var palabra1 =prompt("introduce la primera palabra");
    var resultado= Frase.startsWith(palabra1);
    alert("¿es la palabra que has introducido la primera de tu frase?: "+resultado);
}

//Método substr()
function sustraer() {
    var Frase=prompt("introduce una frase");
    var palabra =prompt("introduce la palabra que quieres sustraer");
    var posicion =Frase.indexOf(palabra);
    var longitud =palabra.length;
    var resultado = Frase.substr(posicion,longitud);
    alert("la palabra que has extraido es: "+resultado);
}

//Método substring() 
function subcadena() {
    var Frase=prompt("introduce una frase");
    var letra1 =prompt("introduce una letra por la que quieras cortar");
    var letra2 =prompt("introduce otra letra por la que quieras cortar");
    var posicion1= Frase.indexOf(letra1);
    var posicion2= Frase.indexOf(letra2);
    var resultado= Frase.substring(posicion1,posicion2);
    alert("la cadena que has obtenido es: "+"\n"+resultado);
}

//Método toString() 
function cadena() {
    var personas = {nombre:'Juan', apellido:'Perez', edad:15};
    var Frase=alert("Ejemplo de objeto JavaScript: "+"\n"+"var personas = {nombre:'Juan', apellido:'Perez', edad:15};");
    var tipo= alert("se trata de un: "+typeof(personas));
    var resultado =personas.toString();
    alert(resultado);
}

//Método trim()
function extremo() {
    var Frase=prompt("introduce una frase con espacios en blanco delante y detras");
    var espacio=Frase.trim();
    alert("el resultado es: "+espacio);
}
