<template lang="html">
  <div class="container">
    <div class="image">
      <img :src="character.image" alt="character image">
    </div>
    <div class="info">
      <h2>{{character.name}}</h2>
      <p class="heading"><b>Status:</b></p>
      <p>{{character.status}}</p>
      <p class="heading"><b>Speicies:</b></p>
      <p>{{character.species}}</p>
      <p class="heading"><b>Gender:</b></p>
      <p>{{character.gender}}</p>
      <p class="heading"><b>Place of Origin:</b></p>
      <p>{{character.origin.name}}</p>
      <p class="heading"><b>Current Location:</b></p>
      <p>{{character.location.name}}</p>
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
    padding-top: 2em;
  }
  .info {
    justify-content: flex-start;
  }
  p {
    margin-bottom: 1.5em;
  }
  .heading {
    margin-bottom: -0.5em;
  }
  img {
    justify-content: flex-end;
    padding-top: 3em;
  }
</style>
