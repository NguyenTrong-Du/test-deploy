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
</style>
