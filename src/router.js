import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Page from '@/views/Page.vue'
import New from '@/views/New.vue'
import Job from '@/views/Job.vue'
import Ask from '@/views/Ask.vue'
import Show from '@/views/Show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/story/:id',
      name: 'Page',
      component: Page
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }
  ]
})
