import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'
import Shit from '@/components/Shit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/broadcast',
      name:'Broadcast',
      component:Broadcast
    },
    {
      path:'/audioBook',
      name:'AudioBook',
      component:AudioBook
    },
    {
      path:'/group',
      name:'Group',
      component:Group
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      path:'/Index',
      redirect:'/'
    },
    {
      path:'*',
      redirect:'/'
    },
    {
      path:'/shit',
      component: Shit
    }
  ]
})
