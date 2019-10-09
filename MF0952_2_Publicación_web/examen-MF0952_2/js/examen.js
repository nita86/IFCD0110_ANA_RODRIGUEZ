//funciones examen modulo 3

function mostrar() {
    document.getElementById("oculto").style.display="block";
}

//crear cookies
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  //obtener cookies
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);//crea la cookie y descodifica los caracteres ASCII (si los hubiera) para poder interpretarlos. Se trata de una medida de seguridad, ya que las cookies suelen estar codificadas
    var ca = decodedCookie.split(';');//busca todas las cookies y crea un array con ellas
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {//si en i[0] hay un espacio extrae desde i[1] hasta el final
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {//si name está en i[0] extrae la cadena
        return c.substring(name.length, c.length);
      }
    }
    return "";//en todos los casos retorna texto
  }
  //checkear cookies  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {//si la cookie ya existe
      document.getElementById("usuario").innerHTML="hola de nuevo "+user;
    } else {//`pide el nombre de usuario y crea la cookie
       user = prompt("introduce tu nombre:","");
       if (user != "" && user != null) {
        setCookie("username", user, 30);//creada: viernes, 5 de abril de 2019, 9:15:14 caduca: domingo, 5 de mayo de 2019, 9:15:14
        alert("Bienvenid@"+user);
      }
      }
  }
  
  function cerrar() {
     document.getElementById("cuadrogrande").style.display="none";
  }
  
  function abrirTexto() {
      var nuevaVentana=window.open("", "Mensaje_cookies", "width=800,height=500");//lo abre en una ventana nueva
      nuevaVentana.document.write(//lo que hay dentro de la ventana
          "<div style='font-size:1.75em';>"+
          "<h1>POLITICA DE COOKIES</h1><br>"+
          "<p><strong>Cookie</strong> es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.. El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas <em>cookies de sesión</em>).</p><br>"+
          "<p>La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.</p><br>"+
          "<p>Sin su expreso consentimiento –mediante la activación de las cookies en su navegador–XXXXX no enlazará en las cookies los datos memorizados con sus datos personales proporcionados en el momento del registro o la compra.</p><br>"+
          "<p>¿Qué tipos de cookies utiliza esta página web?</p><br>"+
          "<ul><li><u>Cookies técnicas:</u> Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión,acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</li><li><u>Cookies de personalización:</u> Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</li><li><u>Cookies de análisis:</u> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li><li><u>Cookies publicitarias:</u> Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.</li><li><u>Cookies de publicidad comportamental:</u> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li><li><u>Cookies de terceros:</u>    La Web de XXXXX puede utilizar servicios de terceros que, por cuenta de XXXXX, recopilaran información con fines estadísticos, de uso del Site por parte del usuario y para la prestacion de otros servicios relacionados con la actividad del Website y otros servicios de Internet.</li></ul><br>"+
          "<p>En particular, este sitio Web utiliza <strong>Google Analytics</strong>, un servicio analítico de web prestado por <em>Google Inc.</em> con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043.  Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</p><br>"+
          "<p>(En este punto la AGPD sugiere incluir cada una de las cookies de terceros utilizadas y los datos de dichos terceros. Por evidentes razones en este modelo sólo se ha incluido la Google en el uso de Analytics por ser la más extendida y común.)</p><br>"+
          "<p>El Usuario acepta expresamente, por la utilización de este Site, el tratamiento de la información recabada en la forma y con los fines anteriormente mencionados. Y asimismo reconoce conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de Cookies mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo de Cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del Website.</p><br>"+
          "<p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p><br><ol><li>Chrome</li><li>Explorer</li><li>Firefox</li><li>Safari</li></ol><br>"+
          "<p>Si tiene dudas sobre esta política de cookies, puede contactar con XXXXX en info@XXXXX(punto)com</p></div>");//fin document.write
  }