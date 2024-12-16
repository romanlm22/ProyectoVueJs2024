import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    carrito: [] as { id: number; nombre: string; precio: number; imagen: string }[],
  }),
  getters: {
    totalArticulos: (state) => state.carrito.length,
    precioTotal: (state) => state.carrito.reduce((total, producto) => total + producto.precio, 0),
  },
  actions: {
    agregarAlCarrito(producto: { id: number; nombre: string; precio: number; imagen: string }) {
      this.carrito.push(producto)
    },
    eliminarDelCarrito(id: number) {
      this.carrito = this.carrito.filter(producto => producto.id !== id)
    },
    vaciarCarrito() {
      this.carrito = []
    }
  }
})
