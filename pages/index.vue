<template>
  <JokeWrapper/>
</template>

<script lang="js">
import
  JokeWrapper
  from '~/components/Wrapper';

export default {
  name: 'IndexPage',
  components: {JokeWrapper},
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {}
  },
}
</script>
