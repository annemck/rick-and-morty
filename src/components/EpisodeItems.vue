<template lang="html">
  <div>
    <li>
      <router-link :to="{ name: 'episode-info', params: {id: episode.id, episode: episode} }">
        {{episode.name}}</router-link>
        <li class="right-align">{{episode.episode}}</li>
    </li>
  </div>
</template>

<script>
import EpisodeInfo from '@/views/EpisodeInfo.vue';

export default {
  name: 'episode-items',
  props: ['episode'],
  components: {
    'episode-info': EpisodeInfo
  }
}
</script>

<style lang="css" scoped>
.right-align {
  text-align: right;
  margin-top: -1em;
}
li {
  list-style: none;
  margin-top: 5px;
  color: lightgrey;
  min-width: 20.5em;
}
a {
  color: silver;
}
</style>
