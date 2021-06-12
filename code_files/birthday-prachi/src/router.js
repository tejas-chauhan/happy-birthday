import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Memories from './views/Memories.vue';
import Jay from './views/Jay.vue';
import Words from './views/Words.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/memories',
      name: 'memories',
      component: Memories,
    },
    {
      path: '/jay',
      name: 'jay',
      component: Jay,
    },
    {
      path: '/words',
      name: 'words',
      component: Words,
    },
  ],
});
