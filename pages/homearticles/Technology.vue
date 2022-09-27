<template>
  <div class="business">
    <!-- <div class="business-heading">
      <h3>TECHGOLOGY</h3>
      <p>オフショア開発</p>
    </div> -->
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
  name: 'Technology',
}
</script>

<style scoped>
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
