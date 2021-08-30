/*
* App: componente raiz da aplicação.
* Este componente é responsável por renderizar 
* as rotas declaradas no src/router.
*/
import Toolbar from '@/components/toolbar'
import Utilities from '@/components/utilities'
import { store } from '@/store/store'

export default {
  name: 'app',
  mixins: [],
  components: {
    Toolbar,
    Utilities
  },
  props: {},
  data () {
    return {
      show: false
    }
  },
  computed: {},
  mounted () {
    let route = this.$route
    this.show = route.name !== 'login' &&
      store.state.user &&
      store.state.user.token ? true : false
  },
  methods: {
    logout () {
      store.dispatch('setUser', {})
      this.$router.push('/')
    }
  },
  watch: {
    $route: function (to, from) {
      if (/login/.test(to.name)) {
        this.show = false
      }

      if (/login/.test(from.name)) {
        this.show = true
      }
    }
  }
}
