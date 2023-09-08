//Funcion para mandar mensaje de wuasa confirmando la asistencia a la bodilla chida de los novios

function sendWhatsapp() {


  //checate que no esten vacios los campos
  if (document.getElementById("name").value == "") {
    Swal.fire({
      title: '',
      html: '<img src="..americaysalvador/image/ays/favorites/s.jpg" style="width: 50%; height: 70%;"><h2 style="color: black; font-family: \'Montserrat\', sans-serif;">Ingresa tu nombre</h2>',
      background: 'rgba( 251, 250, 249,30.1)',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#000000',
    })
    return false;
  }

  if (document.getElementById("email").value == "") {
    Swal.fire({
      title: '',
      html: '<img src="../image/ays/favorites/s.jpg" style="width: 50%; height: 70%; "><h2 style="color: black;font-family: \'Montserrat\', sans-serif; ">Ingresa tu correo</h2>',
      background: 'rgba( 251, 250, 249,30.1)',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#000000',
    })
    return false;
  }

  if (document.getElementById("phone").value == "") {
    Swal.fire({
      title: '',
      html: '<img src="../image/ays/favorites/s.jpg" style="width: 50%; height: 70%;"><h2 style="color: black;font-family: \'Montserrat\', sans-serif; ">Ingresa tu Numero de Telefono</h2>',
      background: 'rgba( 251, 250, 249,30.1)',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#000000',
    })
    return false;
  }

  if (document.getElementById("guest").value == "") {
    Swal.fire({
      title: '',
      html: '<img src="../image/ays/favorites/s.jpg" style="width: 50%; height: 70%;"><h2 style="color: black; font-family: \'Montserrat\', sans-serif; ">Parece que no estas invitado</h2>',
      background: 'rgba( 251, 250, 249,30.1)',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#000000',
    })
    return false;
  }

/*   if (document.getElementById("message").value == "") {
    Swal.fire({
      title: '',
      html: '<img src="../image/ays/favorites/s.jpg" style="width: 50%; height: 70%;"><h2 style="color: black;">Ingresa un mensaje para los novios</h2>',
      background: 'rgba( 251, 250, 249,30.1)',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#000000',
    })
    return false;
  } puras mentiras */

    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var guest = document.getElementById("guest").value;
    var message = document.getElementById("message").value;
    var url = "https://api.whatsapp.com/send?phone=+524774091580&text=*_*%0A*Confirmación%20de%20Asistencia*%0A*Boda%20America%20y%20Salvador*%0A%0A*Nombre*%0A" + name + "%0A*Email*%0A" + email + "%0A*Teléfono*%0A" + phone + "%0A*Invitados*%0A" + guest + "%0A*Mensaje*%0A" + message + "%0A";
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=400,height=400");
  }
  
  
  
  //En cuanto inicie la pagina se ejecuta una accion que limpia la url dejando index.html y agarrar la peticion get la cual tiene los parametros de la cantidad de invitados y lo pone en el input de gest y lo bloquea
  $(document).ready(function() {

//reproducir un audio
    

    var url = window.location.href;
    var url = url.split("?")[1];
    var url = url.split("&");
    var guest = url[0].split("=")[1];
    var guest = guest
  
  //borra la url y deja solo index.html
    window.history.replaceState({}, document.title, "/" + "index.html");


    //pone el valor de la cantidad de invitados en el input de guest y lo bloquea

    document.getElementById("guest").value = guest;

    document.getElementById("guest").disabled = true;

    });



    //funcion para ver la img 

    function verImg(nombre){
    


      //el css esta asi .foto5 {
 /* background-image: linear-gradient(rgba(95, 2, 2, 0.5), rgba(48, 47, 47, 0.9)), url("../image/ays/favorites/foto11.jpg");
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  min-height: 24rem;}*/

  Swal.fire({
    title: '',
    html: '<img src="..americaysalvador/image/ays/favorites/'+nombre+'.jpg" style="width: 100%; height: 100%;">',
    showConfirmButton: false,
    showCloseButton: true,
    focusConfirm: false,
    focusClose: true,
    customClass: 'swal-wide',
    padding: '0px',
    background: 'rgba(0,0,0,0.9)'
  })




    }

