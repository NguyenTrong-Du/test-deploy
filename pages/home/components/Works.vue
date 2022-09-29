<template>
  <div class="works-section">
    <div>
      <HeadingComponent title="WORKS" />
      <div class="works-description pc-only">
        We are proud team of great project
      </div>
      <SliderBanner />
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import SliderBanner from './SliderBanner.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Works',
  components: { HeadingComponent, SliderBanner },
}
</script>

<style>
.works-section {
  text-align: center;
  padding: 80px 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(../../../static/10.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.works-section > div {
  position: relative;
  width: 100%;
}
.works-description {
  margin-bottom: 50px;
  font-size: 20px;
}
.works-section .swiper-slide img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.works-section .content {
  z-index: 3;
  max-width: 80%;
}
.works-section .content h3 {
  font-size: 30px;
  margin-bottom: 30px;
}
.swiper .swiper-button-white {
  width: 60px;
  height: 60px;
  line-height: 60px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 5px 57px 0px rgb(0 0 0 / 15%);
  color: #005de0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear;
}
.swiper:hover .swiper-button-white {
  opacity: 1;
  visibility: visible;
}
.swiper .swiper-button-white:hover {
  color: #ffffff;
  background: #005de0;
}
.swiper .swiper-button-next {
  right: 16%;
}
.swiper .swiper-button-prev {
  left: 16%;
}
.swiper:hover .swiper-button-next {
  right: 20%;
}
.swiper:hover .swiper-button-prev {
  left: 20%;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
  font-weight: 700;
}
</style>
