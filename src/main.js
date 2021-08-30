import Vue from 'vue'
/*
* App: componente raiz da aplicação
*/
import App from './components/app'
import vuetify from './plugins/vuetify';
import router from './router'
import { store } from './store/store'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'
import VueFriendlyIframe from 'vue-friendly-iframe'

Vue.use(VueFriendlyIframe)
Vue.use(AnimatedVue)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
