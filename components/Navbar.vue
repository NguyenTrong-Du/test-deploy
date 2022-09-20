<template>
  <div class="header">
    <div class="logo">
      <img src="../static/logo.png" alt="logo" />
    </div>
    <button class="btn-menu" @click="openNav">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </button>
    <div id="myNav" class="overlay">
      <a class="closebtn" @click="closeNav">&times;</a>
      <div class="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  methods: {
    openNav() {
      document.getElementById('myNav').style.width = '30%'
    },
    closeNav() {
      document.getElementById('myNav').style.width = '0%'
    },
  },
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
}
.logo {
  width: 100px;
}
.logo img {
  max-width: 100%;
  height: auto;
}
.btn-menu {
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
}
.btn-menu ul li {
  width: 35px;
  height: 4px;
  display: block;
  background: #fff;
  transition: 0.3s;
}
.btn-menu ul li:nth-child(2) {
  margin: 7px 0;
}
.btn-menu:hover ul li {
  background: #ff3800;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}
.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
