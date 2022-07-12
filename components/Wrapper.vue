<template>
  <div>
    <CFlex
      display="flex" align-items="center" justify-content="center" flex-direction="column" height="100vh"
      width="50%" mx="auto">
      <CHeading as="h1" font-size='3rem' font-weight="400">Jokes</CHeading>
      <CText font-size="1.25rem">Choose category and display random joke</CText>
      <Select/>
      <Modal/>
    </CFlex>
  </div>
</template>

<script>
import {CFlex, CHeading, CText} from "@chakra-ui/vue";


export default {
  name: "JokeWrapperComp",
  components: {
    CText, CFlex, CHeading
  }
}
</script>


