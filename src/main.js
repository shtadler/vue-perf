import Vue from 'vue'
import App from './App.vue'
import fps from 'fps-indicator'
import VueRouter from 'vue-router'
import Functional from './components/functional/index.vue'
import Local from './components/local-var/index.vue'
import Empty from './components/empty.vue'
import Keep from './components/keep-alive/index.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Empty,
    },
    {
      path: '/functional',
      name: 'functional',
      component: Functional,
    },
    {
      path: '/local',
      name: 'local',
      component: Local,
    },
    {
      path: '/keep',
      name: 'keep',
      component: Keep,
    },
  ]
})
fps({
  position: 'top-right',
  style: `
    font-size: 100px;
  `,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
