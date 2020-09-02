import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IviewTest1 from '@/iviews/Iview-practice-1'
import IviewTest2 from '@/iviews/Iview-practice-2'
import IviewTest3 from '@/iviews/Iview-practice-3'
import IviewTest4 from '@/iviews/Iview-practice-4'
import IviewTest5 from '@/iviews/Iview-practice-5'
import SwitchIview from '@/iviews/Switch-View'
import TreeIView from '@/iviews/Tree-iview'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/iview1',
      name: 'IviewTest1',
      component: IviewTest1
    },
    {
      path: '/iview2',
      name: 'IviewTest2',
      component: IviewTest2
    }, {
      path: '/iview3',
      name: 'IviewTest3',
      component: IviewTest3
    }, {
      path: '/iview4',
      name: 'IviewTest4',
      component: IviewTest4
    }, {
      path: '/iview5',
      name: 'IviewTest5',
      component: IviewTest5
    }, {
      path: '/tree',
      name: 'TreeIView',
      component: TreeIView
    }, {
      path: '/switch',
      name: 'SwitchIview',
      component: SwitchIview
    }
  ]
})
