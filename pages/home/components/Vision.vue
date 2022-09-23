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
    <div class="vision-list">
      <div class="vision-wrap">
        <div class="vision-item text-center">
          <div class="vision-banner">
            <div class="shape-1"></div>
            <div class="shape-2">
              <img src="../../../static/shape-2.png" alt="business" />
            </div>
            <div class="vision-icon">
              <img src="../../../static/service-4.png" alt="shape" />
            </div>
            <div class="vision-content">
              <h3 class="title">
                <a href="#"> Business</a>
              </h3>
              <p>
                We provide the most responsive and functional IT design for
                companies and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
        <div class="vision-item text-center">
          <div class="vision-banner">
            <div class="shape-1"></div>
            <div class="shape-2">
              <img src="../../../static/shape-2.png" alt="business" />
            </div>
            <div class="vision-icon">
              <img src="../../../static/service-3.png" alt="shape" />
            </div>
            <div class="vision-content">
              <h3 class="title">
                <a href="#"> Technology</a>
              </h3>
              <p>
                We provide the most responsive and functional IT design for
                companies and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
        <div class="vision-item text-center">
          <div class="vision-banner">
            <div class="shape-1"></div>
            <div class="shape-2">
              <img src="../../../static/shape-2.png" alt="business" />
            </div>
            <div class="vision-icon">
              <img src="../../../static/service-2.png" alt="shape" />
            </div>
            <div class="vision-content">
              <h3 class="title">
                <a href="#"> Creative</a>
              </h3>
              <p>
                We provide the most responsive and functional IT design for
                companies and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
// import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Vision',
  components: { HeadingComponent },
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
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.vision-bg video {
  width: 100%;
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
.vision-list {
  position: relative;
}
.vision-wrap {
  display: flex;
  flex-wrap: wrap;
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
}
.vision-item {
  max-width: 33.33%;
  flex: 0 0 auto;
  padding-right: 15px;
  padding-left: 15px;
}
.vision-item .vision-banner {
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 9%);
  padding: 50px 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.vision-item .vision-banner::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(148deg, #54d6eb 0%, #055fdd 100%);
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: all 0.3s linear;
  visibility: hidden;
}
.vision-item:hover .vision-banner::before {
  opacity: 1;
  visibility: visible;
}
.vision-item .vision-banner .shape-1 {
  width: 235px;
  height: 235px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: -80px;
  right: -80px;
  opacity: 0;
  transition: all 0.3s linear;
  visibility: hidden;
  z-index: -1;
}
.vision-item:hover .vision-banner .shape-1 {
  opacity: 1;
  visibility: visible;
}
.vision-item .vision-banner .shape-2 {
  position: absolute;
  right: -135px;
  bottom: 55px;
  opacity: 0;
  transition: all 0.3s linear;
  visibility: hidden;
  z-index: -1;
}
.vision-item:hover .vision-banner .shape-2 {
  opacity: 1;
  visibility: visible;
}
.vision-item .vision-banner .title {
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin-top: 12px;
}
.vision-item .vision-banner a {
  color: #4c4d56;
  transition: all 0.3s linear;
}
.vision-item .vision-banner p {
  font-size: 14px;
  line-height: 26px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: #4c4d56;
  margin-top: 20px;
  transition: all 0.3s linear;
}
.vision-item:hover .vision-banner a,
.vision-item:hover .vision-banner p {
  color: #fff;
}
</style>
