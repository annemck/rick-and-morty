<template lang="html">
    <div class="list">
      <p class="heading"><b>Characters In This Episode</b></p>
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
.heading {
  margin-bottom: -0.5em;
}
.list {
  list-style: none;
  color: white;
}
ul {
  text-align: left;
  height: 250px;
  width: 200px;
  border: 1px solid silver;
  overflow: auto;
}
</style>
