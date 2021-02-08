<template>
  <div
    class="min-h-screen flex items-center pt-24 pb-4 w-11/12 md:w-1/2 lg:w-1/4 mx-auto flex-col"
  >
    <panel :steps="steps" stepName="regSteps" v-model="step"></panel>
    <h2 class="pt-6 text-center text-xl md:text-2xl font-bold text-white">
      {{headerText}}
    </h2>
    <register-form v-if="step === 1"></register-form>
    <profile-form v-else-if="step === 2"></profile-form>
    <validate-form v-else></validate-form>
  </div>
</template>

<script>
import Panel from '@/components/ui/Panel.vue'
import RegisterForm from '@/components/register/RegisterForm.vue'
import ProfileForm from '@/components/register/ProfileForm.vue'
import ValidateForm from '@/components/register/ValidateForm.vue'

export default {
  name: 'Register',
  components: {
    Panel,
    RegisterForm,
    ProfileForm,
    ValidateForm
  },
  data () {
    return {
      step: 1,
      steps: [{ value: 1 }, { value: 2 }, { value: 3 }]
    }
  },
  computed: {
    headerText () {
      switch (this.step) {
        case 1:
          return 'Create an Account'
        case 2:
          return 'Complete Profile'
        case 3:
        default:
          return 'Validate Registration'
      }
    }
  }
}
</script>
