<template>
  <on-click-outside :do="close">
    <div class="relative">
      <button
        ref="button"
        @click="open"
        type="button"
        :class="{ 'ring-1 ring-white': isOpen }"
        class="appearance-none text-left block w-full p-3 border border-transparent rounded-md bg-gray-900 transition-all duration-300 text-white focus:outline-none focus:ring-1 focus:ring-white"
      >
        <span v-if="modelValue !== null">{{ modelValue }}</span>
        <span v-else>{{placeholderText}}</span>
      </button>
      <label v-if="isOpen || modelValue" for="selectedCountry" class="absolute font-medium -top-3.5 ml-3">
        Country
      </label>
      <div
        ref="dropdown"
        v-show="isOpen"
        class="absolute mt-1 mb-3 inset-x-0 bg-gray-900 p-2 rounded z-50"
      >
        <input
          class="block mb-2 w-full py-2 px-3 rounded bg-white text-black focus:outline-none"
          v-model="search"
          ref="search"
          @keydown.esc="close"
          @keydown.up="highlightPrev"
          @keydown.down="highlightNext"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent
        />
        <ul
          ref="options"
          v-show="filteredOptions.length > 0"
          class="list-none p-0 relative overflow-y-auto max-h-56"
        >
          <li
            class="py-2 px-3 text-white cursor-pointer rounded select-none hover:bg-gray-300"
            v-for="(option, i) in filteredOptions"
            :key="option"
            @click="select(option, i)"
            :class="{ 'bg-blue-500 hover:bg-blue-500': i === highlightedIndex }"
          >
            {{ option }}
          </li>
        </ul>
        <div v-show="filteredOptions.length === 0" class="py-2 px-3 text-gray-300">
          No results found for "{{ search }}"
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from './OnClickOutside.vue'
import Popper from 'popper.js'

export default {
  components: {
    OnClickOutside
  },
  props: ['modelValue', 'options', 'filterFunction'],
  emits: ['update:modelValue'],
  data () {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0
    }
  },
  beforeUnmount () {
    if (this.popper) this.popper.destroy()
  },
  computed: {
    filteredOptions () {
      return this.filterFunction(this.search, this.options)
    },
    placeholderText () {
      return this.isOpen ? 'Select a country...' : 'Country'
    }
  },
  methods: {
    open () {
      if (this.isOpen) {
        return
      }
      this.isOpen = true
      this.$nextTick(() => {
        this.setupPopper()
        this.$refs.search.focus()
        this.scrollToHighlighted()
      })
    },
    setupPopper () {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
          placement: 'bottom'
        })
      } else {
        this.popper.scheduleUpdate()
      }
    },
    close () {
      if (!this.isOpen) {
        return
      }
      this.isOpen = false
      this.$refs.button.focus()
    },
    select (option, i) {
      this.$emit('update:modelValue', option)
      this.search = ''
      this.highlightedIndex = i
      this.close()
    },
    selectHighlighted () {
      this.select(this.filteredOptions[this.highlightedIndex], this.highlightedIndex)
    },
    scrollToHighlighted () {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest'
      })
    },
    highlight (index) {
      this.highlightedIndex = index

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0
      }

      this.scrollToHighlighted()
    },
    highlightPrev () {
      this.highlight(this.highlightedIndex - 1)
    },
    highlightNext () {
      this.highlight(this.highlightedIndex + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  background: linear-gradient(#000 55%, #111827);
}
</style>
