<template>
  <div class="hero">
    <div class="hero-content">
      <div class="container">
        <div>
          <h3
            class="sub-title aos-init aos-animate"
          >
            Technology Releted Consultancy
          </h3>
          <h2
            class="title aos-init aos-animate"
          >
            We bring great Ideas to life
          </h2>
          <p
            data-aos="fade-up"
          >
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </p>
          <ButtonView />
        </div>
        <div class="spring">
          <img src="../../../static/features-shape.png" />
        </div>
      </div>
      <CirclesAnimation />
    </div>
  </div>
</template>

<script>
import ButtonView from '~/components/ButtonView.vue'
import CirclesAnimation from '~/components/CirclesAnimation.vue'
export default {
  name: 'HeroContent',
  components: { ButtonView, CirclesAnimation },
}
</script>

<style>
.hero {
  position: relative;
  height: 100vh;
  padding: 80px 0;
  background-image: url(../../../static/bg-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.hero .container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.hero .container > div {
  width: 50%;
  overflow: hidden;
}
.hero .hero-content h3 {
  text-transform: uppercase;
  letter-spacing: 2px;
}
.hero .hero-content h2 {
  font-size: 72px;
  line-height: 92px;
  font-weight: 700;
  margin-top: 10px;
}
.hero .hero-content p {
  margin-top: 25px;
}
.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}
.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}
.spring img {
  transform: rotate(0);
  animation: springimg 25s linear infinite;
}
@keyframes springimg {
  from {
    transform: rotate(360deg);
  }
}
</style>
