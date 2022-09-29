<template>
  <div class="home-service">
    <div class="banner-section">
      <div class="container">
        <div><h2>Service</h2></div>
        <div class="circle"></div>
      </div>
    </div>
    <div class="service-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="service-thumb-wrap">
              <div class="service-thumb-big">
                <div>
                  <img src="../../static/service-2.jpg" alt="service" />
                </div>
              </div>
              <div class="service-thumb-big">
                <div>
                  <img src="../../static/service-2.jpg" alt="service" />
                </div>
              </div>
              <div class="service-thumb-big">
                <div>
                  <img src="../../static/service-2.jpg" alt="service" />
                </div>
              </div>
              <div class="service-thumb-big">
                <div>
                  <img src="../../static/service-2.jpg" alt="service" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-content">
              <div class="section-title">
                <h2 class="title">
                  We specialise in helping our customers digitise their business
                </h2>
              </div>
              <p>
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>
              <div class="service-author-list">
                <div class="service-list">
                  <ul>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#">Solving complex problems</a>
                    </li>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#">We guarantee trusted service.</a>
                    </li>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#"> Experts in technology fields</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-banner">
      <div class="container">
        <div class="service-title">
          <h3>We Provide the Best Quality Services</h3>
          <p>
            We are technology solutions providing company all over the world
            doing over 40 years. lorem ipsum dolor sit amet.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="services-item">
              <div class="services-image">
                <a href="#"
                  ><img src="../../static/services-1.jpg" alt="image"
                /></a>
              </div>
              <div class="services-content">
                <h3>
                  <a href="#">Software Development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <a href="#" class="services-btn">View More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="services-item">
              <div class="services-image">
                <a href="#"
                  ><img src="../../static/services-2.jpg" alt="image"
                /></a>
              </div>
              <div class="services-content">
                <h3>
                  <a href="#">App Development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <a href="#" class="services-btn">View More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="services-item">
              <div class="services-image">
                <a href="#"
                  ><img src="../../static/services-3.jpg" alt="image"
                /></a>
              </div>
              <div class="services-content">
                <h3>
                  <a href="#">Web Development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <a href="#" class="services-btn">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CirclesAnimation />
    </div>
  </div>
</template>

<script>
import CirclesAnimation from '~/components/CirclesAnimation.vue'
export default {
  name: 'HomeService',
  components: { CirclesAnimation },
}
</script>

<style scoped>
.service-wrap {
  background: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  color: #333;
}
.service-wrap .row {
  align-items: center;
}
.service-thumb-wrap {
  display: flex;
  flex-wrap: wrap;
}
.service-thumb-wrap .service-thumb-big {
  width: 50%;
  padding: 2px;
}
.service-thumb-wrap .service-thumb-big:hover img {
  transform: scale(1.2);
}
.service-thumb-wrap .service-thumb-big > div {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}
.service-thumb-wrap .service-thumb-big > div::after {
  content: '';
  background: #000;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  visibility: hidden;
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.service-thumb-wrap .service-thumb-big:hover > div::after {
  opacity: 0.7;
  visibility: visible;
}
.service-wrap .section-title .title {
  font-size: 40px;
}
.service-wrap .service-content p {
  font-size: 16px;
  color: #4c4d56;
  margin-top: 25px;
}
.service-wrap .service-author-list {
  margin-top: 25px;
}
.service-wrap .service-author-list ul li {
  font-size: 16px;
  font-weight: 700;
  color: #090d2f;
  display: flex;
}
.service-wrap .service-author-list ul li span {
  color: #005de0;
  margin-right: 5px;
  font-weight: 700;
}
.service-wrap .service-author-list ul li:hover a {
  color: #005de0;
}
.home-service .service-banner {
}
.home-service .service-banner {
  padding: 80px 0;
  position: relative;
  background-image: url(../../static/bg-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.home-service .service-banner .service-title {
  max-width: 630px;
  margin: 0 auto 45px;
  text-align: center;
  position: relative;
}
.home-service .service-banner .service-title h3 {
  font-size: 42px;
  margin-bottom: 30px;
}
.home-service .service-banner p {
}
/* .home-service .service-banner .area {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
} */
</style>
