<template>
  <div class="works-section mb-240">
    <HeadingComponent title="WORKS" />
    <div class="works-description pc-only">
      HR、不動産、製薬、ECモール、Ad、NoCode、予約システム、CtoC、BtoB、AI…
      など、<br />多数の業界の、さまざまなWebシステム、モバイルアプリを開発しています。
    </div>
    <!-- <div>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
        ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
        ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
        ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
        ><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div> -->
    <ButtonView />
  </div>
</template>

<script>
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
// import 'swiper/css'

// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import './style.css'

// import required modules
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { Pagination, Navigation } from 'swiper'

import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Works',
  components: { HeadingComponent, ButtonView },
  // setup() {
  //   return {
  //     modules: [Pagination, Navigation],
  //   }
  // },
}
</script>

<style>
.works-section {
  text-align: center;
}
.works-description {
  max-width: 60%;
  margin: auto;
  font-size: 18px;
  line-height: 2.6667;
  font-weight: 600;
}
</style>
