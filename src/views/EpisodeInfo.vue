<template lang="html">
  <div class="">
    <h3><b>{{episode.name}}</b></h3>
    <p><b>Season and Episode</b></p>
    <p>{{episode.episode}}</p>
    <p><b>Air Date</b></p>
    <p>{{episode.air_date}}</p>
    <p><b>Characters In This Episode</b></p>
    <character-list :characters="characters"></character-list>
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
    this.runFetch()
  }
}
</script>

<style lang="css" scoped>
</style>
