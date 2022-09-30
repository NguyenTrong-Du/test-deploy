<template>
  <div class="vision-section">
    <div>
      <HeadingComponent title="VISION" />
      <div class="pricing-shape-1">
        <img src="../../../static/pricing-shape-1.png" alt="pricing" />
      </div>
      <div class="pricing-shape-2">
        <img src="../../../static/pricing-shape-1.png" alt="pricing" />
      </div>
      <div class="pricing-shape-3">
        <img src="../../../static/pricing-shape-1.png" alt="pricing" />
      </div>
      <div class="pricing-shape-4">
        <img src="../../../static/pricing-shape-1.png" alt="pricing" />
      </div>
      <div class="pricing-shape-5">
        <img src="../../../static/pricing-shape-1.png" alt="pricing" />
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
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Vision',
  components: { HeadingComponent },
}
</script>

<style>
.vision-section {
  padding: 60px 0;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(../../../static/bg-2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
.pricing-shape-1 {
  position: absolute;
  top: 10%;
  right: 10%;
  -webkit-transform: translateY(-10%) translateX(-10%);
  transform: translateY(-10%) translateX(-10%);
  -webkit-animation: animationFramesOne 10s infinite linear;
  animation: animationFramesOne 10s infinite linear;
}
@keyframes animationFramesOne {
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    -webkit-transform: translate(73px, -1px) rotate(36deg);
    transform: translate(73px, -1px) rotate(36deg);
  }
  40% {
    -webkit-transform: translate(141px, 72px) rotate(72deg);
    transform: translate(141px, 72px) rotate(72deg);
  }
  60% {
    -webkit-transform: translate(83px, 122px) rotate(108deg);
    transform: translate(83px, 122px) rotate(108deg);
  }
  80% {
    -webkit-transform: translate(-40px, 72px) rotate(144deg);
    transform: translate(-40px, 72px) rotate(144deg);
  }
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
}
.pricing-shape-2 {
  position: absolute;
  top: 85%;
  left: 10%;
  -webkit-animation: animationFramesTwo 3s ease-in-out alternate infinite;
  animation: animationFramesTwo 3s ease-in-out alternate infinite;
}
@keyframes animationFramesTwo {
  from {
    left: 10%;
    top: 85%;
  }
  to {
    transform: translateY(100%) translateX(0%);
  }
}
.pricing-shape-3 {
  position: absolute;
  top: 15%;
  left: 20%;
}
.pricing-shape-4 {
  left: 60%;
  bottom: 30%;
  position: absolute;
}
.pricing-shape-5 {
  right: 13%;
  bottom: 30%;
  position: absolute;
}
</style>
