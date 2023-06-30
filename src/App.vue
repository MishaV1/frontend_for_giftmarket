<template>
  <div>
    <Main_Wrapper/>
  </div>
</template>

<script>
import Main_Wrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    Main_Wrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
