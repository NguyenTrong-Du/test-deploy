<template>
  <div>
    <Navbar />

    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: { Footer, Navbar },
}
</script>

<style>
body {
  background-color: #000;
  color: #fff;
  max-width: 100%;
  line-height: 1.6;
  font-family: 'noto-sans-cjk-jp', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
  animation: fadeIn 2s ease 0s 1 normal;
}
.container {
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
h1,
h2,
h3,
h4,
h5 {
  line-height: 1.3;
  font-weight: 700;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.mb-240 {
  margin-bottom: 240px;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
a,
button,
img,
input {
  transition: all 0.3s linear;
  outline: 0;
}
p {
  font-size: 18px;
}
.col-lg-3 {
  flex: 0 0 auto;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}
.col-lg-4 {
  flex: 0 0 auto;
  width: 33.33%;
  padding-left: 15px;
  padding-right: 15px;
}
.col-lg-6 {
  flex: 0 0 auto;
  width: 50%;
  padding-left: 15px;
  padding-right: 15px;
}
.banner-section {
  background-image: url(../static/page-banner.png);
  padding-top: 80px;
  min-height: 550px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  overflow: hidden;
  z-index: 1;
}
.banner-section h2 {
  font-size: 70px;
  display: inline-block;
  font-weight: 700;
  color: #ffffff;
  position: relative;
  z-index: 1;
}
.banner-section .circle {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-image: linear-gradient(-48deg, #54d6eb 0%, #035cdd 100%);
  opacity: 0.7;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.service-author-list {
  margin-top: 25px;
}
.service-author-list ul li {
  font-size: 16px;
  font-weight: 700;
  color: #090d2f;
  display: flex;
}
.service-author-list ul li span {
  color: #005de0;
  margin-right: 5px;
  font-weight: 700;
}
.service-author-list ul li:hover a {
  color: #005de0;
}

@media only screen and (max-width: 1360px) {
  .btn-more {
    margin-top: 50px;
  }
  .top-section-heading {
    margin-bottom: 30px;
    padding-bottom: 15px;
    font-size: 50px;
  }
}
</style>
