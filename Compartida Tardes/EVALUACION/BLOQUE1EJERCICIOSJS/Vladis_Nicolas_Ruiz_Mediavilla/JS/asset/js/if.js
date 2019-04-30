

// EJERCICIO  1.


 // var num = parseInt(prompt("Introduzca un número"));
 //
 //    if((num>=1)&&(num <=3) ){
 //      alert("Pertenece al primer trimestre.")
 //    }

 //    else if((num > 3) && (num <=6)){
 //      alert("Pertenece al segundo trimestre.")
 //    }

 //    else if ((num > 6) && (num <= 9)) {
 //      alert("Pertenece al tercer trimestre.")
 //    }

 //    else if (num > 9 &&  num <= 12){
 //      alert("Pertenece al cuarto trimestre.")
 //    }




 // EJERCICIO  2.

 //OPCIÓN 1

       // var días = ["Lunes","Martes","Miercoles", "Jueves", "Viernes","Sábado","Domingo"]

       // var num = parseInt(prompt("Introduce un número"));


       // if(num == 1){
       //   alert("Hoy es " + días[0] + "!");
       // }

       // else if(num == 2){
       //   alert("Hoy es " +días[1] + "!");
       // }

       // else if(num == 3){
       // alert("Hoy es " +días[2] + "!");
       // }

       // else if(num == 4){
       // alert("Hoy es " +días[3] + "!");
       // }

       //  else if(num == 5){
       // alert("Hoy es " +días[4] + "!");
       // }

       //  else if(num == 6){
       // alert("Hoy es " +días[5] + "!");
       // }

       //  else if(num == 7){
       // alert("Hoy es " +días[6] + "!");
       // }


       //OPCIÓN 2


       // var dias = parseInt(prompt("Introduzca un número."));

       // switch (dias) {
       //      case  1:
       //      alert("Hoy es Lunes!");
       //        break;

       //      case 2:
       //      alert("Hoy es Martes!");
       //        break;

       //      case 3:
       //      alert("Hoy es Miercoles!");
       //        break;

       //      case 4:
       //      alert("Hoy es Jueves!");
       //        break;

       //      case 5:
       //      alert("Hoy es Viernes!");
       //        break;

       //      case 6:
       //      alert("Hoy es Sábado!");
       //        break;

       //      case 7:
       //      alert("Hoy es Domingo!");
       //        break;

       //   default:
       //      alert("El número no corresponde con ningún día de la semana.");
       //    }





 // EJERCICIO  3.

        // var num = prompt("Introduzca un número");

        // if ( num % 2 === 0){
        //   console.log("El número " + num + " es par.");
        // }

        // else{
        //   console.log("El número " + num + " no es par.");
        // }

 // EJERCICIO  4.


      // var num = (prompt("Introduzca un número"));
      // var np = 2;
      // primo = true;

      // do{
      //   if (num % 2 == 0) {
      //       np == false;
      //   }
      //   np ++;
      // }
      // while (np < num);

      //   if ( primo == true)  {
      //     alert("El número " + num + " es primo. ");
      //   }

      //   else {
      //     alert("El número " + num + " no es primo. ");
      //   }





 // EJERCICIO  5.

       // var x = prompt("Introduzca un número");

       //  while (x < 5 || x > 18) {
       //    x = prompt("Porfavor, introduza un número entre 5 y 18 ")
       //  }

       //   if(x>=5 && x<=7){
       //     alert("Prebenjamín");

       //   }
       //   else if(x >= 8 && x <= 9){
       //   alert("Benjamines");

       //   }

       //   else if(x >= 10 && x <= 11){
       //   alert("Alevines");

       //   }

       //   else if(x >= 12 && x <= 13){
       //   alert("Infantiles");

       //   }

       //   else if(x >= 14 && x <= 15){
       //   alert("Cadetes");

       //   }

       //    else if(x >=16 && x <=18){
       //   alert("Juveniles");

       //   }


       // OPCIÓN 2


       var edad = prompt("Introduzca la edad de su hijo/a.")

       switch (edad) {
        case:
           break;

        case:
          break;

        case:
          break;

        case:
          break;

        case:
          break;

        case:
          break;

         default:

       }





        // EJERCICIO  6.
 //
 // var edad = prompt("Introduzca su edad");
 //
 // while ( edad < 0 && edad > 100 ) {
 //   edad = prompt("Introduzca una edad entre 0 y 100");
 // }

 //     if(edad < 18){
 //       alert("Eres menor de edad");
 //     }
 //     else if ( edad >= 18 &&  edad < 63){
 //
 //       alert("Estás en edad de trabajar");
 //     }
 //     else if (edad >= 63 && edad < 65){
 //       alert("Estás en edad de prejubilación");
 //     }
 //     else if(edad >= 65){
 //       alert("Disfruta de la jubilación!");
 //     }

 //     alert("Fin del programa");
 // //
 //
 //
 //
 // EJERCICIO  7.

      // var n1 = prompt("Introduzca un número");
      // var fact = 1;
      // alert("El número elegido para calcular su factorial es : " + n1);


      // while (n1 != 0) {
      //   fact = fact * n1;
      //   n1 = n1 -1;
      // }

      // alert("Su factorial es : " + fact);


 // EJERCICIO  8.

 //    var num = prompt("Introduzca un número");

 //    if(num < 30) {
 //      console.log("El gasto de envío es de 8 euros.");
 //    }
 //    else if ((num => 30) && (num  < 45)) {
 //      console.log(" Si se gasta 5$ más evitaría los gastos de envío.");
 //    }
 //    else if (num > 50) {
 //      console.log ("No tiene gastos de envío.");
 //    }





 // EJERCICIO  9.

    //  alert("Los elementos disponibles con los siguientes: \n1.Cosmética\n2.Ropa\n3.Accesorios");
    //  var productos=['Cosmética','Ropa','Accesorios'];
    //  var precio = prompt("Introduzca un precio");
    //  var producto = prompt("Introduzca una de las categorías mostradas anteriormente.")

    //  while (producto != productos[0] && producto != productos[1] && producto !=productos[2]) {
    //   producto = prompt(" Por favor, introduzca correctamente una de las categorías anteriores.")
    //  }

    //  if( precio < 19 && producto == productos[0]){
    //    alert("No se enviará el producto hasta que no supere los 30$");
    //  }
    //  else if( precio < 19 && producto == productos[1]){
    //     alert("Gastos de envío: 5$");
    //  }
    // else if ( precio < 19 && producto == productos[2]){
    //     alert("Gastos de envío: 15$");
    //  }
    //   else if( precio >= 19 && precio < 40){
    //     alert("Gastos de envío: 9$");
    //   }
    //   else if( precio > 40 ){
    //     alert("Sin gastos de envío.");
    //     if (precio == 90) {
    //       alert("Obtendrá un bono descuento para la próxima compra.");
    //     }
    //   }
    //   else if (precio > 90) {
    //     alert("En la próxima compra se aplicará un descuento del 20%");
    //   }


 // EJERCICIO  10.


 //EJERCICIO switch


 // var mes = prompt("Introduzca mes numérico");
 //
 // switch (true) {
 //     case (mes>0 && mes<=3):
 //     alert("Perteneces al primer trimestre");
 //     break;
 //     case (mes>3 && mes<=6):
 //     alert("Perteneces al segundo trimestre");
 //     break;
 //     case (mes>6 && mes<=9):
 //     alert("Perteneces al tercer trimestre");
 //     break;
 //     case (mes>9 && mes<=12):
 //     alert("Perteneces al cuarto trimestre");
 //     break;
 //     default:
 //     alert("Mes incorrecto");
 //
 // }


 //EJERCICIOS CON MÁS DIFICULTAD.

 //EJERCICIO 1

 // function recibir1() {
 //  var valor = document.getElementById("numero1").value;
 //
 //   if( valor >=1 && valor<=3 ){
 //        alert("Pertenece al primer trimestre.")
 //      }
 //
 //      else if(valor > 3 && valor<=6){
 //        alert("Pertenece al segundo trimestre.")
 //      }
 //
 //      else if (valor > 6 && valor <= 9) {
 //        alert("Pertenece al tercer trimestre.")
 //      }
 //
 //      else if (valor > 9 &&  valor <= 12){
 //        alert("Pertenece al cuarto trimestre.")
 //      }
 //   alert("El número introducido es : " + valor);
 // }

 //EJERCICIO 2

 // function diasSemana() {
 //
 //   var días = ["Lunes","Martes","Miercoles", "Jueves", "Viernes","Sábado","Domingo"]
 //   var dia = document.getElementById("numeroDias").value;
 //
 //   if(dia == 1){
 //     alert("Hoy es " + días[0] + "!");
 //   }
 //
 //   else if(dia == 2){
 //     alert("Hoy es " +días[1] + "!");
 //   }
 //
 //   else if(dia == 3){
 //   alert("Hoy es " +días[2] + "!");
 //   }
 //
 //   else if(dia == 4){
 //   alert("Hoy es " +días[3] + "!");
 //   }
 //
 //    else if(dia == 5){
 //   alert("Hoy es " +días[4] + "!");
 //   }
 //
 //    else if(dia == 6){
 //   alert("Hoy es " +días[5] + "!");
 //   }
 //
 //    else if(dia == 7){
 //   alert("Hoy es " +días[6] + "!");
 //   }
 //
 // }


 //EJERCICIO 3. --> REVISAR


 // function parImpar(){
 //
 //  var num = document.getElementById("numero3").value;
 //
 //    if(num / 2 == 0){
 //      alert( "El número es par");
 //
 //    }
 //    else {
 //      alert("El número es impar");
 //    }
 //
 // }


 //EJERCICO 4  --> REVISAR

    // function numeroPrimo(){
    //
    //   var num = (document.getElementById("numeroPrimo").value);
    //   var np = 2;
    //   primo = true;
    //
    //   do{
    //     if (num / 2 == 0) {
    //         np == false;
    //     }
    //     np ++;
    //   }
    //   while (np < num);
    //
    //     if ( primo == true)  {
    //       alert("El número " + num + " es primo. ");
    //     }
    //
    //     else {
    //       alert("El número " + num + " no es primo. ");
    //     }
    // }



//EJERCICIO 5

function categoria(){

}
