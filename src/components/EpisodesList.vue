<template lang="html">
  <div class="container">
    <!-- <episode-items v-for="episode in episodes" :episode="episode"/> -->
    <div class="list">
    <!-- SOMETIMES WORKING, SOMETIMES NOT -->
    <h3>Season 1</h3>
    <episode-items v-for="episode in seasonOne" :episode="episode"/>
    <br>
    <h3>Season 2</h3>
    <episode-items v-for="episode in seasonTwo" :episode="episode"/>
    <br>
    <h3>Season 3</h3>
    <episode-items v-for="episode in seasonThree" :episode="episode"/>
  </div>
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
    // tried: .contains, .search. indexOf .includes .substring(0,3)
    seasonsLoop: function(){
      this.episodes.forEach((episode) => {
        if (episode.episode.startsWith('S01')){
          this.seasonOne.push(episode);
        }
        else if (episode.episode.startsWith('S02')){
          this.seasonTwo.push(episode);
        }
        else {
          this.seasonThree.push(episode);
        };
        // if (episode.episode.startsWith('S03'))
      });
    }
  },
  mounted(){
    this.seasonsLoop()
  }
  
}
</script>

<style lang="css" scoped>
  .container {
    padding-top: 3em;
    padding-bottom: 3em;
    color: white;
    text-align: center;
  }
  .list {
    display: inline-block;
    text-align: left;
  }
</style>
