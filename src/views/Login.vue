<template>
<body style="background-color: bisque;">
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
  
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-sm" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title text-center mb-4">Iniciar Sesion</h5>
                <form>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password">
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <input type="checkbox" id="remember-me">
                            <label for="remember-me" class="form-check-label">Recordame</label>
                        </div>
                        <a href="#" class="text-decoration-none">Olvido su contraseña?</a>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Iniciar Sesion</button>
                </form>
                <div class="text-center mt-3">
                    <p class="mb-0">No tiene cuenta? <router-link class="text-decoration-none" to="/Registro">Registro</router-link></p>
                </div>
            </div>
        </div>
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
    name: "Login",
  };
  </script>
  