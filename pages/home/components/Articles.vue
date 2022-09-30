<template>
  <div class="articles-section">
    <div class="container">
      <HeadingComponent title="ARTICLES" />
      <div class="posts-body">
        <div class="posts-list">
          <div class="posts-item">
            <a href="#" class="posts-item-link"
              ><div class="posts-item-date">
                <time>2022.07.26</time>
              </div>
              <div class="posts-item-title">
                美容室特化
                AI商圏分析システム「LunappAI」が、全国理美容新聞vol76号で特集されました。
              </div>
              <div class="posts-item-cate">
                <span>お知らせ</span>
              </div>
            </a>
          </div>
          <div class="posts-item">
            <a href="#" class="posts-item-link"
              ><div class="posts-item-date">
                <time>2022.07.26</time>
              </div>
              <div class="posts-item-title">
                美容室特化
                AI商圏分析システム「LunappAI」が、全国理美容新聞vol76号で特集されました。
              </div>
              <div class="posts-item-cate">
                <span>お知らせ</span>
              </div>
            </a>
          </div>
          <div class="posts-item">
            <a href="#" class="posts-item-link"
              ><div class="posts-item-date">
                <time>2022.07.26</time>
              </div>
              <div class="posts-item-title">
                美容室特化
                AI商圏分析システム「LunappAI」が、全国理美容新聞vol76号で特集されました。
              </div>
              <div class="posts-item-cate">
                <span>お知らせ</span>
              </div>
            </a>
          </div>
        </div>
        <ButtonView />
      </div>
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Articles',
  components: { HeadingComponent, ButtonView },
}
</script>

<style>
.articles-section {
  position: relative;
  /* height: 100vh; */
  padding: 100px 0;
}
.posts-body {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 25px;
}
.posts-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}
.posts-item {
  flex: 0 1 calc(33.333% - 40px);
  font-size: 16px;
  transition: all 0.3s ease;
}
.posts-item:hover .posts-item-date,
.posts-item:hover .posts-item-title {
  opacity: 0.7;
}
.posts-item-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding-top: 60px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: relative;
}
.posts-item-link::before,
.posts-item-link::after {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  height: 1px;
}
.posts-item-link::before {
  left: 0;
  width: 100%;
  background-color: #474e57;
}
.posts-item-link::after {
  width: 100px;
  left: 50%;
  background-color: #fff;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.posts-item-link:hover::after {
  width: 100%;
}
.posts-item-date {
  margin-bottom: 20px;
}
.posts-item-title {
  text-align: justify;
  padding-bottom: 40px;
  line-height: 2;
}
.posts-item-cate span {
  display: inline-block;
  min-width: 110px;
  padding: 4px 8px;
  background-color: #474e57;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid #ffffff;
}
.posts-item-cate span:hover {
  background: #ffffff;
  color: #000000;
}
.posts-body .btn-more {
  display: block;
  margin: auto;
}
</style>
