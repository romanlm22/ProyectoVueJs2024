<!-- src/views/About.vue -->
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
                    <img class="header-user" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="">
                </div>
                <!--<form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-danger" type="submit">Buscar</button>
                </form>-->
              </div>
            </div>
          </nav>
    </header>
  
    <h1 style="color: red;">Williams F1</h1>
    <div class="escuderias-inner">
      <div class="carousel-item active escuderias-img">
        <img src="https://cdn.williamsf1.tech/images/fnx611yr/production/ff454bb2b4adb541b66477adcb49088f8de0fb4a-2400x2400.jpg?rect=0,572,2400,1256&w=1200&h=628&auto=format" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <!--
          -->  
        </div>
      </div>
    </div>
    <p class="text-description">
        Williams Grand Prix Engineering Limited, comúnmente conocido como Williams Racing, es un equipo de Fórmula 1 creado en 1977 por Frank Williams y Patrick Head. Williams es considerado uno de los cuatro grandes equipos de Fórmula 1. El suizo Clay Regazzoni ganó la primera carrera para el equipo en el Gran Premio de Gran Bretaña de 1979, mientras que en el Gran Premio de Gran Bretaña de 1997, el canadiense Jacques Villeneuve ganó la carrera número 100 para el equipo. Siete pilotos han sido campeones mundiales con Williams. A su vez, el equipo ganó 9 Campeonatos de Constructores entre 1980 y 1997
      </p>


      <section class="card-container">
        
        <article class="card">
          <div class="card-header">
              <figure>
                  <img src="/public/img/williams/Captura de pantalla (4202).png" alt="Paisaje con nubes arcoiris">
              </figure>
              
  
          </div>
          
          <div class="card-main">
              <h2>Remera de Williams F1 </h2>
              <div class="card-description">
                  <p>Remera de Algodon Red Bull
                    Remera de Algodón Premium
                    Corte Unisex
                    Reforzada en costuras y tapa costura.
                    Recomendada para usos intensivos
                    No encoje con los lavados
                  </p>
              </div>
              
              <div class="card-prices">
                  <div class="card-payments">12 cuotas $1742</div>
              <div class="card-price">$9266</div>
          </div>
      </div>
      
      <div class="card-footer">
          <button class="card-details">Ver detalles</button>
          <button class="card-buy"><a class="comprar" href="https://articulo.mercadolibre.com.ar/MLA-930219891-remera-algodon-red-bull-f1-_JM?searchVariation=174933064850#searchVariation=174933064850&position=1&search_layout=stack&type=item&tracking_id=ccf1faaa-7abe-432b-ac1e-787366f59ba3">Comprar</a></button>
      </div>
  </article>
  
  <article class="card">
      <div class="card-header">
          <figure>
              <img src="/public/img/williams/Captura de pantalla (4203).png" alt="Paisaje con nubes arcoiris">
          </figure>
          
      </div>
      
      <div class="card-main">
          <h2>Buzo Canguro F1 2022 Williams</h2>
          <div class="card-description">
              <p> Capucha Tuning F1 Red Bull Racing 100% Algodon
              </p>
          </div>
          
          <div class="card-prices">
              <div class="card-payments">3 cuotas $4982</div>
              <div class="card-price">$26500</div>
          </div>
      </div>
      
      <div class="card-footer">
          <button class="card-details">Ver detalles</button>
          <button class="card-buy"><a class="comprar" href="https://articulo.mercadolibre.com.ar/MLA-1381835151-buzo-canguro-capucha-tuning-f1-red-bull-racing-100-algodon-_JM#position=22&search_layout=stack&type=item&tracking_id=e044d134-d5e9-4d65-8687-021b9a5b18bd&gid=1&pid=1">Comprar</a></button>
      </div>
  </article>
    


