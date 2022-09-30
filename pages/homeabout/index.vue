<template>
  <div class="home-about">
    <div class="banner-section">
      <div class="container">
        <div><h2>About</h2></div>
        <div class="circle"></div>
      </div>
    </div>
    <div class="about-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-thumb-wrap">
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-wrap about-menber">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content">
              <h3>TEAM MEMBER</h3>
              <div class="section-title">
                <h2 class="title">Our Expert IT Consultants</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitre sed diam
                non umy eirmod tempor invidunt ut labore.
              </p>
              <div class="service-author-list">
                <div class="service-list">
                  <ul>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#"> Business</a>
                    </li>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#"> Technology</a>
                    </li>
                    <li>
                      <span class="material-icons"> done </span>
                      <a href="#"> Creative</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-thumb-wrap">
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
              <div class="about-thumb-big">
                <div>
                  <img src="../../static/image-5.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout',
}
</script>

<style scoped>
.about-wrap {
  background: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  color: #333;
}
.about-wrap .row {
  align-items: center;
}
.about-thumb-wrap {
  display: flex;
  flex-wrap: wrap;
}
.about-thumb-wrap .about-thumb-big {
  width: 50%;
  padding: 2px;
}
.about-thumb-wrap .about-thumb-big:hover img {
  transform: scale(1.2);
}
.about-thumb-wrap .about-thumb-big > div {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}
.about-thumb-wrap .about-thumb-big > div::after {
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
.about-thumb-wrap .about-thumb-big:hover > div::after {
  opacity: 0.7;
  visibility: visible;
}
.about-wrap .section-title .title {
  font-size: 40px;
}
.about-wrap .about-content p {
  font-size: 16px;
  color: #4c4d56;
  margin-top: 25px;
}
.about-menber {
  background-color: #f5f5f5;
}
.about-menber h3 {
  color: #feb302;
}
</style>
