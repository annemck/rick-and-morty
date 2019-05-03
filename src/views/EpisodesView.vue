<template lang="html">
  <div>
    <episodes-list :episodes="episodes"/>
  </div>
</template>

<script>
import EpisodesList from '@/components/EpisodesList.vue';
export default {
  name: 'episodes',
  data() {
    return {
      episodes: [],
      initialList: [],
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
          this.initialList.push(object.results);
        })
        this.episodes = this.initialList.flat();
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
