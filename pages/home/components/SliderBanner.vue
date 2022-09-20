<template>
  <swiper class="swiper" :options="swiperOption">
    <div
      class="parallax-bg"
      slot="parallax-bg"
      data-swiper-parallax="-23%"
    ></div>

    <swiper-slide v-for="(slide, index) in data" :key="index">
      <img :src="slide.src" alt="slide" />
      <div class="content">
        <!-- <div class="title" data-swiper-parallax="-100">Slide 4</div> -->
        <h3 class="subtitle" data-swiper-parallax="-240">
          {{ slide.Subtitle }}
        </h3>
        <div class="text" data-swiper-parallax="-360">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </div>
    </swiper-slide>
    <div
      class="swiper-pagination swiper-pagination-white"
      slot="pagination"
    ></div>
    <div
      class="swiper-button-prev swiper-button-white"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-next swiper-button-white"
      slot="button-next"
    ></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

export default {
  name: 'SliderBanner',
  title: 'Parallax',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      data: [
        {
          src: '/img-slider-1.jpg',
          Subtitle: 'slider 1',
        },
        {
          src: '/img-slider-2.jpg',
          Subtitle: 'slider 2',
        },
        {
          src: '/img-slider-3.jpg',
          Subtitle: 'slider 3',
        },
        {
          src: '/img-slider-4.jpg',
          Subtitle: 'slider 4',
        },
      ],
    }
  },
}
</script>

<style scoped>
.content {
  position: absolute;
  margin-left: 10%;
}
.content h3 {
  font-size: 40px;
}
</style>
