<template>
    <div class="card">
      <img :src="producto.imagen" alt="Imagen del producto" class="card-img" />
      <div class="card-body">
        <h3 class="card-title">{{ producto.nombre }}</h3>
        <p class="card-price">${{ producto.precio }}</p>
        <button class="add-to-cart" @click="agregarAlCarrito">Agregar al carrito</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { useCarritoStore } from '@/stores/carritoStore'
  
  export default defineComponent({
    props: {
      producto: {
        type: Object as PropType<{ id: number; nombre: string; precio: number; imagen: string }>,
        required: true
      }
    },
    setup(props) {
      const carritoStore = useCarritoStore()
  
      const agregarAlCarrito = () => {
        carritoStore.agregarAlCarrito(props.producto)
      }
  
      return {
        agregarAlCarrito
      }
    }
  })
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 250px; /* Ajustamos el ancho */
    margin: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex; /* Usamos Flexbox para organizar el contenido de manera más flexible */
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .card-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 2px solid #f0f0f0;
  }
  
  .card-body {
    padding: 15px;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }
  
  .card-price {
    font-size: 1.1rem;
    color: #e74c3c;
    margin-bottom: 15px;
  }
  
  .add-to-cart {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  
  .add-to-cart:hover {
    background-color: #218838;
  }
  </style>
  