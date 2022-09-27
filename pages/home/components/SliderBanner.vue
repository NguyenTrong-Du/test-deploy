<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(slide, index) in data" :key="index">
        <img :src="slide.src" alt="slide" />
        <div class="content">
          <h3 class="subtitle" data-swiper-parallax="-240">
            {{ slide.Subtitle }}
          </h3>
          <div class="text" data-swiper-parallax="-360">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'BannerComponent',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        parallax: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
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
.example-3d {
  width: 100%;
  /* height: 550px; */
}
.example-3d .swiper {
  height: 100%;
  width: 100%;
}
.example-3d .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1070px;
  height: 550px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  background-color: #2c8dfb;
  background-position: center;
  background-size: cover;
  color: white;
  z-index: 1;
  overflow: hidden;
}
.example-3d .swiper-slide img {
  z-index: -1;
}
.example-3d .swiper-slide:hover img {
  transform: scale(1.1);
}
.example-3d .swiper-slide::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(180deg, #ffffff00 0%, #010f31 100%);
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 2;
  border-radius: 5px;
}
.example-3d .swiper-slide::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 5px;
}
</style>
