//SlideShow que cambia cada dos segundos
var fotosIndex = 1;
muestraSlide(fotosIndex);

function plusSlides(n) {
  muestraSlide(fotosIndex += n);
}

function currentSlide(n) {
  muestraSlide(fotosIndex = n);
}

function muestraSlide(n) {
  var i;
  var fotos = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > fotos.length) {fotosIndex = 1}//cuando llega a la ultima foto, vuelve a la primera   
  if (n < 1) {fotosIndex = fotos.length}//cuando está en la primera foto, el índice es la cantidad total de fotos
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";//oculta las fotos
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");//cambia el estilo css de la clase active a ninguna
  }
  fotos[fotosIndex-1].style.display="block";
  dots[fotosIndex-1].className += " active";
}