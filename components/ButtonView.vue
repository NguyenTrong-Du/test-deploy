<template>
  <button class="btn-more">
    <a href="#">VIEW MORE</a>
  </button>
</template>

<script>
export default {
  name: 'ButtonView',
}
</script>

<style>
.btn-more {
  margin-top: 60px;
  border: 0;
  background: transparent;
}
.btn-more a {
  display: inline-block;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #005de0;
  border-color: transparent;
  color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  height: 60px;
  line-height: 56px;
  padding: 0px 55px;
  border: 2px solid #005de0;
  border-style: solid;
  box-shadow: none;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  vertical-align: middle;
}
.btn-more a::before {
  position: absolute;
  content: '';
  z-index: -1;
  display: block;
  left: -20%;
  right: -20%;
  top: -4%;
  height: 150%;
  width: 150%;
  bottom: 0;
  background: #ffffff;
  transform: skewX(45deg) scale(0, 1);
  transition: all 0.5s ease 0s;
}
.btn-more a:hover {
  box-shadow: none;
  color: #005de0;
}
.btn-more a:hover::before {
  transform: skewX(45deg) scale(1, 1);
}
</style>
