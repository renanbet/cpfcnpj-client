/*
* CpfCnpj: Componente da tela de gestão de cpf e cnpj
*/
import AuthMixin from '@/shared/mixins/auth.mixin'
import CpfCnpjMixin from '@/shared/mixins/cpfcnpj.mixin'

export default {
  name: 'cpfcnpj',
  components: {
  },
  mixins: [
    AuthMixin,
    CpfCnpjMixin
  ],
  props: {},
  data: () => ({
    headers: [
      {
        text: 'CPF CNPJ',
        align: 'start',
        value: 'value'
      },
      { text: 'Blacklist', value: 'blacklist' },
      { text: '', value: 'actions', sortable: false },
    ],
    footerProps: {
      'items-per-page-text':'Linhas por página',
      'pageText': '{0}-{1} de {2}',
    },
    listCpfCnpj: [],
    dialogDelete: false,
    dialog: false,
    dialogTitle: 'Novo CPF CNPJ',
    search: '',
    form: {
      id: 0,
      value: '',
      blacklist: false
    },
    idToDelete: 0
  }),
  computed: {
    items () {
      return this.listCpfCnpj
    }
  },
  async mounted() {
    try {
      let data = await this.getAllCpfCnpj()
      this.listCpfCnpj = data.data
    } catch (e) {
      this.$root.$emit('toast', { message: 'Erro ao buscar os cpf cnpj', type: 'error' })
    }
  },
  methods: {
    searchAll() {
      this.search = ''
      this.filterSearch()
    },
    async filterSearch() {
      if (!this.search) {
        let data = await this.getAllCpfCnpj()
        this.listCpfCnpj = data.data
        return
      }
      let data = await this.getAllCpfCnpj(this.search)
      this.listCpfCnpj = data.data
    },
    openAdd () {
      this.dialogTitle = 'Novo CPF CNPJ'
      this.form.value = ''
      this.form.blacklist = false
      this.form.id = 0
      this.dialog = true
    },
    editItem (item) {
      this.dialogTitle = item.value
      this.form.value = item.value
      this.form.blacklist = item.blacklist
      this.form.id = item._id
      this.dialog = true
    },
    async save () {
      let payload = Object.assign({}, this.form)
      delete payload.id
      try {
        if (this.form.id) {
          await this.putCpfCnpj(this.form.id, payload)
        } else {
          await this.postCpfCnpj(payload)
        }
        this.dialog = false
        this.filterSearch()
      } catch (e) {
        //
      }
    },
    deleteCancel () {
      this.idToDelete = 0
      this.dialogDelete = false
    },
    deleteItem (item) {
      this.dialogTitle = item.value
      this.idToDelete = item._id
      this.dialogDelete = true
    },
    async deleteItemConfirm () {
      if (this.idToDelete) {
        await this.deleteCpfCnpj(this.idToDelete)
        this.filterSearch()
      }
      this.dialogDelete = false
    }
  }
}
