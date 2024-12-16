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

const routes = [
  {
    path: '/', // Ruta predeterminada
    name: 'Home',
    component: Home, // Página asociada
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
  },
  {
    path: '/williams', // Otra ruta
    name: 'Williams',
    component: Williams,
  },
  {
    path: '/articuloscoleccion', // Otra ruta
    name: 'ArticulosColeccion',
    component: ArticulosColeccion,
  },
];

const router = createRouter({
  history: createWebHistory(), // Usar el historial del navegador
  routes,
});

export default router;
