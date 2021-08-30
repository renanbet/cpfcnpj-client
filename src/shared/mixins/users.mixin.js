import BaseMixin from './base.mixin'

const mixin = {
  mixins: [
    BaseMixin
  ],
  methods: {
    async changePassword (password, newPassword) {
      let url = 'users/changePassword'
      const data = await this.requestPut(`${url}`, {password, newPassword})
      return data
    },
    async postUser (user) {
      let url = 'users'
      const data = await this.requestPost(`${url}`, user)
      return data
    },
    async resetPassword (user_id) {
      let url = 'users/resetpassword'
      const data = await this.requestPut(`${url}`, {user_id})
      return data
    },
    async getRoles () {
      let url = `users/roles`
      const data = await this.requestGet(`${url}`)
      return data
    },
  }
}

export default mixin
