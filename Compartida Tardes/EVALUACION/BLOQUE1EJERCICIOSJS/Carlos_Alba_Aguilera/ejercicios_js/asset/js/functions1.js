//1. Solicitar al usuario un número y comprobar a que trimestre pertenece un número 
//en mes introducido, mostrándolo por console.log().

function ejercicio1(){	
	var numero = document.getElementById("ej1").value;

	if (numero<1 || numero>12){
		document.getElementById("mej-1").innerHTML = "El mes introducido no es correcto";
	}else{
		if (numero>=1 && numero<=3){
			document.getElementById("mej-1").innerHTML = "El mes introducido pertenece al primer trimestre";
		}else{
			if(numero<=6){
				document.getElementById("mej-1").innerHTML = "El mes introducido pertenece al segundo trimestre";
			}else{
				if(numero<=9){
					document.getElementById("mej-1").innerHTML ="El mes introducido pertenece al tercer trimestre";
				}else{
					if(numero<=12){
						document.getElementById("mej-1").innerHTML ="El mes introducido pertenece al cuarto trimestre";
					}
				}
			}
		}
	}
}    
//2. Solicitar al usuario un número  entre 1 y 7 y decir el día de la semana al que 
//pertenece, mostradlo mediante alert().

function ejercicio2(){
	var numero = document.getElementById("ej2").value;

	if( numero==1){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: LUNES";
	}
	if( numero==2){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: MARTES";
	}
	if( numero==3){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: MIERCOLES";
	}
	if( numero==4){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: JUEVES";
	}
	if( numero==5){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: VIERNES";
	}
	if( numero==6){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: SABADO";
	}
	if( numero==7){
		document.getElementById("mej-2").innerHTML ="El número introducido corresponde a: DOMINGO";
	}
}

//3. Solicitar un número al usuario e indicar si es par o impar, mostrar con c.l().

function ejercicio3(){
	var numero = document.getElementById("ej3").value;

	if (numero%2==0){
		document.getElementById("mej-3").innerHTML ="Es par";
	}else{
		document.getElementById("mej-3").innerHTML ="Es impar";
	}
}

//4. Solicitar un número y comprobar si es primo, mostrar con alert().

function ejercicio4(){
	var numero = document.getElementById("ej4").value;
	var divisor = numero-1;
	var primo =true;

	for(divisor;divisor>=2;divisor--){
		if(numero%divisor==0){
			primo= false;
			document.getElementById("mej-4").innerHTML = numero+ " No es primo";
			break;
		}
	}
	if (primo==true){
		document.getElementById("mej-4").innerHTML = numero+ " Si es primo";
	}
}	

//5. Solicitar un número e indicar a que categoría pertenece su hijo de 5 a 18 años.
// Edades:

// Prebenjamin, 5,6 y 7 años
// Benjamines 8 y 9 años.
// Alevines 10 y 11 años.
// Infantiles, 12 y 13 años.
// Cadetes 14 y 15 años. 
// Juveniles, 16, 17 y 18 años. 

function ejercicio5(){
	var edad = document.getElementById("ej5").value;

	if (edad<=4){
		document.getElementById("mej-5").innerHTML ="Su hijo no tiene la edad aún";
		}else{
			if(edad>4 && edad<=7){
				document.getElementById("mej-5").innerHTML ="Prebenjamin";
			}else{
				if(edad>7 && edad<10){
					document.getElementById("mej-5").innerHTML ="Benjamin";
				}else{
					if(edad>9 && edad<12){
						document.getElementById("mej-5").innerHTML ="Alevin";
					}else{
						if(edad>11 && edad<14){
							document.getElementById("mej-5").innerHTML ="Infantil";
						}else{
							if(edad>13 && edad<16){
								document.getElementById("mej-5").innerHTML ="Cadete";
							}else{
								if(edad>15 && edad<19){
									document.getElementById("mej-5").innerHTML ="Juvenil";
								}else{
									document.getElementById("mej-5").innerHTML ="Aficionado";
								}
							}
						}
					}
				}
			}
		}
}

// 6. Solicitar al usuario un número e indicar si es menor de edad, si está en 
//edad de trabajar o si estar en edad jubilado. 

function ejercicio6(){
	var edad = document.getElementById("ej6").value;

	if (edad<18){
		document.getElementById("mej-6").innerHTML ="Es menor de edad";
	}else{
		if (edad<65){
			document.getElementById("mej-6").innerHTML ="Estas en edad de trabajar";
		}else{
			document.getElementById("mej-6").innerHTML ="Eres un jubileta";
		}
	}
}

//7. Calcular factorial del número que nos ha proporcionado el cliente. 

