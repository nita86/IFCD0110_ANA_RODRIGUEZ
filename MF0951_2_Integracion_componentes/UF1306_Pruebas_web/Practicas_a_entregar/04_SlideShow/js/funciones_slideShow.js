//-------------SlideShow que cambia cada 10 segundos-----------------
//cambio manual
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
//cambio automático. En este caso tenemos que hacer una funcion distinta con nombres distintos para que no machaque las variables anteriores y puedan convivir el cambio manual y el autom�ticamente
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

//------------------Tab Gallery---------------------
function funcionTab(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

//--------------------Tab vertical--------------------
function abrirFoto(evt, altFoto) {
// Declare all variables
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the link that opened the tab
document.getElementById(altFoto).style.display = "block";
evt.currentTarget.className += " active";
}

//----------------Accordion------------------
var acordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function() {
    /*alterna (toggle) la clase de los botones de activa a inactiva al pulsar*/
    this.classList.toggle("active");

    /* alterna mostrar7ocultar el panel activo */
    var panel = this.nextElementSibling;/*la variable panel es el div hermano del buttom accordion*/
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }//fin function(){  
  )//fin parentesis funcionaddEventListener( ;
}//fin loop for

