<template>
  <body style="background-color:bisque;">
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

        <div class="carrito">
    <h1 class="text-center">Carrito de Compras</h1>
    <h4>"Bienvenido a tu carrito de artículos de Fórmula 1. Aquí encontrarás todos los productos de tu elección, desde réplicas de autos historicos hasta remeras, buzos, gorra y múltiples accesorios nacionales como oficiales de tus scuderias favoritas. Vea los detalles de su pedido, vea tanto las cantidades o elimine artículos que ya no desee o puso por error. Cuando estés listo, prepárate para llevarte la pasión y la adrenalina de la F1 directamente a su hogar. ¡ Muchas gracias por elegirnos como su pagina para la compras de productos de Fórmula 1"</h4>
    <div v-if="carrito.length === 0" class="empty-cart">
      <h2 style="color: black;">El carrito está vacío.</h2>
    </div>
    <div v-else>
      <div class="producto-carrito" v-for="producto in carrito" :key="producto.id">
        <img :src="producto.imagen" alt="Imagen del producto" class="producto-imagen" />
        <div class="producto-info">
          <h3>{{ producto.nombre }}</h3>
          <p>${{ producto.precio }}</p>
        </div>
        <button @click="eliminarProducto(producto.id)" class="eliminar-btn">Eliminar</button>
      </div>
      <div class="total">
        <p>Total de artículos: {{ totalArticulos }}</p>
        <p>Precio total: ${{ precioTotal }}</p>
        <button @click="vaciarCarrito" class="vaciar-btn">Vaciar carrito</button>
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

<script lang="ts">
import { defineComponent } from 'vue'
import { useCarritoStore } from '@/stores/carritoStore'

export default defineComponent({
  setup() {
    const carritoStore = useCarritoStore()

    const eliminarProducto = (id: number) => {
      carritoStore.eliminarDelCarrito(id)
    }

    const vaciarCarrito = () => {
      carritoStore.vaciarCarrito()
    }

    return {
      carrito: carritoStore.carrito,
      totalArticulos: carritoStore.totalArticulos,
      precioTotal: carritoStore.precioTotal,
      eliminarProducto,
      vaciarCarrito
    }
  }
})
</script>

<style scoped>
.carrito {
  padding: 20px;
}

.producto-carrito {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.producto-imagen {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
}

.producto-info {
  flex-grow: 1;
}

.eliminar-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.eliminar-btn:hover {
  background-color: #c0392b;
}

.total {
  margin-top: 20px;
}

.vaciar-btn {
  background-color: #f39c12;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.vaciar-btn:hover {
  background-color: #e67e22;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}
</style>
