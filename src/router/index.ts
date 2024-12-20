
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue'; 
import About from '../views/AboutView.vue'; 
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
    ],
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoCompras, 
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
    ],
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
    ],
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;

