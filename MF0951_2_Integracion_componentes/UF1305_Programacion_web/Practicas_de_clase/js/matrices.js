//JavaScript

//newArray()
function nuevoArray() {
    /* var color1= prompt("introduce un color");
    var color2= prompt("introduce un color");
    var color3= prompt("introduce un color");
    alert(colores); */ 
    var colores;
    var array =new Array(colores);
    for (var i=0;i<3;i++) {
        array [i] =prompt("introduce un color");
    }
    var tipo= typeof(array);
    alert(array +"\n de tipo typeof= "+tipo+"\n de largo "+array.length);
}