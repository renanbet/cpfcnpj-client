/*
* Controle de roteamento
* Executado ao acessar uma rota
* Verifica a permissão para acessar a rota
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes })

router.beforeEach((to, from, next) => {
  if (!to.name) {
    return next('/')
  }

  if (to.meta.requiresAuth) {
    let user = router.app.$store.getters.getUser
    if (!user || !user.token) {
      return next('/')
    }
  }

  next()
})

export default router
