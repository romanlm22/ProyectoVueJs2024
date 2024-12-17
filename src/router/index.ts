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
    path: '/', 
    name: 'Home',
    component: Home, 
    children: [
      {
        path: '',
        component: ListaProductos, 
      },
      {
        path: 'carrito',
        component: CarritoCompras, 
      },
    ]
  },
  {
    path: '/about', 
    name: 'About',
    component: About,
  },
  {
    path: '/contacto', 
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/login', 
    name: 'Login',
    component: Login,
  },
  {
    path: '/registro', 
    name: 'Registro',
    component: Registro,
  },  
  {
    path: '/alphine', 
    name: 'Alphine',
    component: Alphine,
    children: [
      {
        path: '',
        component: ListaProductosAlphine, 
      },
      {
        path: 'carrito',
        component: CarritoCompras, 
      },
    ]
  },
  {
    path: '/williams', 
    name: 'Williams',
    component: Williams,
    children: [
      {
        path: '',
        component: ListaProductosWilliams, 
      },
      {
        path: 'carrito',
        component: CarritoCompras, 
      },
    ]
  },
  {
    path: '/articuloscoleccion', 
    name: 'ArticulosColeccion',
    component: ArticulosColeccion,
    children: [
      {
        path: '',
        component: ListaProductosArticulosColeccion, 
      },
      {
        path: 'carrito',
        component: CarritoCompras, 
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
