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
    var texto2 =array.pop();
    var array;

    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\ny luego hemos quitado el último valor ("+texto2 +"), quedando:\n"+"("+array+")");
}

//Método push()
function añadir() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var otroColor=prompt("añade otro color")
    var texto2 =array.push(otroColor);
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\ny luego hemos añadido el último valor ("+otroColor +"), quedando:\n"+"("+array+")");
}

//Método shift()
function quitar1() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }

    var texto2 =array.shift();
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\ny luego hemos quitado el primer elemento ("+texto2+"), quedando:\n"+"("+array+")");
} 

//Método unshift()
function añadir1() {
    var array =new Array();
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var otroColor=prompt("añade otro color")
    var texto2 =array.unshift(otroColor);
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\ny luego hemos añadido el último valor ("+otroColor+") al inicio, quedando:\n"+"("+array+")");
}

//Método delete[]
function eliminar() {
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    
    var otroColor=prompt("añade el color que quieres quitar")
    var eliminar=array.indexOf(otroColor);
    var texto2 =delete array[eliminar];
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+array+")"+"\ny luego hemos quitado el valor ("+otroColor +") que has elegido, quedando:\n"+"("+array+")");
}

//Método splice()
function rebanar() {

}zf,.