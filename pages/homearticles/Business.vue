<template>
  <div class="business">
    <div class="business-heading">
      <h3>BUSSINESS</h3>
      <p>オフショア開発</p>
    </div>
    <ul>
      <li>
        <NuxtLink to="/homearticles/Business">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/homearticles/Technology">About</NuxtLink>
      </li>
    </ul>
    <div class="business-post">
      <div class="business-item">
        <a>
          <div><img src="../../static/articles.png" alt="articles" /></div>
          <div>
            <h4>オフショア開発</h4>
            <span>2022.06.15</span>
            <p>ベトナム人BrSE(ブリッジSE)とはどんな人？</p>
          </div>
        </a>
      </div>
      <div class="business-item">
        <a>
          <div><img src="../../static/articles.png" alt="articles" /></div>
          <div>
            <h4>オフショア開発</h4>
            <span>2022.06.15</span>
            <p>ベトナム人BrSE(ブリッジSE)とはどんな人？</p>
          </div>
        </a>
      </div>
      <div class="business-item">
        <a>
          <div><img src="../../static/articles.png" alt="articles" /></div>
          <div>
            <h4>オフショア開発</h4>
            <span>2022.06.15</span>
            <p>ベトナム人BrSE(ブリッジSE)とはどんな人？</p>
          </div>
        </a>
      </div>
      <div class="business-item">
        <a>
          <div><img src="../../static/articles.png" alt="articles" /></div>
          <div>
            <h4>オフショア開発</h4>
            <span>2022.06.15</span>
            <p>ベトナム人BrSE(ブリッジSE)とはどんな人？</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Business',
}
</script>
<style scoped>
.business {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 25px;
  margin-top: 80px;
}
.business-heading {
  text-align: center;
  margin-bottom: 80px;
}
.business-heading h3 {
  font-size: 65px;
  margin-bottom: 20px;
}
.business-heading p {
  font-size: 35px;
}
.business ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.business ul li {
  list-style: none;
  padding: 6px;
  background-color: #2a3139;
}
.business ul li a {
  color: white;
}
.business ul li:hover {
  list-style: none;
  padding: 6px;
  background-color: #65cf37;
}
.business ul li:hover a {
  color: white;
}
.business a {
  text-decoration: none;
}
.business a:active {
  color: 'red';
}

.business .active {
  list-style: none;
  padding: 6px;
  background-color: rgb(238, 0, 0);
}

.active a {
  color: #eee;
}
.business-post {
  display: flex;
  flex-wrap: wrap;
}
.business-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 33.333%;
  flex: 0 1 33.333%;
  width: 33.333%;
  padding: 16px;
}
.business-item a div {
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  overflow: hidden;
}
.business-item img {
  max-width: 100%;
  transition: all 0.5s;
}
.business-item:hover img {
  scale: 1.3;
  opacity: 0.8;
}
</style>
