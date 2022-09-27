<template>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <h3
          class="sub-title aos-init aos-animate"
          data-aos-delay="600"
          data-aos="fade-up"
        >
          Technology Releted Consultancy
        </h3>
        <h2
          class="title aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          We bring great Ideas to life
        </h2>
        <p data-aos="fade-up" data-aos-delay="800" class="aos-init aos-animate">
          We provide the most responsive and functional IT design for companies
          and businesses worldwide.
        </p>
        <ButtonView />
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonView from '~/components/ButtonView.vue'
export default {
  name: 'HeroContent',
  components: { ButtonView },
}
</script>

<style>
.hero {
  position: relative;
  height: 100vh;
  /* background: linear-gradient(
    283deg,
    rgb(31, 23, 47) 0%,
    rgb(62, 9, 40) 45%,
    rgb(17, 58, 72) 100%
  ); */
  background-image: url(../../../static/bg-1.png);
}
.hero .container {
  display: flex;
  align-items: center;
}
.hero .hero-content h3 {
  line-height: 30px;
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
.area {
  /* background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8); */
  width: 100%;
  height: 100vh;
}
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}
.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}
.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}
.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}
.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}
.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}
.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}
.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}
.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}
.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}
@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
