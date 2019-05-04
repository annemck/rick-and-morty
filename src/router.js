import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import EpisodesView from '@/views/EpisodesView.vue';
import EpisodeInfo from '@/views/EpisodeInfo.vue';
import CharacterView from '@/views/CharacterView.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: EpisodesView
    },
    {
      path: '/episode-info',
      name: 'episode-info',
      component: EpisodeInfo,
      props: true
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView,
      props: true
    }
  ]
});
