<template>
  <div class="vision-section mb-240">
    <HeadingComponent title="VISION" />
    <div class="vision-bg">
      <video playsinline="" autoplay="" muted="" loop="">
        <source
          src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/top/bg_movie.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="vision-banner">
      <div class="vision-content">
        <div class="top-vision-text">
          世界中のITタレントプールと<br /><span class="invert"
            >いつでも、最適に</span
          >繋がれる世界
        </div>
        <div class="bottom-vision-text">
          <p class="text">
            アイディアを形にする時、<br />人手の問題に頭を悩ませていては何も始められません。<br /><br />
            私たちは今以上に外国籍人材と共に、<br />21世紀の日本を生きていくことになり、<br />人材とプロジェクトの最適化を追求していきます。
          </p>
          <ButtonView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Vision',
  components: { HeadingComponent, ButtonView },
}
</script>

<style>
.vision-section {
  margin-bottom: 120px;
  padding: 160px 0;
  overflow: hidden;
  position: relative;
}
.vision-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* opacity: 0;
    -webkit-animation: fadeIn 1s ease 0s forwards;
    animation: fadeIn 1s ease 0s forwards; */
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.vision-bg video {
  width: auto;
  height: 100%;
}
.vision-bg::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333a44;
  opacity: 0.9;
}
.vision-banner {
  position: relative;
}
.vision-content {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 25px;
  text-align: center;
}
.top-vision-text {
  margin-bottom: 60px;
  font-size: 30px;
  line-height: 2;
  font-weight: 700;
}
.bottom-vision-text .text {
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.8;
}
</style>
