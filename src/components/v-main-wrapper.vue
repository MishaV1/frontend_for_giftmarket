<template>
<div class="v-main-wrapper">
  <logo/>
  <criteria/>
  <sorter/>
  <catalog/>
</div>
</template>

<script>
import catalog from "./v-catalog"
import criteria from "./v-criteria"
import logo from "./v-logo"
import sorter from "./v-sorter"

export default {
  name: "v-main-wrapper",
  components: {
    catalog,
    criteria,
    sorter,
    logo
  }
}
</script>

<style scoped>
  .v-main-wrapper{
  }
</style>