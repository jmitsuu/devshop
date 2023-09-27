import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Produtos from '../views/Produtos.vue';
import Masculino from "../views/vestuario/Masculino.vue";
import Feminino from "../views/vestuario/Feminino.vue";
import Joias from "../views/joias/Joias.vue";
import Eletronicos from "../views/eletronicos/Eletronicos.vue";
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
      path: '/vestuario/Masculino',
      component: Masculino
    },
    {
      path: '/vestuario/Feminino',
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