function ejercicio7(){
	var numero = document.getElementById("ej7").value;
	var factorial = 1;

		for (var i = 1; i <= numero; i++) {
			factorial= factorial*i;
		}
		
	document.getElementById("mej-7").innerHTML ="El factorial de " + numero + " es "+ factorial;
}	

// 8. Mostrar gastos de envío, 
// Si la compra realizada por el usuario es menor de 30 € indicar, se cobraran 8 € de gasto de envío. 
// Si la compra realizada por el usuario es igual o mayor que 30€ y menor de 45€, indicar le 
// faltan 5€ para evitar gastos de envio. 
// Compra superior a 50€, indicar que no hay gastos de envío 
// Para indicar el precio de compra el usuario debe introducir un número, en un futuro se pondrán 
// ciertas etiquetas html que tendrán un valor y según clicken en esas elementos se irá calculando el 
// valor de la compra realizada. 

function ejercicio8(){
	var precio = document.getElementById("ej8").value;

	if (precio<30){
		document.getElementById("mej-8").innerHTML ="Se cobraran 8 € de gasto de envío.";
	}
	if (precio>=30 && precio<45){
		document.getElementById("mej-8").innerHTML ="Le faltan 5€ para evitar gastos de envio.";
	}
	if (precio>50){
		document.getElementById("mej-8").innerHTML ="Gastos de envio gratis!";
	}
}

//  9. Gastos de envío y tipo de producto.
//Tipo de producto será un array con 3 elementos, cosmética, ropa y accesorios. 
// Para compras menores de 19€ y producto cosmética, indicar el producto no se puede enviar 
// hasta que no supere los 30€ de compra. 
// Compras menores de 19€ y producto ropa, indicar gastos de envío 9€. 
// Compras menores de 19€ y producto accesorios, indicar gastos de envío 15€. 
// Compras mayores de 19€ y menores de 40€, indicar gastos de envío 9€. No importa el tipo de 
// material que se mande. 
// Compras mayores de 40€, mensaje gastos de envío gratis, si llega a 90€ obtendrá bono descuento 
// para próxima compra. 
// Compras mayores de 90€, indicar el porcentaje de descuento que se le aplicará en próxima compra. 

function ejercicio9(){
	var compra_total = document.getElementById("ej9-1").value;
	var tipo_producto = ["cosmetica", "ropa", "accesorios"];
	var producto = document.getElementById("ej9-2").value;

	if (compra_total<19 && producto==tipo_producto[0]){
		document.getElementById("mej-9").innerHTML ="El producto no se puede enviar hasta que no supere los 30€ de compra";
	}
	if (compra_total<19 && producto==tipo_producto[1]){
		document.getElementById("mej-9").innerHTML ="Gastos de envío 9€";
	}
	if (compra_total<19 && producto==tipo_producto[2]){
		document.getElementById("mej-9").innerHTML ="Gastos de envío 15€";
	}
	if (compra_total>19 && compra_total<40 ){
		document.getElementById("mej-9").innerHTML ="Gastos de envío 9€";
	}
	if (compra_total>40 && compra_total<90){
		document.getElementById("mej-9").innerHTML ="Gastos de envío gratis, si llega a 90€ obtendrá bono descuento para próxima compra.";
	}
	if (compra_total>=90){
		document.getElementById("mej-9").innerHTML ="BONO DESCUENTO 25% EN LA PROXIMA COMPRA";
	}
}

//  10. Utilizar la clase predefinida de javascript Date() y la función getDay() y en función del número 
//  indicar que día es.
//	Ayuda de código, var d =new Date();d.getDay();

function ejercicio10(){
	var fecha = new Date();
	var dia_semana = new Array(7);

		dia_semana[0] = "Domingo";
		dia_semana[1] = "Lunes";
		dia_semana[2] = "Martes";
		dia_semana[3] = "Miercoles";
		dia_semana[4] = "Jueves";
		dia_semana[5] = "Viernes";
		dia_semana[6] = "Sabado";

		var mostrar = dia_semana[fecha.getDay()];

	document.getElementById("mej-10").innerHTML = fecha;
	document.getElementById("mej-10-1").innerHTML = mostrar;
}

// Nota para aumentar la dificultad de los ejercicios, 
//     • En vez de usar un prompt para solicitar información al usuario, crear un input y un botón en html.
//     • Se debe detectar el evento click sobre el botón y capturar la información del input. 
//     • En js debemos crear función propia que al detectar el evento del click se ejecute. 
//     • Para ejecutar el click, onclick=’nombreDeFuncion()’
//     • Para capturar al información de input, document.getElementById(‘valordeID’).value;
//     • Para crear función function nombreDeFuncion(){sentencias de código que se quieren ejecutar. }
