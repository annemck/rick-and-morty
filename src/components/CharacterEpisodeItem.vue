<template lang="html">
  <div class="display">
    <li class="left-align">
      <router-link :to="{ name: 'episode-info', params: {id: episode.id, episode: episode} }">{{episode.name}}</router-link>
      <li class="right-align">{{episode.episode}}</li>
    </li>
  </div>
</template>

<script>
export default {
  props: ['episode']
}
</script>

<style lang="css" scoped>
.right-align {
  text-align: right;
  margin-top: -1em;
  padding-right: 0.5em;
}
.left-align {
  text-wrap: break-word;
  max-width: 230px;
}
li {
  margin-left: -2em;
  margin-top: 5px;
  color: lightgrey;
}
a {
  color: silver;
}
</style>
