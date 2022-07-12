<template>
  <CBox v-if="currentCategory" mt="4">
    <CButton mb="3" variant-color="blue" variant="solid" @click="open">Show Joke</CButton>
    <CModal
      :is-open="isOpen"
      :on-close="close"
      is-centered
      size="sm"
    >
      <CModalContent
        ref="content"
      >
        <CModalHeader>This is your joke</CModalHeader>
        <CModalCloseButton/>
        <CModalBody>
          {{ joke }}
        </CModalBody>
        <CModalFooter>
          <CButton variant-color="blue" mr="3" @click="newJoke">
            New joke
          </CButton>
          <CButton @click="close">Cancel</CButton>
        </CModalFooter>
      </CModalContent>
      <CModalOverlay/>
    </CModal>
  </CBox>
</template>

<script>
import {
  CBox,
  CModal,
  CModalOverlay,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CButton
} from "@chakra-ui/vue";


export default {
  name: "JokeModalComp",
  components: {
    CBox,
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CButton
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    currentCategory() {
      return this.$store.getters.getCurrentCategory
    },
    joke() {
      return this.$store.getters.getJoke
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    newJoke() {
      this.$store.dispatch('fetchJoke')
    }
  }
}
</script>
