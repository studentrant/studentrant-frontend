<template>
  <li class="relative md:flex-1 md:flex">
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      @click="changeStep(value)"
      @keydown.space="changeStep(value)"
      class="group items-center w-full hidden"
    />
    <label
      :for="id"
      class="px-2 md:px-3 py-4 flex items-center font-medium cursor-pointer"
    >
      <span
        :class="[
          'flex-shrink-0 w-8 h-8 flex items-center border border-white justify-center rounded-md',
          classes,
        ]"
      >
        <svg
          class="w-6 h-6 text-white"
          x-description="Heroicon name: check"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          v-if="visited"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span v-else>
          {{value}}
        </span>
      </span>
    </label>
  </li>
</template>

<script lang="js">
export default {
  name: 'PanelStep',
  props: ['id', 'name', 'value', 'changeStep', 'active', 'disabled'],
  computed: {
    visited () {
      return !this.active && !this.disabled
    },
    classes () {
      return {
        'bg-white text-black hover:bg-black hover:text-white': this.active,
        'bg-primary text-white': this.visited,
        'text-white hover:bg-gray-300': this.disabled
      }
    }
  }
}
</script>
