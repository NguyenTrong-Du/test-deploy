<template>
  <diV>
    <Home />
    <!-- <HomeService />
    <HomeWorks /> -->
  </diV>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './home/index.vue'
// import ServiceIndex from './homeservice/index.vue'
// import HomeWorks from './homeworks/index.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Home },
})
</script>
