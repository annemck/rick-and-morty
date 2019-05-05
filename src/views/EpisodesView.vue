<template lang="html">
  <div>
    <episodes-list :episodes="episodes" />
  </div>
</template>

<script>
import EpisodesList from '@/components/EpisodesList.vue';
export default {
  name: 'episodes',
  data() {
    return {
      episodes: this.$parent.episodes,
      urls: ['https://rickandmortyapi.com/api/episode',
      'https://rickandmortyapi.com/api/episode?page=2']
    }
  },
  methods: {
    
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
      })
    },
    
    runChecks: function(){
      if (this.episodes.length === 0){
        this.runFetch();
      }
      else if (this.episodes.length < 30){
        this.episodes = this.episodes.flat();
      }
    }
    
  },
  components:{
    'episodes-list': EpisodesList
  },
  mounted(){
    this.runChecks()
  }
}

</script>

<style lang="css" scoped>
</style>
