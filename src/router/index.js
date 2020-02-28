import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonList from '../views/PokemonList/index'
import PokemonDescription from '../views/PokemonDescription/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PokemonList
  },
  {
    path: '/pokemon',
    component: PokemonDescription
  }
]

const router = new VueRouter({
  routes
})

export default router
