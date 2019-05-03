<template lang="html">
  <div>
    <li>{{episode.name}}, &nbsp; {{episode.episode}}</li>
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
li {
  list-style: none;
  margin-top: 5px;
}
</style>
