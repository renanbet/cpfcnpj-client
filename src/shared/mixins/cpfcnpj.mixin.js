/*
* CpfCnpjMixin: Serviços de cpf cnpj
*/
import BaseMixin from './base.mixin'

const mixin = {
  mixins: [
    BaseMixin
  ],
  methods: {
    async getAllCpfCnpj (search = '') {
      let url = 'cpfcnpj'
      const encoded = search ? `?search=${encodeURI(search)}` : ''
      const data = await this.requestGet(`${url}${encoded}`)
      return data.data
    },
    async postCpfCnpj (payload) {
      let url = 'cpfcnpj'
      const data = await this.requestPost(`${url}`, payload)
      return data
    },
    async putCpfCnpj (id, payload) {
      let url = 'cpfcnpj'
      const data = await this.requestPut(`${url}/${id}`, payload)
      return data
    },
    async getCpfCnpj (id) {
      let url = 'cpfcnpj'
      const data = await this.requestGet(`${url}/${id}`)
      return data
    },
    async deleteCpfCnpj (id) {
      let url = 'cpfcnpj'
      const data = await this.requestDelete(`${url}/${id}`)
      return data
    },
  }
}

export default mixin