<article class="card">
    <div class="card-header">
        <figure>
            <img src="/public/img/williams/Captura de pantalla (4204).png" alt="Paisaje con nubes arcoiris">
        </figure>
        

    </div>

    <div class="card-main">
        <h2>Gorra F1 Williams Racing Team</h2>
        <div class="card-description">
            <p>ESTAMPADO PREMIUM

              • Estampado en Vinilo Termotransferible.
              • No se deforman
              • No se rompen
              • No se despegan
              
            </p>
        </div>
        
        <div class="card-prices">
            <div class="card-payments">12 cuotas $122</div>
            <div class="card-price">$6500</div>
        </div>
    </div>
    
    <div class="card-footer">
        <button class="card-details">Ver detalles</button>
        <button class="card-buy"><a class="comprar" href="https://articulo.mercadolibre.com.ar/MLA-927680045-gorra-f1-williams-racing-team-_JM#position=6&search_layout=stack&type=item&tracking_id=ab55fe95-6183-411e-b124-5fef55ec220a">Comprar</a></button>
    </div>
</article>

<article class="card">
  <div class="card-header">
      <figure>
          <img src="/public/img/williams/Captura de pantalla (4205).png" alt="Paisaje con nubes arcoiris">
      </figure>
      

  </div>
  
  <div class="card-main">
      <h2>Gorra Trucker F1 - Williams</h2>
      <div class="card-description">
          <p>Gorra Trucker Adulto
          </p>
      </div>
      
      <div class="card-prices">
          <div class="card-payments">12 cuotas $733</div>
          <div class="card-price">$3900</div>
      </div>
  </div>
  
  <div class="card-footer">
      <button class="card-details">Ver detalles</button>
      <button class="card-buy"><a class="comprar" href="https://articulo.mercadolibre.com.ar/MLA-883194048-gorra-trucker-f1-williams-martini-racing-_JM#position=25&search_layout=stack&type=item&tracking_id=0e594dc8-2e68-4e06-81f1-3cf21e647044">Comprar</a></button>
  </div>
</article>

<article class="card">
  <div class="card-header">
      <figure>
          <img src="/public/img/williams/Captura de pantalla (4206).png" alt="Paisaje con nubes arcoiris">
      </figure>
      

  </div>
  
  <div class="card-main">
      <h2>Chomba F1 - Williams Racing 2019</h2>
      <div class="card-description">
          <p>Chomba 100% Algodón estampada con vinilo Textil. Calidad Premium.
          </p>
      </div>
      
      <div class="card-prices">
          <div class="card-payments">12 cuotas $2707</div>
          <div class="card-price">$14400</div>
      </div>
  </div>
  
  <div class="card-footer">
      <button class="card-details">Ver detalles</button>
      <button class="card-buy"><a class="comprar" href="https://articulo.mercadolibre.com.ar/MLA-935309975-chomba-f1-williams-racing-2019-_JM#position=49&search_layout=stack&type=item&tracking_id=1b2a8961-457d-4d63-8fca-019d7216f930">Comprar</a></button>
  </div>
</article>

<article class="card">
  <div class="card-header">
      <figure>
          <img src="/public/img/williams/Captura de pantalla (4207).png" alt="Paisaje con nubes arcoiris">
      </figure>
      

  </div>
  
  <div class="card-main">
      <h2>Buzo Cuello Redondo F1 Mercedes Williams Racing 2018</h2>
      <div class="card-description">
          <p>Nuestras remeras son 100% Algodón Peinado 20.1 de excelente calidad, reforzadas con tapa costura de hombro a hombro, por lo que la calidad de nuestros productos se encuentra garantizada.
          </p>
      </div>
      
      <div class="card-prices">
          <div class="card-payments">12 cuotas $6110</div>
          <div class="card-price">$32500</div>
      </div>
  </div>
  
  <div class="card-footer">
      <button class="card-details">Ver detalles</button>
      <button class="card-buy"><a class="comprar" href="https://articulo.mercadolibre.com.ar/MLA-857924494-buzo-cuello-redondo-f1-mercedes-williams-racing-2018-xxxxxl-_JM#position=3&search_layout=stack&type=item&tracking_id=6f5a0d6a-7158-43fb-851d-24195001e283">Comprar</a></button>
  </div>
</article>


</section>
  
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
  