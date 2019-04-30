
function contrasena(){
	var contrasena1 = document.getElementById("contrasena1").value;
	var contrasena2 = document.getElementById("contrasena2").value;

	if (contrasena1 == contrasena2){
		document.getElementById("cross1").style.display="none";
		document.getElementById("cross2").style.display="none";

		document.getElementById("check1").style.display="inline";
		document.getElementById("check2").style.display="inline";
	}else{
		document.getElementById("check1").style.display="none";
		document.getElementById("check2").style.display="none";

		document.getElementById("cross1").style.display="inline";
		document.getElementById("cross2").style.display="inline";
	}
}