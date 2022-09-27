<template>
  <div class="service-section">
    <div class="container">
      <HeadingComponent title="SERVICE" />
      <div class="service-banner">
        <div class="col-lg-4">
          <div class="services-item">
            <div class="services-image">
              <a href="#"
                ><img src="../../../static/services-1.jpg" alt="image"
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
                ><img src="../../../static/services-2.jpg" alt="image"
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
                ><img src="../../../static/services-3.jpg" alt="image"
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

        <!-- <div class="col-lg-3">
          <div class="services-item">
            <div class="services-image">
              <a href="#"
                ><img src="../../../static/services-4.jpg" alt="image"
              /></a>
            </div>
            <div class="services-content">
              <h3>
                <a href="#">Analytic Solutions</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
              </p>
              <a href="#" class="services-btn">View More</a>
            </div>
          </div>
        </div> -->
      </div>
      <ButtonView />
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Service',
  components: { HeadingComponent, ButtonView },
}
</script>

<style>
.service-section {
  /* height: 100vh; */
  padding: 100px 0;
  display: flex;
  align-items: center;
  background-image: url(../../../static/bg-2.png);
}
.service-banner {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.service-banner .services-item {
  background-color: #2e2141;
  padding: 10px;
  border-radius: 15px;
  position: relative;
}
.service-banner .services-item .services-image {
  overflow: hidden;
  border-radius: 15px;
}
.service-banner .services-item .services-image a {
  display: block;
}
.service-banner .services-item .services-image a img {
  border-radius: 15px;
}
.service-banner .services-item:hover .services-image a img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.7;
}
.service-banner .services-item .services-content {
  padding: 30px 15px 20px;
}
.service-banner .services-item .services-content h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}
.service-banner .services-item:hover .services-content h3 {
  color: #feb302;
}
.service-banner .services-item .services-content p {
  color: #cdc4d9;
  margin-bottom: 15px;
}
.service-banner .services-item .services-content .services-btn {
  background: radial-gradient(
    circle,
    #feb302,
    #f8c600,
    #eed900,
    #e0ec00,
    #cdff05
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  margin-top: 20px;
  position: relative;
}
.service-banner .services-item:hover .services-content .services-btn {
  padding-left: 20px;
}
.service-banner .services-item .services-content .services-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  width: 15px;
  height: 1.5px;
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  background: radial-gradient(
    circle,
    #feb302,
    #f8c600,
    #eed900,
    #e0ec00,
    #cdff05
  );
}
.service-banner .services-item:hover .services-content .services-btn::before {
  opacity: 1;
  visibility: visible;
}
.service-section .btn-more {
  display: block;
  margin: 60px auto;
}
</style>
