<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './home/index.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Home },
})
</script>
