<template>
  <div>
    <header>
      <img class="banner" src="../public/r_and_m_header.jpg" alt="Rick and Morty logo">
    </header>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue';

export default {
  name: 'app',
  components: {
    
  },
  components: {
    'home': HomeView
  }
}
</script>

<style>
.banner {
  max-height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
header {
  background-color: black;
}
</style>
