<template>
  <div class="home-service">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="item-service">
          <h3>title 1</h3>
          <p>Subtitle</p>
          <div class="text">
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
      <swiper-slide
        ><div class="item-service">
          <h3>title 2</h3>
          <p>Subtitle</p>
          <div class="text">
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
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="item-service">
          <h3>title 3</h3>
          <p>Subtitle</p>
          <div class="text">
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
        </div></swiper-slide
      >
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>
        <div>
          <h3>BOARD MEMBER</h3>
          <ul>
            <li>
              <a><img src="" alt="Board Menber" /></a>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HomeService',
  title: 'Mousewheel control',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'a',
        },
      },
    }
  },
}
</script>

<style scoped>
.home-service .swiper-container {
  height: 100vh;
}
.home-service .swiper {
  transition: all 0.3s;
}
.home-service .swiper-slide {
  height: 100vh;
  display: flex;
  align-items: center;
  max-width: 1330px;
  margin: auto;
}
.home-service h3 {
  margin-bottom: 60px;
}
.home-service p {
  margin-bottom: 60px;
}
.swiper-pagination-bullest {
  width: 16px !important;
  height: 16px !important;
}
.a {
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
  background: #000;
  opacity: 0.2;
}
</style>
