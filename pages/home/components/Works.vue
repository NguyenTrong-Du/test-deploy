<template>
  <div class="works-section mb-240">
    <HeadingComponent title="WORKS" />
    <div class="works-description pc-only">
      HR、不動産、製薬、ECモール、Ad、NoCode、予約システム、CtoC、BtoB、AI…
      など、<br />多数の業界の、さまざまなWebシステム、モバイルアプリを開発しています。
    </div>
    <SliderBanner />
    <ButtonView />
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import SliderBanner from './SliderBanner.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Works',
  components: { HeadingComponent, ButtonView, SliderBanner },
}
</script>

<style>
.works-section {
  text-align: center;
}
.works-description {
  margin-bottom: 50px;
}
/*.works-description {
  max-width: 60%;
  margin: auto;
  font-size: 18px;
  line-height: 2.6667;
  font-weight: 600;
} */

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: left;
}
.swiper {
  width: 100%;
  /* height: 600px; */
  text-align: left;
}
.swiper .swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  background-color: transparent;
}
.swiper .swiper-slide .title {
  margin-bottom: 50px;
  font-weight: bold;
}
.swiper .swiper-slide .subtitle {
  margin-bottom: 50px;
}
.swiper .swiper-slide img {
  height: 650px;
  width: 100%;
}
.swiper .swiper-slide .text {
  max-width: 50%;
  line-height: 1.6;
}
.swiper-button-white:hover {
  color: #ff3800;
  transition: 0.3s;
}
</style>
