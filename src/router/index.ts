import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Produtos from '../views/Produtos.vue';
import Masculino from "../views/masculino/Masculino.vue";
import Feminino from "../views/feminino/Feminino.vue";
import Joias from "../views/joias/Joias.vue";
import Eletronicos from "../views/Eletronicos/Eletronicos.vue";
import About from "../views/About.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Produtos',
      component: Produtos
    }
    
    ,
    {
      path: '/About',
      component: About
    },
    {
      path: '/masculino/Masculino',
      component: Masculino
    },
    {
      path: '/feminino/Feminino',
      component: Feminino
    },
    {
      path: '/joias/Joias',
      component: Joias
    },
    {
      path: '/eletronicos/Eletronicos',
      component: Eletronicos
    }
  
  ]
})

export default router
