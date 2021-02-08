<template>
  <div
    class="min-h-screen flex pt-24 pb-4 items-center w-11/12 md:w-1/2 lg:w-1/4 mx-auto flex-col"
  >
    <div class="flex flex-row justify-between w-full">
    <img :src="rocketSvg" alt="rocket" class="transform -rotate-45" />
      <img :src="sentSvg" alt="sent" />
    </div>
    <hgroup>
      <h2 class="pt-2 text-center text-base md:text-xl font-bold text-white">
      Welcome Back
    </h2>
    <h3 class="text-center text-xs md:text-sm text-white">You obviously don&apos;t have anything better doing</h3>
    </hgroup>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data () {
    return {
      rocketSvg: require('../assets/rocket.svg'),
      sentSvg: require('../assets/sent.svg')
    }
  }
}
</script>
