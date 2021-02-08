<script>
import mitt from 'mitt'
const emitter = mitt()

export default {
  props: ['do'],
  mounted () {
    const listener = (e) => {
      if (e.target === this.$el || this.$el.contains(e.target)) {
        return
      }
      this.do()
    }
    document.addEventListener('click', listener)
    emitter.on('removeListener', () => {
      document.removeEventListener('click', listener)
    })
  },
  beforeUnmount () {
    emitter.emit('removeListener')
  },
  render () {
    return this.$slots.default()[0]
  }
}
</script>
