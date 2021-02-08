<template>
  <input
    class="appearance-none block w-full p-3 border border-transparent rounded-md bg-gray-900 transition-all duration-300 placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
    :placeholder="placeholderText"
    v-model="input"
    id="interests"
    @keydown.enter.prevent="addTag"
  />
  <label
    for="interests"
    :class="{ noInterests: !modelValue.length }"
    class="absolute font-medium -top-3.5 ml-3"
  >
    Interests
  </label>
  <p v-if="modelValue.length" class="pl-3 pt-2 pb-3 text-xs text-gray-400">
    Add a topic you are interested in
  </p>
  <span
    v-for="tag in modelValue"
    :key="tag"
    class="inline-flex items-center leading-none text-sm bg-gray-900 text-white rounded select-none p-1 mr-2 mb-1 focus-within:shadow-sm"
  >
    <span>{{ tag }}</span>
    <button type="button" class="text-lg leading-none ml-1 mt-0.5 focus:outline-none overflow-hidden" @click="removeTag(tag)">
      &times;
    </button>
  </span>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  data () {
    return {
      input: ''
    }
  },
  computed: {
    newTag () {
      return this.input.trim()
    },
    placeholderText () {
      return this.modelValue.length ? 'Add tags...' : 'Interests'
    }
  },
  methods: {
    removeTag (tag) {
      this.$emit(
        'update:modelValue',
        this.modelValue.filter((t) => t !== tag)
      )
    },
    addTag () {
      if (this.newTag.length === 0 || this.modelValue.includes(this.newTag)) {
        return
      }
      this.$emit('update:modelValue', [...this.modelValue, this.newTag])
      this.clearInput()
    },
    clearInput () {
      this.input = ''
    }
  }
}
</script>

<style lang="scss" scoped>
input:placeholder-shown + label.noInterests {
  display: none;
  transform: translateY(-4rem);
}
label {
  background: linear-gradient(#000 55%, #111827);
}
</style>
