/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import env from '../env'
import { store } from '@/store/store'

const mixin = {
  mixins: [],
  data () {
    return {
      client: null,
      timeout: 60000
    }
  },
  beforeMount () {
    this.client = axios.create({
      baseUrl: env.URL_API,
      timeout: this.timeout
    })

    this.client.interceptors.request.use((config) => {
      config.url = `${config.baseUrl}/${config.url}`
      /*
      * busca usuario na vuex store
      */
      const user = store.state.user
      const token = user && user.token ? user.token : ''

      if (config.url.indexOf('login') === -1 ||
          config.url.indexOf('signin') === -1) {
        config.headers.Authorization = token
      }

      return config
    })

    this.client.interceptors.response.use((response) => {
      if (response.headers.authorization) {
        this.client.interceptors.request.use((config) => {
          config.headers.common.Authorization = response.headers.authorization
          return config
        })
      }

      return response
    }, (error) => {
      const response = JSON.parse(JSON.stringify(error)).response
      if (response && (response.status === 401 || response.status === 403)) {
        store.dispatch('setUser', {})
        this.$router.push('/')
        return
      }

      if (!response) {
        this.showToast(error)
        this.$root.$emit('hideLoading')
        return Promise.reject()
      }

      if (response.data.error) {
        this.showToast(response.data.error)
        this.$root.$emit('hideLoading')
        return Promise.reject()
      }

      const errors = response.data.errors
      if (errors) {
        if (Array.isArray(errors)) {
          errors.forEach((err) => {
            this.showToast(err.message)
          })
        } else {
          this.showToast(errors)
        }

        this.$root.$emit('hideLoading')
        return Promise.reject()
      }
      this.showToast(error)

      this.$root.$emit('hideLoading')
      return Promise.reject()
    })
  },
  methods: {
    requestGet (url) {
      return this.client.get(url)
    },
    requestPost (url, data) {
      return this.client.post(url, data)
    },
    requestPut (url, data) {
      return this.client.put(url, data)
    },
    requestDelete (url) {
      return this.client.delete(url)
    },
    getClient () {
      return this.client
    },
    showToast (message) {
      this.$root.$emit('toast', { message, type: 'error' })
    }
  }
}

export default mixin
