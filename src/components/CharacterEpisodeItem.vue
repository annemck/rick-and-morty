<template lang="html">
  <div>
    <li>
      <router-link :to="{ name: 'episode-info', params: {episode} }">{{episode.name}}</router-link>
      , &nbsp;{{episode.episode}}
    </li>
  </div>
</template>

<script>
export default {
  props: ['episode']
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
}
</style>
