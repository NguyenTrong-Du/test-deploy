<template>
  <div class="header">
    <div>
      <div class="logo">
        <a href="#"><img src="../static/logo.png" alt="logo" /></a>
      </div>
      <div class="header-menu">
        <ul class="main-menu">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/homeservice">Service</NuxtLink></li>
          <li><NuxtLink to="/homeabout">About</NuxtLink></li>
          <li><NuxtLink to="/homearticles">Articles</NuxtLink></li>
          <li><NuxtLink to="/homecontact">Contact</NuxtLink></li>
        </ul>
      </div>
      <div class="header-info">
        <div class="info-icon">
          <span class="material-icons"> call </span>
        </div>
        <div class="info-text">
          <span>Free Consultant</span>
          <span class="number"><a href="#">0862009300</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
}
</script>

<style>
.header {
  position: fixed;
  width: 100%;
  z-index: 999;
  background: #fff;
  box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 7%);
  color: #000;
  opacity: 0.8;
  padding: 10px 60px;
}
.header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 120px;
}
.logo img {
  max-width: 100%;
  height: auto;
}
.header-menu .main-menu {
  display: flex;
}
.header-menu .main-menu li {
  position: relative;
  padding: 10px 25px;
}
.header-menu .main-menu li a {
  font-size: 17px;
  font-weight: 700;
  text-transform: capitalize;
}
.header-menu .main-menu li .nuxt-link-exact-active,
.header-menu .main-menu li:hover a {
  color: #005de0;
}
.header-info {
  align-items: end;
  display: flex;
}
.header-info .info-icon {
  line-height: 1;
}
.header-info .info-icon span {
  font-size: 30px;
  color: #005de0;
  font-weight: 900;
}
.header-info .info-text {
  margin-left: 10px;
}
.header-info .info-text span {
  display: block;
  font-size: 10px;
  line-height: 18px;
  font-weight: 700;
  color: #ababab;
}
.header-info .info-text .number {
  display: block;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: #090d2f;
}
.header-info .info-text .number:hover {
  color: #005de0;
}
</style>
