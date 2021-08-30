/*
* Utilities: componente para gerenciar eventos globais da aplicação.
* Ex: snackbar, loading, etc.
*/
export default {
  name: 'utilities',
  components: {},
  props: [],
  data () {
    return {
      multiLine: true,
      snackbar: false,
      snackText: ''
    }
  },
  computed: {

  },
  mounted () {
    this.$root.$on('toast', (data) => {
      this.snackbar = true
      this.snackText = data.message
    })
  },
  methods: {

  }
}
