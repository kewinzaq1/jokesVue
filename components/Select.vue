<template>
  <div>
    <CSelect placeholder="Category" width="max-content" mt="1rem">
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </CSelect>
  </div>
</template>

<script>
import {CSelect} from "@chakra-ui/vue";
import axios from "axios";


export default {
  name: "SelectComp",
  components: {
    CSelect
  },
  computed: {
    categories() {
      return this.$store.state.categories
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {
        const data = await axios.get(
          'https://api.chucknorris.io/jokes/categories'
        )
        console.log(data)
        return this.$store.commit('setCategories', data.data)
      } catch (e) {
        console.log(e)
      }
    },
  }
}
</script>

<style scoped>

</style>
