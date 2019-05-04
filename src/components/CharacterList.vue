<template lang="html">
  <div>
    <ul>
      <character-list-item v-for="character in characters" :character="character"></character-list-item>
    </ul>
  </div>
</template>

<script>
import CharacterListItem from '@/components/CharacterListItem.vue';

export default {
  props: ['characters'],
  components: {
    'character-list-item': CharacterListItem
  }
}
</script>

<style lang="css" scoped>
</style>
