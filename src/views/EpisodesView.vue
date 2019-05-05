<template lang="html">
  <div>
    <episodes-list :seasonOne="seasonOne" :seasonTwo="seasonTwo" :seasonThree="seasonThree"/>
  </div>
</template>

<script>
import EpisodesList from '@/components/EpisodesList.vue';
export default {
  name: 'episodes',
  data() {
    return {
      episodes: [],
      seasonOne: [],
      seasonTwo: [],
      seasonThree: [],
      urls: ['https://rickandmortyapi.com/api/episode',
            'https://rickandmortyapi.com/api/episode?page=2']
    }
  },
  methods: {
    
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
      });
    },
    
    runFetch: function(){
      const promises = this.urls.map((request) => {
        return fetch(request)
        .then(response => response.json());
      })
      Promise.all(promises)
      .then((data) => {
        data.forEach((object) => {
          this.episodes.push(object.results);
        })
        this.episodes = this.episodes.flat();
        this.seasonsLoop();
      })
    }
    
  },
  components:{
    'episodes-list': EpisodesList
  },
  mounted(){
    this.runFetch()
  }
}
</script>

<style lang="css" scoped>
</style>
