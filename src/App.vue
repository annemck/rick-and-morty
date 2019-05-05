<template>
  <div class="all">
    <header>
      <router-link :to="{ name: 'episodes' }"><img class="banner" src="../public/r_and_m_header.jpg" alt="Rick and Morty logo"></router-link>
      <form v-on:submit.prevent class="search" v-if="$route.path !== '/'">
        <input type="text" v-model="search" placeholder="Search For Episode" v-on:keyup="searchDetails">
        <router-link :to="{ name: 'episode-info', params: {episode} }">
          <button v-on:click="clearBar">Search</button>
        </router-link>
      </form>
    </header>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function(){
    return {
      episodes: [],
      urls: ['https://rickandmortyapi.com/api/episode',
      'https://rickandmortyapi.com/api/episode?page=2'],
      'search': '',
      'episode': null,
      'searched': false
    }
  },
  methods: {
    searchDetails: function(){
      let foundEpisode = this.episodes.findIndex((episode) => {
        return episode.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      });
      this.episode = this.episodes[foundEpisode];
      this.searched = true;
    },
    
    clearBar: function(){
      if (this.searched) {
        this.searched = false;
        this.search = '';
      }
    },
    
    
    runFetch: function(){
      const promises = this.urls.map((request) => {
        return fetch(request)
        .then(response =>response.json());
      })
      Promise.all(promises)
      .then((data) => {
        data.forEach((object) => {
          this.episodes.push(object.results);
        })
        this.episodes = this.episodes.flat();
      })
    }
  },
  mounted(){
    this.runFetch()
  }
}
</script>

<style>
.banner {
  max-height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
input:focus {
  outline: none;
}
input {
  margin-left: 1em;
  background-color: rgb(53, 54, 56);
  color: white;
  border: none;
}
button:focus {
  outline: none;
}
button {
  background-color: rgb(94, 94, 99);
  color: white;
  border: none;
}
.all {
  min-height: 100%;
  background-color: black;
}
.search {
  color: white;
}
.body {
  min-height: 100vh;
}
</style>
