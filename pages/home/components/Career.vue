<template>
  <div class="career-section mb-240">
    <HeadingComponent title="CAREER" />
    <div class="career-body">
      <div class="top-career">
        <div class="career-area">
          <div class="career-lead">
            <h3>日の目を浴びるための研究開発所</h3>
          </div>
          <div class="career-text">
            <p class="pc">
              社名にはこのような思いを込めています。<br />
              さまざまなビジネスアイディアが発案される中、その実現を支えるための開発リソースの不足、アマチュアな開発陣で進めたことによる技術的負債の蓄積によって、ビジネスをス
              ケールできないお客様がいらっしゃいます。<br />
              私たちは、さもクラウドサービスのように開発リソースを提供し、お客様の「ラボ（研究所）」として存在します。そのためのプロフェッショナルな仲間がまだまだ必要です。よかったら採用ページを覗いてみませんか？
            </p>
            <ButtonView />
          </div>
        </div>
        <div class="career-bg">
          <img
            src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/top/bg_career.jpg"
            loading="lazy"
            data-src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/top/bg_career.jpg"
            decoding="async"
            class="lazyloaded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Career',
  components: { HeadingComponent, ButtonView },
}
</script>

<style>
.top-career {
  padding: 0 25px;
  position: relative;
  display: flex;
  align-items: center;
}
.career-bg {
  width: 50%;
  height: 100%;
  z-index: 0;
}
.career-area {
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 15px;
}
.career-lead {
  margin-bottom: 40px;
  font-size: 30px;
  line-height: 1.5;
  z-index: 1;
}
</style>
