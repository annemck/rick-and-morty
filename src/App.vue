<template>
  <div class="all">
    <header>
      <router-link :to="{ name: 'episodes' }"><img class="banner" src="../public/r_and_m_header.jpg" alt="Rick and Morty logo"></router-link>
    </header>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
.banner {
  max-height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.all {
  min-height: 100%;
  background-color: black;
}
.body {
  min-height: 100vh;
}
</style>
