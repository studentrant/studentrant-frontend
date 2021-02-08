<template>
  <div
    class="min-h-screen flex items-center justify-center w-11/12 md:w-1/2 lg:w-1/4 mx-auto flex-col"
  >
    <img :src="rocketSvg" alt="rocket" class="ml-20" />
    <div class="flex flex-row justify-between py-6 w-full">
      <img :src="chatSvg" alt="chat" class="ml-14" />
      <img :src="sentSvg" alt="sent" />
    </div>
    <img :src="pencilSvg" alt="pencil" class="ml-8" />
    <div class="flex flex-row justify-between w-full">
      <img :src="messageSvg" alt="message" class="self-start -mt-2" />
      <img :src="exclamationSvg" alt="exclamation" class="mt-10 self-end" />
    </div>
    <div class="pt-16 space-y-2">
      <primary-button class="w-full">I am new here</primary-button>
      <primary-button class="w-full bg-black text-white"
        >I don&apos;t have anything better to do</primary-button
      >
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/ui/PrimaryBtn.vue'

export default {
  name: 'Welcome',
  components: {
    PrimaryButton
  },
  data () {
    return {
      rocketSvg: require('../assets/rocket.svg'),
      chatSvg: require('../assets/chat.svg'),
      sentSvg: require('../assets/sent.svg'),
      pencilSvg: require('../assets/pencil.svg'),
      messageSvg: require('../assets/message.svg'),
      exclamationSvg: require('../assets/exclamation.svg')
    }
  }
}
</script>
