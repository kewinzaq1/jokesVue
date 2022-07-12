<template>
  <CBox mx-auto>
    <CAlert v-if="error" status="error">
      <CAlertIcon/>
      <CAlertTitle>Oops</CAlertTitle>
      <CAlertDescription>{{ error.message }}</CAlertDescription>
      <CCloseButton position="absolute" right="8px" top="8px"/>
    </CAlert>
    <CCircularProgress v-if="!categories" is-indeterminate mt="4"/>
    <CSelect
      v-if="categories" placeholder="Set category" width="max-content" mt="1rem" z-index="0"
      @change="changeCategory">
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </CSelect>
  </CBox>
</template>

<script>
import {
  CSelect,
  CBox,
  CCircularProgress,
  CAlert,
  CAlertIcon,
  CAlertTitle,
  CAlertDescription,
  CCloseButton
} from "@chakra-ui/vue";


export default {
  name: "SelectComp",
  components: {
    CSelect, CBox, CCircularProgress, CAlert, CAlertIcon, CAlertTitle, CAlertDescription, CCloseButton
  },
  data() {
    return {
      selected: '',
      error: null
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories
    }
  },
  mounted() {
    this.$store.dispatch('fetchCategories')
  },
  methods: {
    changeCategory(category) {
      this.$store.commit('setCategory', category)
      this.$store.dispatch('fetchJoke')
    }
  }
}
</script>


