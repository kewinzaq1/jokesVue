<template>
  <JokeWrapper/>
</template>

<script lang="js">
import
  JokeWrapper
  from '~/components/JokeWrapper';

export default {
  name: 'IndexPage',
  components: {JokeWrapper},
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {}
  },
}
</script>
