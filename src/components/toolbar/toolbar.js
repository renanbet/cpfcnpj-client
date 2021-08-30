/*
* Toolbar: menu e barra de ferramentas superior da aplicação
*/
import env from '../../shared/env'

export default {
  name: 'toolbar',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      progress: false,
      showMenu: null
    }
  },
  computed: {

  },
  mounted () {
    this.$root.$on('showLoading', () => {
      this.progress = true
    })
    this.$root.$on('hideLoading', () => {
      this.progress = false
    })
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    doNothing () {
    },
    logout () {
      this.$emit('logout')
    },
    status () {
      window.open(`${env.URL_API}/status`)
    }
  }
}
