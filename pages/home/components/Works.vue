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
.works-section .parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: left;
}
.works-section .swiper-slide::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(180deg, #ffffff00 0%, #010f31 100%);
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 2;
}
.works-section .swiper {
  width: 100%;
  text-align: left;
}
.works-section .swiper .swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  background-color: transparent;
}
.works-section .swiper .swiper-slide .title {
  margin-bottom: 50px;
  font-weight: bold;
}
.works-section .swiper .swiper-slide .subtitle {
  margin-bottom: 50px;
}
.works-section .swiper .swiper-slide img {
  height: 650px;
  width: 100%;
}
.works-section .swiper .swiper-slide .content {
  z-index: 5;
}
.works-section .swiper .swiper-slide .text {
  max-width: 50%;
  line-height: 1.6;
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
.swiper:hover .swiper-button-next {
  right: 50px;
}
.swiper:hover .swiper-button-prev {
  left: 50px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
  font-weight: 700;
}
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  opacity: 0.9;
}
</style>
