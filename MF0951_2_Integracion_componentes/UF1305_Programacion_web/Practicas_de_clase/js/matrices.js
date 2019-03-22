//JavaScript

//Método newArray()
function nuevoArray() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var tipo= typeof(array);

    alert("con los colores que has introducido, se ha creado la variable var colores, y con sus valores hemos creado un array cuya forma es:\n"+"("+array+")" +"\nde tipo typeof= "+tipo+"\ny de largo "+array.length);
}

//Método toString()
function texto() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.toString();
    var tipo1= typeof(array);
    var tipo2= typeof(nuevoTexto);

    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\nde tipo typeof= "+tipo1+"\nque luego hemos convertido en cadena de texto:\n"+nuevoTexto +"\nde tipo typeof= "+tipo2);
}

//Método join()
function asterisco() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.join("**");
    var tipo1= typeof(array);
    var tipo2= typeof(nuevoTexto);

    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\nde tipo typeof= "+tipo1+"\nque luego hemos convertido en cadena de texto cuyos valores están separados por **:\n"+nuevoTexto +"\nde tipo typeof= "+tipo2);
}

//Método pop()
function quitar() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var arrayInicial=array.toString();
    var texto2 =array.pop();

    alert("con los colores que has introducido, se ha creado un array\n"+"("+arrayInicial+")"+"\ny luego hemos quitado el último valor ("+texto2 +"), quedando:\n"+"("+array+")");
}

//Método push()
function añadir() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var arrayInicial=array.toString();
    var otroColor=prompt("añade otro color")
    var texto2 =array.push(otroColor);
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+arrayInicial+")"+"\ny luego hemos añadido el último valor ("+otroColor +"), quedando:\n"+"("+array+")");
}

//Método shift()
function quitar1() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }

    var arrayInicial=array.toString();
    var texto2 =array.shift();
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+arrayInicial+")"+"\ny luego hemos quitado el primer elemento ("+texto2+"), quedando:\n"+"("+array+")");
} 

//Método unshift()
function añadir1() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var arrayInicial=array.toString();
    var otroColor=prompt("añade otro color")
    var texto2 =array.unshift(otroColor);
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+arrayInicial+")"+"\ny luego hemos añadido el último valor ("+otroColor+") al inicio, quedando:\n"+"("+array+")");
}

//Método delete[]
function eliminar() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    
    var arrayInicial=array.toString();
    var otroColor=prompt("añade el color que quieres quitar");
    var eliminar=array.indexOf(otroColor);//posicion de otroColor
    var texto2 =delete array[eliminar];
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+arrarrayInicialay+")"+"\ny luego hemos quitado el valor ("+otroColor +") que has elegido, quedando:\n"+"("+array+")");
}

//Método splice()
function rebanar() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    
    var arrayInicial=array.toString();
    var posicion=prompt("define la posición del nuevos elementos");
    posicion=parseInt(posicion);//hay q convertir los caracteres en números
    if (isNaN(posicion)) {//si no es un numero
        alert("introduce solo número");
        return;//salir de la funcion
    }
    var eliminar=prompt("¿cuántos elementos quieres eliminar?");
    eliminar=parseInt(eliminar);//hay q convertir los caracteres en números
    if (isNaN(eliminar)) {//si no es un numero
        alert("introduce solo número");
        return;//salir de la funcion
    }
    var otroColor=prompt("añade otro color");
    var resultado=array.splice(posicion,eliminar,otroColor);

    alert("con los colores que has introducido, se ha creado un array \n"+"("+arrayInicial+")"+"\nque hemos modificado con el valor ("+otroColor +") que has elegido, en la posición "+posicion+" quedando:\n"+"("+array+")");
}

//Método concat()
function concatenar() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var array2= new Array(); 
    for (var i=0;i<2;i++) {
        array2 [i] =prompt("introduce una fruta");
    }
    
    var arrayA=array.toString();
    var arrayB=array2.toString();
    var resultado=array.concat(array2);

    alert("hemos sumado tu primer array ("+arrayA+") y tu segundo array ("+arrayB+") y hemos obtenido \n"+"("+resultado+")");
}

//Método slice();
function cortar(){
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    
    var arrayInicial=array.toString();
    var otroColor=prompt("añade el color por el que quieres cortar la cadena");
    var eliminar=array.indexOf(otroColor);//posicion de otroColor
    var resultado= array.slice(eliminar);

    alert("hemos cogido tu array inicial ("+arrayInicial+") y lo hemos cortado por la palabra que has elegido ("+otroColor+"), obteniendo \n"+"("+resultado+")");
}

//Método sort()
function alfabeto() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    
    var arrayInicial=array.toString();
    var resultado= array.sort();

    alert("hemos cogido tu array inicial ("+arrayInicial+") y lo hemos ordenado alfabéticamente, obteniendo \n"+"("+resultado+")")
}

//Método reverse
function alfabetoInverso() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    
    var arrayInicial=array.toString();
    var alfabeto= array.sort();
    var inverso=array.reverse();

    alert("hemos cogido tu array inicial ("+arrayInicial+") y lo hemos ordenado alfabéticamente en orden inverso, obteniendo \n"+"("+inverso+")")
}