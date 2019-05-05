<template lang="html">
  <div class="list">
    <router-link :to="{ name: 'character', params: {character} }">
      <li>{{character.name}}</li>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['character']
}
</script>

<style lang="css" scoped>
li {
  margin-left: -2em;
  margin-top: 5px;
  color: lightgrey;
}
a {
  color: silver;
}
</style>
