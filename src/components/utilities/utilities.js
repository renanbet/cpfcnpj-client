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
