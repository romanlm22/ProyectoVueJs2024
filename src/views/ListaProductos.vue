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
          nombre: 'Buzo Canguro F1 Red Bull - Ferrari', 
          precio: 19532, 
          imagen: '/public/img/ferrari/Captura de pantalla (4177).png' 
        },
        { 
          id: 2, 
          nombre: 'Remera negra de Mclaren F1', 
          precio: 9266, 
          imagen: '/public/img/mclaren/Captura de pantalla (4191).png' 
        },
        { 
          id: 3, 
          nombre: 'Gorra de Red Bull Racing F1', 
          precio: 400, 
          imagen: '/public/img/red bull/Captura de pantalla (4105).png' 
        },
        { 
          id: 4, 
          nombre: 'Remera Algodon Mercedes F1', 
          precio: 9266, 
          imagen: '/public/img/mercedes/Captura de pantalla (4093).png' 
        },
        { 
          id: 5, 
          nombre: 'Maserati 250f (1957) Coleccion Museo Fangio', 
          precio: 5500, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4237).png' 
        },
        { 
          id: 6, 
          nombre: 'Auto Formula Uno F1 - Lionel', 
          precio: 3000, 
          imagen: '/public/img/jueguetes/Captura de pantalla (4227).png' 
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
