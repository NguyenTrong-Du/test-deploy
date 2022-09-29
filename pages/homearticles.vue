<template>
  <div class="nav-articles">
    <div class="container">
      <div v-if="$route.path === '/homearticles'" class="business-heading">
        <h3>BUSINESS</h3>
        <p>Read Our Articles To Get All Recent Tech News</p>
      </div>
      <div
        v-else-if="$route.path === '/homearticles/Business'"
        class="business-heading"
      >
        <h3>TECHNOGOGY</h3>
        <p>Read Our Articles To Get All Recent Tech News</p>
      </div>
      <div
        v-else-if="$route.path === '/homearticles/Technology'"
        class="business-heading"
      >
        <h3>CREATIVE</h3>
        <p>Read Our Articles To Get All Recent Tech News</p>
      </div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/homearticles">Business</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/homearticles/Business">Technology</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/homearticles/Technology">Creative</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtChild title="hello" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParentView',
}
</script>

<style scoped>
.nav-articles {
  padding-top: 150px;
  padding-bottom: 50px;
  background-image: url(../static/3.png);
  background-size: cover;
  background-repeat: no-repeat;
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
.nav-articles ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.nav-articles ul li {
  list-style: none;
  margin: 0 15px;
}
.nav-articles ul li a {
  color: #000;
  padding: 8px 14px;
  border-radius: 5px;
  background-color: #fff;
  font-weight: 600;
}
.nav-articles ul li:hover a {
  color: white;
  background-color: #005de0;
}
.nav-articles a {
  text-decoration: none;
}
.nav-articles .nuxt-link-exact-active {
  list-style: none;
  color: white;
  background-color: #005de0;
  padding: 8px 14px;
}
</style>
