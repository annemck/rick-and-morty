<template lang="html">
  <div>
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
</style>
