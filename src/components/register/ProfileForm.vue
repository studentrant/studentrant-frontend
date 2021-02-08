<template>
  <form class="w-full sm:max-w-md pt-16">
    <section class="space-y-12">
      <div class="text-left">
        <div class="mt-1 relative text-white text-sm">
          <search-select
            v-model="selectedCountry"
            :options="countries"
            :filter-function="applySearchFilter"
          ></search-select>
        </div>
      </div>
      <div class="text-left">
        <div class="mt-1 relative text-white text-sm">
          <tag-input v-model="tags"></tag-input>
        </div>
      </div>
    </section>
    <primary-button type="submit" :class="['w-full bg-white text-black', buttonClasses]"
      >Continue</primary-button
    >
  </form>
</template>

<script>
import PrimaryButton from '../ui/PrimaryBtn.vue'
import SearchSelect from '../ui/SearchSelect.vue'
import TagInput from '../ui/TagInput.vue'

export default {
  name: 'ProfileForm',
  components: {
    PrimaryButton,
    SearchSelect,
    TagInput
  },
  data () {
    return {
      selectedCountry: null,
      search: '',
      countries: [
        'Anthrax',
        'Dark Angel',
        'Death Angel',
        'Destruction',
        'Exodus',
        'Flotsam and Jetsam',
        'Kreator',
        'Megadeth',
        'Metallica',
        'Overkill',
        'Sepultura',
        'Slayer',
        'Testament'
      ],
      tags: []
    }
  },
  methods: {
    applySearchFilter (search, countries) {
      return countries.filter((country) =>
        country.toLowerCase().startsWith(search.toLowerCase())
      )
    }
  },
  computed: {
    buttonClasses () {
      return {
        'mt-10': this.tags.length,
        'mt-20': !this.tags.length
      }
    }
  }
}
</script>
