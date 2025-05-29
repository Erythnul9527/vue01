import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Recommend from '../components/Recommend.vue'
import Playlist from '../components/Playlist.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: HelloWorld },
  { path: '/recommend', component: Recommend },
  { path: '/playlist', component: Playlist }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router