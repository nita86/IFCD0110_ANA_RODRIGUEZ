//JavaScript

//newArray()
function nuevoArray() {
    var color1= prompt("introduce un color");
    var color2= prompt("introduce un color");
    var color3= prompt("introduce un color");
    var colores =
        "(\"" +color1+ "\","+
         "\""+color2+"\","+
         "\""+color3+ "\")";
    alert(colores);
    var array =new Array(colores);
    var tipo= typeof(array);
    alert(array +"\n"+"typeof "+tipo);

}