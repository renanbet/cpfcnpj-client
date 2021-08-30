import BaseMixin from './base.mixin'

const mixin = {
  mixins: [
    BaseMixin
  ],
  methods: {
    async signup (username, password) {
      let user = {
        username,
        password
      }
      let url = 'users/signup'
      const data = await this.requestPost(`${url}`, user)
      return data
    },
    async login (username, password) {
      let url = 'users/login'
      const data = await this.requestPost(`${url}`, {username, password})
      return data
    }
  }
}

export default mixin
