import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../view/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
