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
            id="email"
            name="email"
            type="email"
            autocomplete="off"
            placeholder="Email"
            required
            class="appearance-none block w-full p-3 border border-transparent rounded-md bg-gray-900 transition-all duration-300 placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          <label for="email" class="absolute font-medium -top-3.5 ml-3">
            Email
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
      I&apos;m already a user?
      <a href="#" class="font-medium text-white hover:text-gray-100">
        Sign in
      </a>
    </div>
    <primary-button type="submit" class="w-full bg-white text-black"
      >Continue</primary-button
    >
  </form>
</template>

<script>
import PrimaryButton from '../ui/PrimaryBtn.vue'

export default {
  name: 'RegisterForm',
  components: {
    PrimaryButton
  }
}
</script>

<style scoped lang="scss">
input {
  /* --white-shadow: rgba(255, 255, 255, 1);
  --red-shadow: rgba(239, 68, 68, 1); */
  &:placeholder-shown + label {
    display: none;
    transform: translateY(-4rem);
  }
  /*
  &:valid {
    border-color: var(--white-shadow);
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--white-shadow) 0px 0px 0px 0px, var(--white-shadow);
  }

  &:invalid {
    border-color: var(--red-shadow);
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--red-shadow) 0px 0px 0px 0px, var(--red-shadow);
  } */
}

label {
  background: linear-gradient(#000 55%, #111827);
}
</style>
