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
          nombre: 'Remera de Williams F1', 
          precio: 9266, 
          imagen: '/public/img/williams/Captura de pantalla (4202).png' 
        },
        { 
          id: 2, 
          nombre: 'Buzo Canguro F1 2022 Williams', 
          precio: 26500, 
          imagen: '/public/img/williams/Captura de pantalla (4203).png' 
        },
        { 
          id: 3, 
          nombre: 'Gorra F1 Williams Racing Team', 
          precio: 6500, 
          imagen: '/public/img/williams/Captura de pantalla (4204).png' 
        },
        { 
          id: 4, 
          nombre: 'Buzo Canguro Estampado F1 Williams Martini Racing 2018', 
          precio: 26500, 
          imagen: '/public/img/williams/Captura de pantalla (4205).png' 
        },
        { 
          id: 5, 
          nombre: 'Gorra Trucker F1 2023 - Williams - Albon', 
          precio: 5000, 
          imagen: '/public/img/williams/Captura de pantalla (4206).png' 
        },
        { 
          id: 6, 
          nombre: 'Gorra Trucker F1 - Williams', 
          precio: 5250, 
          imagen: '/public/img/williams/Captura de pantalla (4207).png' 
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
