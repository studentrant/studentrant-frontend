<template>
  <form class="w-full sm:max-w-md pt-16">
    <section class="space-y-12">
      <div class="text-left">
        <div class="mt-1 relative text-white text-sm">
          <input
            id="username"
            name="username"
            type="text"
            autocomplete="off"
            placeholder="Username"
            required
            class="appearance-none block w-full p-3 border border-transparent rounded-md bg-gray-900 transition-all duration-300 placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          <label for="username" class="absolute font-medium -top-3.5 ml-3">
            Username
          </label>
        </div>
      </div>
      <div class="text-left">
        <div class="mt-1 relative text-white text-sm">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="off"
            placeholder="Password"
            required
            class="appearance-none block w-full p-3 border border-transparent rounded-md bg-gray-900 transition-all duration-300 placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          <label for="password" class="absolute font-medium -top-3.5 ml-3">
            Password
          </label>
        </div>
      </div>
    </section>
    <div class="pt-3 pb-16 text-xs text-gray-300 text-right">
      Don&apos;t have an account?
      <a href="#" class="font-medium text-white hover:text-gray-100">
        Sign up
      </a>
    </div>
    <primary-button type="submit" class="w-full"
      >Log in</primary-button
    >
  </form>
</template>

<script>
import PrimaryButton from '../ui/PrimaryBtn.vue'

export default {
  name: 'LoginForm',
  components: {
    PrimaryButton
  }
}
</script>

<style scoped lang="scss">
input {
  &:placeholder-shown + label {
    display: none;
    transform: translateY(-4rem);
  }
}

label {
  background: linear-gradient(#000 55%, #111827);
}
</style>
