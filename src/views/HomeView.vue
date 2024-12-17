<template >
    <body style="background-color:darksalmon;">
        <div id="app" > 
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
    
        <h1>Articulos de Formula 1</h1>
    
    <div id="formula1carousel" class="carousel slide formula1-carousel" data-bs-ride="carousel" data-bs-interval="2000">
    
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#formula1carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#formula1carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#formula1carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
    
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.formula1.com/etc/designs/fom-website/social/f1-default-share.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Formula 1</h5>
                <p>El mayor espectaculo automovilistico del mundo.</p>
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <!--<h5>Segundo Slide</h5>
                <p>Some representative placeholder content for the first slide.</p>-->
              </div>
          </div>
          <div class="carousel-item">
            <img src="https://noticias.coches.com/wp-content/uploads/2013/07/1954-Mercedes-Benz-W196R-Formula-1-Racing-Single-Seater-12.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Juan Manuel Fangio</h5>
                <p>El mejor piloto de la F1 de la historia.</p>
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#formula1carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#formula1carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
      <div class="greetings">
          <p class="text-description">El Campeonato Mundial de Fórmula 1 de la FIA, es la principal competición de automovilismo internacional y el campeonato de deportes de motor más popular y prestigioso del mundo.A cada carrera se le denomina Gran Premio y el torneo que las agrupa es el Campeonato Mundial de Fórmula 1. A su vez los automóviles utilizados son monoplazas con la última tecnología disponible, siempre limitadas por un reglamento técnico.</p>
    
      <h1>Productos destacados</h1>
      
      </div>
    
      <div id="home">
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
      name: "HomeView",
    };
    </script>
    
    <style>
    @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    
    </style>
    
    <style scoped>
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .fondo-principal{
        background-color: rgb(224, 136, 136);
        font-family: sans-serif;
    }
    
    .header-logo{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    
    .header-custom{
        padding: 0;
        background-color: red !important;
    }
    
    .header-user{
        width: 50px;
        height: 50px;
    }
    
    
    .cart-icon{
        font-size: 2rem;
        text-decoration: none;
    }
    
    .user-info{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    a:hover{color: darkmagenta; text-decoration: wavy underline 2px;}
    
    
    h1{
        font-family: 'Reboto';
        text-decoration: underline solid;
        font-style: italic;
        text-align: center;
        font-size: 250%;
    }
    
    .text-description{
        font-family: 'Arial';
        text-decoration: underline solid;
        font-style: italic;
        text-align: center;
    }
    
    
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(340px,100%),1fr));
        gap: 1rem;
    }
    .card {
        width: 300px;
        border-radius: 12px;
        height: 450px;
        overflow-x: hidden;
        margin: 20px auto;
        box-shadow: 1px 1px 8px 0 #AAA;
        display: flex;
        flex-direction: column;
        transition: box-shadow .3s;
    }
    
    .card:hover {
        box-shadow: 2px 2px 10px 4px #767676;
    }
    
    
    .card-header {
        height: 250px;
        position: relative;
        overflow: hidden;
    }
    
    .card-header img {
        height: 230px;
        width: 100%;
        object-fit: cover;
        filter: grayscale(.5);
        transition: all .3s ease-in;
    }
    
    .card:hover .card-header img {
        filter: grayscale(0);
        transform: scale(1.1) rotate(-0.1deg) ;
    }
    
    .card-img-info {
        position: absolute;
        bottom: 16px;
        left: -60%;
        width: 60%;
        padding: 8px;
        background-color: rgba(0,0,0,.25);
        background-image: linear-gradient(to right, rgba(0,0,0,.65), rgba(0,0,0,.35));
        color: white;
        transition: .25s;
    }
    
    .card:hover .card-header .card-img-info {
        left: 0;
    }
    
    .card-img-info h2 {
        font-size: 14px;
    }
    
    .card-img-info p {
        font-size: 10px;
    }
    
    .card-main {
        padding: 4px 8px 16px;
        font-size: 12px;
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        flex: 1;
    }
    
    .card-main h2 {
        border-bottom: 3px solid dodgerblue;
        padding-bottom: 1px;

    }
    .card-main .card-description {
        flex: 1;
    }
    .card-main p {

        margin: 8px 0;
        line-height: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .card-prices {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: baseline;
    }
    
    .card-payments {
        font-style: italic;
        padding-right: 12px;
        font-size: 1rem;
        color: #666;
    }
    
    .card-price {
        font-size:3rem;
        font-weight: bold;
        padding-right: 12px;
        background: black;
        background-size: contain;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .card-footer {
        padding: 8px;
        display: flex;
        justify-content: space-between;
    }
    
    .card-footer button {
        background-color: dodgerblue;
        color: white;
        padding: 6px;
        border: 1px solid transparent;
        border-radius: 4px;
        font-weight: 100;
        cursor: pointer;
        transition: all .2s ease-in;
    }
    
    
    .card-footer button:hover {
        background-color: white;
        border-color: dodgerblue;
        color: dodgerblue;
    }
    
    
    .comprar{
        background-color: dodgerblue;
        color: white;
        padding: 6px;
        border: 1px solid transparent;
        border-radius: 4px;
        font-weight: 100;
        cursor: pointer;
        transition: all .2s ease-in;
        text-decoration: none;
    }
    
    footer {
        background-color: #f54545;
        padding: 5px;
        text-align: center;
    }
    
    .footer-logo {
        width: 100px;
    }
    
    
    .footer-links a {
        color: #666666;
        text-decoration: none;
        margin: 0 10px;
    }
    
    .footer-links a img{
        width: 50px;
    }
    
    .footer-links h6{
        color: rgb(8, 8, 8);
    }
    
    
    .formula1-carousel .carousel-inner {
        height: 400px;
        padding: 1rem;
    }
    
    .formula1-carousel .carousel-inner img {
        height: 400px;
        object-fit: cover;
    }
    
    .mercerdes-fondo{
        background-color: rgba(127, 255, 212, 0.616);
    }
    
    .escuderias-letra{
        color: black;
        text-align: center;
    }
    
    .escuderias-inner{
        height: 425px;
        padding: 1rem;
    }
    
    .escuderias-inner img{
        height: 400px;
    }
    
    
    .whatsapp-container {
    
        position: fixed;
        right: 1rem;
        /* width: 100%; */
        bottom: 16px;
    }
    
    .whatsapp-container .whatsapp-img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }
    
    .fotopersonal{
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    
    .maps{
        width: 330px;
        height: 200px;
        padding: 1rem;
    }
    
    @media screen and (width < 500px) {
        .text-description{
            font-size: x-small;
        }
    
        .escuderias-inner{
            height: 125px;
        }
    
        .escuderias-inner img{
            height: 100px;
        }
    
        .fotopersonal{
            width: 100px;
            height: 100px;
        }
    }
    
    @media screen and (width > 500px) {
        .maps{
            width: 1000px;
            height: 500px;
            padding: 1rem;
        }
    
    }
    </style>