<template>
  <img :src="shieldSvg" alt="shield" class="mt-16 mb-14" />
  <div class="relative w-11/12 flex justify-evenly items-center">
    <input
      id="t_and_c"
      name="t_and_c"
      type="checkbox"
      class="hidden text-white"
    />
    <span class="h-3 w-3 focus:ring-primary border border-white rounded-sm"></span>
    <label for="t_and_c" class="block text-xs text-white">
      I agree with the <strong class="text-sm">Terms &amp; Conditions</strong>
    </label>
  </div>
  <primary-button class="mt-20">I am ready to be bored</primary-button>
</template>

<script>
import PrimaryButton from '../ui/PrimaryBtn.vue'

export default {
  name: 'ValidateForm',
  components: {
    PrimaryButton
  },
  data () {
    return {
      shieldSvg: require('../../assets/shield.svg')
    }
  }
}
</script>
