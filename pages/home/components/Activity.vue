<template>
  <div class="activity">
    <ul class="clearfix">
      <li><img src="../../../static/image-1.jpg" alt="images" /></li>
      <li><img src="../../../static/image-2.jpg" alt="images" /></li>
      <li><img src="../../../static/image-3.jpg" alt="images" /></li>
      <li><img src="../../../static/image-4.jpg" alt="images" /></li>
    </ul>
    <ul class="clearfix">
      <li><img src="../../../static/image-4.jpg" alt="images" /></li>
      <li><img src="../../../static/image-3.jpg" alt="images" /></li>
      <li><img src="../../../static/image-2.jpg" alt="images" /></li>
      <li><img src="../../../static/image-1.jpg" alt="images" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Activity',
}
</script>

<style>
.activity {
  position: relative;
}
.activity ul {
  display: block;
}
.activity ul li {
  display: flex;
  width: 25%;
  float: left;
  position: relative;
  overflow: hidden;
}
.activity ul li img {
  width: 100%;
  transition: all 0.3s;
  z-index: 1;
}
.activity ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: all 0.2s ease-in-out 0s;
  background: #000;
  opacity: 0;
}
.activity ul li:hover img {
  transform: scale(1.1);
}
.activity ul li:hover::before {
  opacity: 0.7;
}
.clearfix::after {
  content: ' ';
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
</style>
