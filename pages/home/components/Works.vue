<template>
  <div class="works-section">
    <HeadingComponent title="WORKS" />
    <div class="works-description pc-only">
      HR、不動産、製薬、ECモール、Ad、NoCode、予約システム、CtoC、BtoB、AI…
      など、<br />多数の業界の、さまざまなWebシステム、モバイルアプリを開発しています。
    </div>
    <ButtonView />
  </div>
</template>

<script>
import HeadingComponent from './HeadingComponent.vue'
import ButtonView from '~/components/ButtonView.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Works',
  components: { HeadingComponent, ButtonView },
}
</script>

<style></style>
