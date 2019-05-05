<template lang="html">
  <div class="list">
    <ul>
      <character-episode-item v-for="episode in episodes" :episode="episode"></character-episode-item>
    </ul>
  </div>
</template>

<script>
import CharacterEpisodeItem from '@/components/CharacterEpisodeItem.vue';

export default {
  props: ['episodes'],
  components: {
    'character-episode-item': CharacterEpisodeItem
  }
}
</script>

<style lang="css" scoped>
.list {
  list-style: none;
  color: white;
}
ul {
  text-align: left;
  height: 320px;
  width: 260px;
  border: 1px solid silver;
  overflow: auto;
}
</style>
