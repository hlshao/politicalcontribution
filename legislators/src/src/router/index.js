import Vue from 'vue'
import Router from 'vue-router'

const Explore = () => import('../views/Explore')
// import Explore from '@/views/Explore'
// import Topic from '@/views/Topic'
const Story1 = () => import('../views/topic/Story1')
// import Story1 from '@/views/topic/Story1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/story1',
      name: 'story1',
      component: Story1
    }
    // {
    //   path: '/topic/:story',
    //   name: 'Topic',
    //   component: Topic,
    //   props: true
    // }
  ]
})
