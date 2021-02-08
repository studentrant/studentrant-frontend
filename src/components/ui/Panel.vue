<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8">
      <nav aria-label="Progress">
        <ol class="flex">
          <panel-step
            v-for="step in steps"
            :key="stepName + step.value"
            :id="stepName + step.value"
            :name="stepName"
            :value="step.value"
            :active="this.modelValue === step.value"
            :disabled="step.value > this.modelValue"
            :change-step="changeStep"
          ></panel-step>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script lang="js">
import PanelStep from './PanelStep.vue'

export default {
  name: 'Panel',
  components: {
    PanelStep
  },
  props: ['steps', 'stepName', 'modelValue'],
  emits: ['update:modelValue'],
  methods: {
    changeStep (newStep) {
      this.$emit('update:modelValue', newStep)
    }
  }
}
</script>
