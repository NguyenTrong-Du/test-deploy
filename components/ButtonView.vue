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
}
.btn-more a {
  z-index: 1;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 10px 45px;
  background-color: #ff3800;
  font-size: 20px;
  letter-spacing: 0.5px;
  position: relative;
  height: 60px;
  color: #fff;
  font-weight: 500;
  overflow: hidden;
}
.btn-more a::before {
  background: #000;
  top: 0px;
  width: 0px;
  left: auto;
  right: 0px;
  z-index: -1;
  bottom: 0px;
  content: '';
  position: absolute;
  transition: all 0.3s ease-in-out;
}
.btn-more a:hover::before {
  left: 0px;
  width: 100%;
  right: auto;
}
</style>
