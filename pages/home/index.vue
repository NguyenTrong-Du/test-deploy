<template>
  <div>
    <HeroContent />
    <Vision />
    <Service />
    <Works />
    <Mission />
    <Activity />
  </div>
</template>

<script>
import HeroContent from './components/HeroContent.vue'
import Vision from './components/Vision.vue'
import Service from './components/Service.vue'
import Works from './components/Works.vue'
import Mission from './components/Mission.vue'
import Activity from './components/Activity.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HeroContent,
    Vision,
    Service,
    Works,
    Mission,
    Activity,
  },
}
</script>

<style></style>
