<template>
  <div>
    <Hinode />
    <Vision />
    <Service />
    <Works />
    <Career />
    <Articles />
    <Activity />
  </div>
</template>

<script>
import Hinode from './components/Hinode.vue'
import Vision from './components/Vision.vue'
import Service from './components/Service.vue'
import Works from './components/Works.vue'
import Career from './components/Career.vue'
import Articles from './components/Articles.vue'
import Activity from './components/Activity.vue'

export default {
  components: {
    Hinode,
    Vision,
    Service,
    Works,
    Career,
    Articles,
    Activity,
  },
}
</script>

<style></style>
