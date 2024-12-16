// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue'; // Importa tu página de inicio
import About from '../views/AboutView.vue'; // Otra página
import Contacto from '@/views/Contacto.vue';
import Login from '@/views/Login.vue';
import Registro from '@/views/Registro.vue';
import Alphine from '@/views/Alphine.vue';
import Williams from '@/views/Williams.vue';
import ArticulosColeccion from '@/views/ArticulosColeccion.vue';
import ListaProductos from '@/views/ListaProductos.vue'
import CarritoCompras from '@/views/CarritoCompras.vue'
import ListaProductosAlphine from '@/views/ListaProductosAlphine.vue';
import ListaProductosWilliams from '@/views/ListaProductosWilliams.vue';
import ListaProductosArticulosColeccion from '@/views/ListaProductosArticulosColeccion.vue';


const routes = [
  {
    path: '/', // Ruta predeterminada
    name: 'Home',
    component: Home, // Página asociada
    children: [
      {
        path: '',
        component: ListaProductos, // Vista inicial cuando no hay ruta específica
      },
      {
        path: 'carrito',
        component: CarritoCompras, // Vista del carrito
      },
    ]
  },
  {
    path: '/about', // Otra ruta
    name: 'About',
    component: About,
  },
  {
    path: '/contacto', // Otra ruta
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/login', // Otra ruta
    name: 'Login',
    component: Login,
  },
  {
    path: '/registro', // Otra ruta
    name: 'Registro',
    component: Registro,
  },  
  {
    path: '/alphine', // Otra ruta
    name: 'Alphine',
    component: Alphine,
    children: [
      {
        path: '',
        component: ListaProductosAlphine, // Vista inicial cuando no hay ruta específica
      },
      {
        path: 'carrito',
        component: CarritoCompras, // Vista del carrito
      },
    ]
  },
  {
    path: '/williams', // Otra ruta
    name: 'Williams',
    component: Williams,
    children: [
      {
        path: '',
        component: ListaProductosWilliams, // Vista inicial cuando no hay ruta específica
      },
      {
        path: 'carrito',
        component: CarritoCompras, // Vista del carrito
      },
    ]
  },
  {
    path: '/articuloscoleccion', // Otra ruta
    name: 'ArticulosColeccion',
    component: ArticulosColeccion,
    children: [
      {
        path: '',
        component: ListaProductosArticulosColeccion, // Vista inicial cuando no hay ruta específica
      },
      {
        path: 'carrito',
        component: CarritoCompras, // Vista del carrito
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(), // Usar el historial del navegador
  routes,
});

export default router;
