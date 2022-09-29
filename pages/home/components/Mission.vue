<template>
  <div class="mission-section">
    <div>
      <div class="container">
        <HeadingComponent title="MISSION" />
        <div class="mission-body">
          <div class="top-mission">
            <div class="mission-area">
              <div class="mission-lead">
                <h3>Your Trusted Partner For All IT Solutions</h3>
              </div>
              <div class="service-author-list">
                <div class="service-list">
                  <ul>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#"> Always strive with high fighting spirit</a>
                    </li>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#"> Unlimited</a>
                    </li>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#">
                        Respect each other, help share, achieve together</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <ButtonView />
            </div>
            <div class="mission-bg">
              <img src="../../../static/image-5.jpg" />
            </div>
          </div>
        </div>
      </div>
      <CirclesAnimation />
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
import CirclesAnimation from '~/components/CirclesAnimation.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Mission',
  components: { HeadingComponent, ButtonView, CirclesAnimation },
}
</script>

<style>
.mission-section {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background-image: url(/_nuxt/static/bg-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.top-mission {
  position: relative;
  display: flex;
  align-items: center;
}
.mission-bg {
  width: 50%;
  z-index: 0;
}
.mission-bg img {
  max-width: 100%;
}
.mission-area {
  position: relative;
  z-index: 1;
  padding: 0 15px;
  width: 50%;
}
.mission-lead {
  margin-bottom: 40px;
  font-size: 30px;
  line-height: 1.5;
  z-index: 1;
}
.mission-area .service-author-list ul li {
  color: #fff;
}
.mission-area .service-author-list ul li span {
  color: #feb302;
}
.mission-area .service-author-list ul li:hover a {
  color: #feb302;
}
</style>
