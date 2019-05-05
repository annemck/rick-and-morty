<template lang="html">
  <div class="container">
    <div class="list">
    <h3>Season 1</h3>
    <episode-items v-for="episode in seasonOne" :episode="episode"/>
    <br>
    <h3>Season 2</h3>
    <episode-items v-for="episode in seasonTwo" :episode="episode"/>
    <br>
    <h3>Season 3</h3>
    <episode-items v-for="episode in seasonThree" :episode="episode"/>
  </div>
  </div>
</template>

<script>
import EpisodeItems from '@/components/EpisodeItems.vue';

export default {
  name: 'episodes-list',
  props: ['seasonOne', 'seasonTwo', 'seasonThree'],
  components: {
    'episode-items': EpisodeItems
  }
}
</script>

<style lang="css" scoped>
  .container {
    padding-top: 3em;
    padding-bottom: 3em;
    color: white;
    text-align: center;
  }
  .list {
    display: inline-block;
    text-align: left;
  }
</style>
