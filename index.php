<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Inteligencia de Negocios</title>
  <link href="css/style.css" rel="stylesheet" />

  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="js/script.js"></script>
  <link href="css/style-new.css" rel="stylesheet" />
</head>

<body class="main">

 <!-- <div id="particles-js"></div> -->
 <div class="container">

  <div class="main-circle">
    <div class="menu-button">
      <span>
        <p onclick="sound.play()">MENU</p>
      </span>
    </div>

    <div class="app-logo">
     <img src="./Imagenes/logo-alcaldia-4.png" alt="">
    </div>

    <div class="cir-menu">
    <div class="cir-menu-right">
      <span class="df-cir opzero"></span>
      <ul>
        <li class="opzero dmenu-i target" onclick="sound_menu.play()">
          <a
          ><img
          src="./Iconos/alcaldia.png"
          width="42px"
          alt=""
          />Alcaldia</a
          >
        </li>
        <li class="opzero dmenu-ii target" onclick="sound_menu.play()">
          <a
          ><img
          src="./Iconos/comercio.png"
          width="42px"
          alt=""
          />Comercio</a
          >
        </li>
        <li class="opzero dmenu-iii target" onclick="sound_menu.play()">
          <a
          ><img
          src="./Iconos/aliado.png"
          width="42px"
          alt=""
          />Aliados</a
          >
        </li>
        <li class="opzero dmenu-iv target" onclick="sound_menu.play()">
          <a><img src="./Iconos/otros.png" width="42px" alt="" />Otros</a>
        </li>
        <li class="opzero dmenu-v target" onclick="sound_menu.play()">
          <a
          ><img
          src="./Iconos/promocion.png"
          width="42px"
          alt=""
          />Promociones</a
          >
        </li>
      </ul>
    </div>

    <div class="cir-menu-left">
      <span class="df-cir left opzero"></span>
      <ul class="first-submenu hf-start">
        <li class="opzero smenu-i">
          <a
          ><i class="fa fa-question-circle" aria-hidden="true"></i
          >Help</a
          >
        </li>
        <li class="opzero smenu-ii">
          <a
          ><img
          src="./Iconos/Soporte.png"
          width="42px"
          alt=""
          style="
          position: absolute;
          margin-top: -47px;
          margin-left: 14px;
          font-weight: 600;
          "
          />Soporte</a
          >
        </li>
        <li class="opzero smenu-iii">
          <a
          ><i class="fa fa-question-circle" aria-hidden="true"></i
          >Help</a
          >
        </li>
      </ul>

      <ul class="two-submenu opzero nonex">
        <li class="smenu-i">
          <a class="one-two-submenu" href="#"
          ><img
          src="./Iconos/reporta-consumo.png"
          width="42px"
          alt=""
          />Reporta Consumo</a
          >
        </li>
        <li class="smenu-ii">
          <a class="one-two-submenu"
          ><img
          src="./Iconos/incidencia.png"
          width="42px"
          alt=""
          style="                      
          margin-top: -49px;                                            
          "
          />Reporta Incidencia</a
          >
        </li>
        <li class="smenu-iii">
          <a class="one-two-submenu" href="http://alcaldiadecarirubana.com/" target="_blank"
          ><img
          src="./Iconos/ciudad-inteligente.png"
          width="42px"
          alt=""
          />TécnoCiudad</a
          >
        </li>
      </ul>

      <ul class="three-submenu opzero nonex">
        <li class="smenu-i">
          <a class="one-three-submenu" href="#" data-open="modal1"
          ><img src="./Iconos/otros.png" width="42px" alt="" />Declarar</a
          >
        </li>
        <!-- <li class="smenu-i">
          <a class="one-three-submenu" href="archivo.html" target="_blank"
          ><img src="./Iconos/otros.png" width="42px" alt="" />Menú
          Estático</a
          >
        </li> -->
        <li class="smenu-ii">
          <a class="one-three-submenu"
          ><img src="./Iconos/otros.png" width="42px" alt="" />Menú
          Interactivo</a
          >
        </li>
        <li class="smenu-iii">
          <a class="one-three-submenu"
          ><img
          src="./Iconos/fidelizacion.png"
          width="42px"
          alt=""
          />Fidelización</a
          >
        </li>
      </ul>

      <ul class="four-submenu opzero nonex">
        <li class="smenu-i">
          <a class="one-four-submenu" href="https://play.google.com/store/apps/details?id=com.puntogove.slm.gouser" target="_blank"
          ><img
          src="./Iconos/Puntogo-logo-negro.png"
          width="58px"
          alt=""
          />Billetera Migo</a
          >
        </li>
        <li class="smenu-ii">
          <a class="one-four-submenu" href="https://www.bancamiga.com/" target="_blank"
          ><img
          src="./Iconos/Logo-banca-amiga.png"
          width="70px"
          alt=""
          style="                      
          margin-top: -75px;                                            
          "
          />Bancamiga</a
          >
        </li>
        <li class="smenu-iii">
          <a class="one-four-submenu" href="https://www.bt.gob.ve/" target="_blank"
          ><img
          src="./Iconos/logo-banco-tesoro.png"
          width="45px"
          alt=""
          style="                      
          margin-top: -50px;                                            
          "
          />Tesoro</a
          >
        </li>
      </ul>

      <ul class="five-submenu opzero nonex">
        <li class="smenu-i">
          <a class="one-five-submenu"
          ><img src="./Iconos/censo.png" width="60px" alt=""                  
          />eCenso</a
          >
        </li>
        <li class="smenu-ii">
          <a class="one-five-submenu"
          ><img
          src="./Iconos/cupones.png"
          width="42px"
          alt=""
          style="                      
          margin-top: -40px;                                            
          "
          />Cupones</a
          >
        </li>
        <li class="smenu-iii">
          <a class="one-five-submenu"
          ><img
          src="./Iconos/desarrollo2.png"
          width="47px"
          alt=""
          style="                      
          margin-top: 10px;                                            
          "
          />ODM</a
          ></li>
        </ul>

        <ul class="six-submenu opzero nonex">
          <li class="smenu-i"><a></a></li>
          <!--<i class="fa fa-question-circle" aria-hidden="true"></i>Help6-->
          <li class="smenu-ii"><a></a></li>
          <!--<i class="fa fa-question-circle" aria-hidden="true"></i>Help6-->
          <li class="smenu-iii"><a></a></li>
          <!--<i class="fa fa-question-circle" aria-hidden="true"></i>Help6-->
        </ul>
      </div>
    </div>
  </div>

  <div class="app">
    <img src="./Imagenes/App+Apple.png" alt="">
  </div>



  <div class="modal" id="modal1" data-animation="slideInOutLeft">
    <div class="modal-dialog" style="margin: 10px 0px 10px 60px;
}">
      <!-- <header class="modal-header">
        The header of the first modal
        <button class="close-modal" aria-label="close modal" data-close>
          ✕  
        </button>
      </header> -->
      <section class="modal-content">

        <div id="container" class="login">
          <div class="box">
            <div class="form-box">
              <div class="ic-account">
                <h1 style="color:#fff!important;">Login</h1>
                <!-- <img src="../assets/img/logo-alcaldia-2.png" width="150px" alt=""> -->
              </div>
              <form name="login-form" id="loginForm">

                <!-- <select class="login-form-input" id="selectFloatingLabel2" required="">
                  <option value="" selected>Comercio tal</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select> -->

                <input name="txtusuario" type="text" class="login-form-input" placeholder="Correo" aria-label="username" aria-describedby="username" value="" id="" required>

                <input name="txtcontra" type="password" class="login-form-input" placeholder="Clave de acceso" aria-label="Password" aria-describedby="password" value="" id="idtxtpassword" required>

                <button class="login-form-btn" type="button" id="ingresar">Login</button>

                <p class="text"><a href="#" id="registro">Registrate</a></p>
                <!-- <p class="text"><a href="#">Registrate</a> or <a href="#">Sign up</a></p> -->

                        


                <div id="msg" class="alert alert-danger" style="display: none;margin-top: 15px;margin-bottom: -5px;">
                  <i class="icon-warning2"></i>Debe ingresar usuario y contraseña
                </div>


                <div id="msg" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Debe ingresar usuario y contraseña
                </div>
                <div id="msg2" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Datos incorrectos
                </div>
                <div id="msg3" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Usuario invalido
                </div>
                <div id="msg4" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Contraseña invalida
                </div>


              </form>
            </div>
            <!-- <div class="circle-01"></div>
            <div class="circle-02"></div> -->
          </div>
        </div>

        <div id="container" class="registro" style="display: none;">
          <div class="box">
            <div class="form-box">
              <div class="ic-account">
                <h1 style="color:#fff!important;">Registro</h1>
                <!-- <img src="../assets/img/logo-alcaldia-2.png" width="150px" alt=""> -->
              </div>
              <form name="RegistoContribuyentes" id=RegistoContribuyentes>

                <select class="login-form-input" id="txttipousuario" required="">
                  <option style="color:#000;" value="" selected>Tipo de Usuario</option>
                  <option style="color:#000;" value="representante">Representante</option>
                  <option style="color:#000;" value="contador">Contador</option>
                  <option style="color:#000;" value="socio">Socio</option>
                  <option style="color:#000;" value="otros">Otros</option>
                </select>

                <input name="txtcedula" type="number" class="login-form-input" placeholder="Cédula" aria-label="cedula" aria-describedby="cedula" id="txtcedula" required>

                <input name="txtnombre" type="text" class="login-form-input" placeholder="Nombre" aria-label="nombre" aria-describedby="nombre" id="txtnombre" required>

                <input name="txttelefono" type="number" class="login-form-input" placeholder="Teléfono" aria-label="telefono" aria-describedby="telefono" id="txttelefono" required>

                <input name="txtcorreo" type="email" class="login-form-input" placeholder="Correo" aria-label="correo" aria-describedby="correo" id="txtcorreo" required>

                <!-- <input name="txtcontra" type="password" class="login-form-input" placeholder="Clave de acceso" aria-label="Password" aria-describedby="password" value="" id="idtxtpassword" required> -->

                <button class="login-form-btn" type="submit">Guardar</button>

                <p class="text"><a href="#" id="login">Iniciar Sesión</a></p>
                <!-- <p class="text"><a href="#">Registrate</a> or <a href="#">Sign up</a></p> -->

                        


                <div id="msg" class="alert alert-danger" style="display: none;margin-top: 15px;margin-bottom: -5px;">
                  <i class="icon-warning2"></i>Debe ingresar usuario y contraseña
                </div>


                <div id="msg" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Debe ingresar usuario y contraseña
                </div>
                <div id="msg2" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Datos incorrectos
                </div>
                <div id="msg3" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Usuario invalido
                </div>
                <div id="msg4" class="alert alert-danger" style="display: none;margin-top: -10px;margin-bottom: 10px;">
                  <i class="icon-warning2"></i>Contraseña invalida
                </div>


              </form>
            </div>
            <!-- <div class="circle-01"></div>
            <div class="circle-02"></div> -->
          </div>
        </div>


      </section>
      <!-- <footer class="modal-footer">
        The footer of the first modal
      </footer> -->
    </div>
  </div>

</div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<script src="js/particles.min.js"></script>
<script src="js/app.js"></script>
<script src="js/modal.js"></script>
<script src="js/funciones.js"></script>
<script>

  var sound = new Audio();
  sound.src = "./sonido/misc288.mp3";

  var sound_menu = new Audio();
  sound_menu.src = "./sonido/VideoRecord.mp3";

</script>
</body>
</html>
