/*
* Rotas da aplicação
*/
import Login from '@/components/login/index.vue'
import CpfCnpj from '@/components/cpfcnpj/index.vue'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false }
  },
  {
    path: '/cpfcnpj',
    component: CpfCnpj,
    meta: { requiresAuth: true },
    name: 'cpfcnpj'
  }
]

export default routes
