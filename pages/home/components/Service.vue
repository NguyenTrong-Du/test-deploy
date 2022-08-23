<template>
  <div class="service-section">
    <HeadingComponent title="SERVICE" />
    <div class="service-body">
      <div>
        <div class="service-map">
          <img
            class="large ls-is-cached lazyloaded"
            src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/top/bg_service_map.png"
            width="960"
            height="1000"
            alt=""
            loading="lazy"
            data-src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/top/bg_service_map.png"
            decoding="async"
          />
        </div>
        <div class="service-text-area">
          <div class="service-bases">
            <BannerComponent title="TOKYO" />
            <BannerComponent title="HANOI" />
            <BannerComponent title="DANANG" />
            <BannerComponent title="SINGAPORE" />
            <BannerComponent title="SRI LANKA" />
            <BannerComponent title="NEW YORK" />
          </div>
          <div class="service-text">
            日本、ベトナム、スリランカ、シンガポールに計150名のシステム開発チームを有し、「日本人フルマネージド型」オフショア
            アジャイル開発を提供します。
          </div>
          <ButtonView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import BannerComponent from './BannerComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Service',
  components: { HeadingComponent, BannerComponent, ButtonView },
}
</script>

<style>
.service-body {
  position: relative;
}
.service-body > div {
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 25px;
}
.service-map {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  top: -206px;
  left: 0;
  max-width: 100%;
}
.service-text-area {
  position: relative;
  z-index: 1;
  background-color: #333a44;
  width: 62.5%;
  margin-left: 37.5%;
  padding: 80px;
}
.service-bases {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
