<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="section-heading">
    <h2 class="top-section-heading">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Heading',
  props: {
    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-type-constructor
    title: '',
  },
}
</script>

<style>
.section-heading {
  position: relative;
  z-index: 1;
}
.top-section-heading {
  margin-bottom: 60px;
  padding-bottom: 30px;
  font-size: 68px;
  letter-spacing: 0.3em;
  position: relative;
  text-align: center;
}
.top-section-heading:after {
  content: '';
  width: 100px;
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 1px;
  background-color: #fff;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
</style>
