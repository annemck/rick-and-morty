<template lang="html">
  <div class="container">
    <div class="info">
      <h3>{{character.name}}</h3>
      <p><b>Status:</b></p>
      <p>{{character.status}}</p>
      <p><b>Speicies:</b></p>
      <p>{{character.species}}</p>
      <p><b>Gender:</b></p>
      <p>{{character.gender}}</p>
      <p><b>Place of Origin:</b></p>
      <p>{{character.origin.name}}</p>
      <p><b>Current Location:</b></p>
      <p>{{character.location.name}}</p>
    </div>
    <div class="image">
      <img :src="character.image" alt="character image">
    </div>
    <div class="episodes">
      <p><b>Episodes:</b></p>
      <character-episode-list :episodes="episodes"></character-episode-list>
    </div>
  </div>
</template>

<script>
import CharacterEpisodeList from '@/components/CharacterEpisodeList.vue';

export default {
  props: ['character'],
  data() {
    return {
      initialArray: [],
      episodes: []
    }
  },
  components: {
    'character-episode-list': CharacterEpisodeList
  },
  methods: {
    runFetch: function(){
      const promises = this.character.episode.map((request) => {
        return fetch(request)
        .then(response => response.json());
      })
      Promise.all(promises)
      .then((data) => {
        data.forEach((object) => {
          this.initialArray.push(object);
        })
        this.episodes = this.initialArray.flat();
        this.initialArray = [];
      })
    }
  },
  mounted(){
    this.runFetch()
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-around;
  color: white;
}
.info {
  justify-content: flex-start;
}
.image {
  justify-content: flex-end;
  padding-top: 3em;
}
</style>
