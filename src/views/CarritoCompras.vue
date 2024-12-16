<template>
  <div class="carrito">
    <h2 class="text-center">Carrito de Compras</h2>
    <div v-if="carrito.length === 0" class="empty-cart">
      <p>El carrito está vacío.</p>
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
