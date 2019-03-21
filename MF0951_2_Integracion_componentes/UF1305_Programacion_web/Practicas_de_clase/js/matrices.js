//JavaScript

//Método newArray()
function nuevoArray() {
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var tipo= typeof(array);

    alert("con los colores que has introducido, se ha creado la variable var colores, y con sus valores hemos creado un array cuya forma es:\n"+"("+array+")" +"\nde tipo typeof= "+tipo+"\ny de largo "+array.length);
}

//Método toString()
function texto() {
    var colores;
    var array =new Array(colores);
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
    var colores;
    var array =new Array(colores);
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
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.toString();
    var texto2 =array.pop();
    var array;

    alert("con los colores que has introducido, se ha creado un array\n"+"("+nuevoTexto+")"+"\ny luego hemos quitado el último valor ("+texto2 +"), quedando:\n"+"("+array+")");
}

//Método push()
function añadir() {
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.toString();
    var otroColor=prompt("añade otro color")
    var texto2 =array.push(otroColor);
    var texto3 =otroColor.toString();
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+nuevoTexto+")"+"\ny luego hemos añadido el último valor ("+texto3 +"), quedando:\n"+"("+array+")");
}

//Método shift()
function quitar1() {
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.toString();
    var texto2 =array.shift();
    var texto3 =texto2.toString();
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+nuevoTexto+")"+"\ny luego hemos quitado el primer elemento (" +texto3 +"), quedando:\n"+"("+array+")");
} 

//Método unshift()
function añadir1() {
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.toString();
    var otroColor=prompt("añade otro color")
    var texto2 =array.unshift(otroColor);
    var texto3 =otroColor.toString();
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+nuevoTexto+")"+"\ny luego hemos añadido el último valor ("+texto3 +") al inicio, quedando:\n"+"("+array+")");
}

//Método delete[]
function eliminar() {
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var nuevoTexto= array.toString();
    var otroColor=prompt("añade el color que quieres quitar")
    var eliminar=array.indexOf(otroColor);
    var texto2 =delete array[eliminar];
    var texto3 =otroColor.toString();
    var array;
    
    alert("con los colores que has introducido, se ha creado un array\n"+"("+nuevoTexto+")"+"\ny luego hemos quitado el valor ("+texto3 +") que has elegido, quedando:\n"+"("+array+")");
}

//Método splice()
function rebanar() {

}