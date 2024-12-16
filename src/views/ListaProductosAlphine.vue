<template>
  <div class="productos">
    <ProductoCard
      v-for="producto in productos"
      :key="producto.id"
      :producto="producto"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductoCard from '@/components/ProductoCard.vue'

export default defineComponent({
  components: {
    ProductoCard
  },
  data() {
    return {
      productos: [
        { 
          id: 1, 
          nombre: 'Chomba F1 2022 Ferrari', 
          precio: 13900, 
          imagen: '/public/img/ferrari/Captura de pantalla (4183).png' 
        },
        { 
          id: 2, 
          nombre: 'Camiseta Ferrai F1', 
          precio: 19800, 
          imagen: '/public/img/ferrari/Captura de pantalla (4178).png' 
        },
        { 
          id: 3, 
          nombre: 'Buzo Ferrari F1 Urbano', 
          precio: 19700, 
          imagen: '/public/img/ferrari/Captura de pantalla (4179).png' 
        },
        { 
          id: 4, 
          nombre: 'Campera Canguro F1 Ferrari 2021', 
          precio: 28000, 
          imagen: '/public/img/ferrari/Captura de pantalla (4180).png' 
        },
        { 
          id: 5, 
          nombre: 'Remera personal Ferrari F1', 
          precio: 12000, 
          imagen: '/public/img/ferrari/Captura de pantalla (4181).png' 
        },
        { 
          id: 6, 
          nombre: 'Remera Conmemorativa Ferrari F1', 
          precio: 13500, 
          imagen: '/public/img/ferrari/Captura de pantalla (4182).png' 
        }
      ]
    }
  }
})
</script>

<style scoped>
.productos {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 20px; /* Espaciado entre las tarjetas */
  padding: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .productos {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas en pantallas pequeñas */
  }
}

@media (max-width: 480px) {
  .productos {
    grid-template-columns: 1fr; /* Una columna en pantallas muy pequeñas */
  }
}
</style>
