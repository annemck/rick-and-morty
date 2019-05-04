<template lang="html">
  <div class="">
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
  list-style: none;
}
</style>
