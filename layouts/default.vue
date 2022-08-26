<template>
  <v-app class="app">
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default { components: { Footer, Navbar } }
</script>

<style>
body {
  background-color: #333a44;
  color: #fff;
  max-width: 100%;
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
p {
  font-size: 18px;
}
</style>
