<template>
  <div class="banner-city" data-city-initial="T">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  props: {
    title: '',
  },
}
</script>

<style>
.banner-city {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 calc(33.333% - 40px);
  flex: 0 0 calc(33.333% - 40px);
  min-width: 160px;
  height: 160px;
  margin-bottom: 80px;
  padding-top: calc(33.333% - 40px);
  font-size: 24px;
  position: relative;
  background-color: #474e57;
  font-family: atten-new, sans-serif;
}
.banner-city::before {
  position: absolute;
  top: 55%;
  left: 50%;
  content: attr(data-city-initial);
  color: #333a44;
  font-size: 135px;
  font-family: bodoni-urw, serif;
  font-weight: 300;
  line-height: 1;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
}
.banner-city span {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 300;
  letter-spacing: 0.1em;
  z-index: 2;
}
</style>
