import AuthMixin from '@/shared/mixins/auth.mixin'
import { store } from '@/store/store'

export default {
  name: 'login',
  components: {},
  mixins: [
    AuthMixin
  ],
  props: [],
  data () {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      title: 'CPF CNPJ CLIENT',
      show: false,
      isLogin: true
    }
  },
  computed: {

  },
  mounted () {
    store.dispatch('setUser', {})
    setTimeout(() => {
      this.show = true
    }, 1000)
  },
  methods: {
    async verify () {
      if (this.isLogin) {
        this.doLogin()
      } else {
        this.doSignUp()
      }
    },
    async doLogin () {
      let resToken = await this.login(this.form.username, this.form.password)
      let token = resToken.data.data.token

      let user = {
        username: this.form.username,
        token
      }

      store.dispatch('setUser', user)
      this.$router.push('/cpfcnpj')
    },
    async doSignUp () {
      if (this.form.password !== this.form.confirmPassword) {
        this.$root.$emit('toast', { message: 'Senha e Confirme a senha diferentes', type: 'error' })
        return
      }
      this.$root.$emit('showLoading')
      try {
        await this.signup(this.form.username, this.form.password)
        this.doLogin()
      } finally {
        this.$root.$emit('hideLoading')
      }
    },
    showSignup () {
      this.isLogin = !this.isLogin
    }
  }
}
