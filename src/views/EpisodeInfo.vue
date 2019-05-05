<template lang="html">
  <div class="container">
    <div class="details">
      <h2><b>{{episode.name}}</b></h2>
      <p class="heading"><b>Season and Episode</b></p>
      <p>{{episode.episode}}</p>
      <p class="heading"><b>Air Date</b></p>
      <p>{{episode.air_date}}</p>
        <character-list :characters="characters"></character-list>
    </div>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue';

export default {
  props: ['episode'],
  data(){
    return {
      initialArray: [],
      characters: []
    }
  },
  components: {
    'character-list': CharacterList
  },
  methods: {
    runFetch: function(){
      const promises = this.episode.characters.map((request) => {
        return fetch(request)
        .then(response => response.json());
      })
      Promise.all(promises)
      .then((data) => {
        data.forEach((object) => {
          this.initialArray.push(object);
        })
        this.characters = this.initialArray.flat();
        this.initialArray = [];
      })
    }
  },
  mounted(){
    this.runFetch(),
    checkEpisode = function(){
      if (!this.episode){
        this.$router.push('episodes');
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  text-align: center;
  display: block;
}
.details {
  display: inline-block;
  text-align: left;
  color: white;
}
.heading {
  margin-bottom: -0.5em;
}
p {
  margin-bottom: 1.5em;
}
</style>
