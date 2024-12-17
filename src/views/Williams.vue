<template>
<body style="background-color: beige;">
  <div id="app">
    <header>
            <nav class="navbar navbar-expand-lg header-custom"  data-bs-theme="dark">
                <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img class="header-logo" src="https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1=" alt="Logo"></router-link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <router-link class="nav-link active" to="/Contacto">Contacto</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link active" to="/about">Acerca de</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link active" to="/Registro">Registro</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link active" to="/Login">Login</router-link>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Articulos</a>
                        <ul class="dropdown-menu">
                          <li><router-link class="nav-link active" to="/Alphine">Ferrari</router-link></li>
                          <li><router-link class="nav-link active" to="/Williams">Williams</router-link></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><router-link class="nav-link active" to="/ArticulosColeccion">Articulos De Coleccion</router-link></li>
                        </ul>
                    </li>
                    </ul>
                    <div class="user-info">
                        <a href="" class="cart-icon"><i class="fa-solid fa-cart-shopping"></i></a>
                        <router-link to="/carrito"><img class="header-user" src="https://cdn-icons-png.flaticon.com/256/3144/3144456.png" alt=""></router-link>
                    </div>
                  </div>
                </div>
              </nav>
        </header>
  
    <h1 style="color: red;">Williams F1</h1>
    <div class="escuderias-inner">
      <div class="carousel-item active escuderias-img">
        <img src="https://cdn.williamsf1.tech/images/fnx611yr/production/ff454bb2b4adb541b66477adcb49088f8de0fb4a-2400x2400.jpg?rect=0,572,2400,1256&w=1200&h=628&auto=format" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">

        </div>
      </div>
    </div>
    <p class="text-description">
        Williams Grand Prix Engineering Limited, comúnmente conocido como Williams Racing, es un equipo de Fórmula 1 creado en 1977 por Frank Williams y Patrick Head. Williams es considerado uno de los cuatro grandes equipos de Fórmula 1. El suizo Clay Regazzoni ganó la primera carrera para el equipo en el Gran Premio de Gran Bretaña de 1979, mientras que en el Gran Premio de Gran Bretaña de 1997, el canadiense Jacques Villeneuve ganó la carrera número 100 para el equipo. Siete pilotos han sido campeones mundiales con Williams. A su vez, el equipo ganó 9 Campeonatos de Constructores entre 1980 y 1997
      </p>


      <div id="williams">
      <router-view /> 
    </div>
  
<div class="whatsapp-container">
    <a href="https://wa.me/5493794126408?text=Hola%20me%20conctacto%20por%20que%20vistite%20tu%20sitio%20%20web%20y%20me%20interesan%20o%20tengo%20dudas%20acerca%20de%20los%20productos%20de%20la%20pagina.">
        <img class="whatsapp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" alt="logo whatsapp para chat">

    </a>
</div>

    <footer class="footer">
      <img class="footer-logo" src="https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1=" alt="Logo de la empresa">
      <div class="footer-links">
          <p>Derechos de autor © 2024. Mi sitio web.</p>
          <p><router-link class="nav-link active" to="/about">Terminos y Condiciones</router-link></p>
          <p>Ultima actualizacion de precios: 15/12/2024.</p>
          <hr>
          <h6 class="redes">Redes Sociales</h6>
          <a href="https://www.instagram.com/romanlm22/"><img src="https://cdn-icons-png.flaticon.com/512/145/145805.png?w=740&t=st=1691272695~exp=1691273295~hmac=77f2e10535b569030dc6504f53a6e2563db56b04fb462a2c05d7cd4681bdecd4" alt=""></a>
          <a href="https://twitter.com/victorlopezmach"><img src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1691272632~exp=1691273232~hmac=c7b6ee601fecda545fdb4e37e172d50eec60c7514f0e91b42b2f7a33c8a80d46" alt=""></a>
      </div>
  </footer>
    </div>
</body>
</template>
  
  <script>
  export default {
    name: "Williams",
  };
  </script>
  