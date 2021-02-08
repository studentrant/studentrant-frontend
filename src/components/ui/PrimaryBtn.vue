<template>
  <button
    type="button"
    @click="click"
    class="w-full px-4 py-2 border border-transparent text-sm text-center font-medium rounded-md shadow-sm text-black bg-primary hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100"
  >
    <slot></slot>
  </button>
</template>

<script lang="js">
export default {
  name: 'PrimaryBtn',
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
