<template>
  <div class="business">
    <div class="business-post">
      <div class="business-item" v-for="(blog, index) in data" :key="index">
        <a>
          <div><img :src="blog.src" alt="articles" /></div>
          <div>
            <h4>{{ blog.Subtitle }}</h4>
            <span>{{ blog.date }}</span>
            <p>
              {{ blog.text }}
            </p>
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
  data() {
    return {
      data: [
        {
          src: '/11.png',
          Subtitle: 'How Technology Dominate In The new World In 2022',
          date: '2022.06.15',
          text: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
        },
        {
          src: '/12.png',
          Subtitle: 'How Technology Dominate In The new World In 2022',
          date: '2022.06.15',
          text: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
        },
        {
          src: '/13.png',
          Subtitle: 'How Business Dominate In The new World In 2022',
          date: '2022.06.15',
          text: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
        },
        {
          src: '/14.png',
          Subtitle: 'How Creative Dominate In The new World In 2022',
          date: '2022.06.15',
          text: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
        },
      ],
    }
  },
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
  cursor: pointer;
}
.business-item:hover img {
  scale: 1.3;
  opacity: 0.8;
}
.business-item h4 {
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.business-item:hover h4 {
  color: #005de0;
}
.business-item span {
  margin-top: 10px;
  display: block;
}
.business-item p {
  margin-top: 10px;
  font-size: 15px;
}
</style>
