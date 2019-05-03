<template lang="html">
  <div>
    <h3>Season 1</h3>
    <episode-items v-for="(episode, index) in seasonOne" :episode="episode"/>
    <h3>Season 2</h3>
    <episode-items v-for="(episode, index) in seasonTwo" :episode="episode"/>
    <h3>Season 3</h3>
    <episode-items v-for="(episode, index) in seasonThree" :episode="episode"/>
  </div>
</template>

<script>
import EpisodeItems from '@/components/EpisodeItems.vue';

export default {
  
  name: 'episodes-list',
  props: ['episodes'],
  components: {
    'episode-items': EpisodeItems
  },
  data() {
    return {
      seasonOne: [],
      seasonTwo: [],
      seasonThree: []
    }
  },
  methods: {
    seasons: function(){
      this.episodes.forEach((episode) => {
        if (episode.episode.includes('S01')){
          this.seasonOne.push(episode);
        }
        else if (episode.episode.includes('S02')){
          this.seasonTwo.push(episode);
        }
        else {
          this.seasonThree.push(episode);
        };
      });
    }
  },
  mounted() {
    this.seasons()
  }
  
}
</script>

<style lang="css" scoped>
</style>
