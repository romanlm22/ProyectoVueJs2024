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
          nombre: 'Maserati 250f (1957) Coleccion Museo Fangio', 
          precio: 10000, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4237).png' 
        },
        { 
          id: 2, 
          nombre: 'Mercedes Benz W196 Colección Museo Fangio', 
          precio: 10000, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4248).png' 
        },
        { 
          id: 3, 
          nombre: 'Coleccion Formula 1 F1 N°67 Williams Fw26 Juan Pablo Montoya', 
          precio: 15000, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4239).png' 
        },
        { 
          id: 4, 
          nombre: 'Colección Auto Formula1', 
          precio: 17000, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4240).png' 
        },
        { 
          id: 5, 
          nombre: 'Mclaren Mp4/4 1988 Senna 1/43 Coleccion Formula 1 Salvat', 
          precio: 30000, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4244).png' 
        },
        { 
          id: 6, 
          nombre: 'Colección Fórmula 1 - Benetton B196 - Jean Alesi', 
          precio: 20000, 
          imagen: '/public/img/articulos de coleccion/Captura de pantalla (4242).png' 
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
