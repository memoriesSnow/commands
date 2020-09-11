import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [ 
  {
    path: '/model',
    name: 'model',
    component: () => import('../commander/model.vue')
  },
  {
    path: '/for',
    name: 'for',
    component: () => import('../commander/for.vue')
  },
  {
    path: '/pre',
    name: 'pre',
    component: () => import('../commander/pre.vue')
  },
  {
    path: '/if',
    name: 'if',
    component: () => import('../commander/if.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../commander/show.vue')
  },
  {
    path: '/text,html',
    name: 'text',
    component: () => import('../commander/text,html.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('../commander/slot/mypage')
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('../生命周期/life')
  },
  {
    path: '/origin',
    name: 'origin',
    component: () => import('../生命周期/动态组件/origin')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('../client/home'),
    children:[
      {
        path:'/page1',
        name:'page1',
        alias:'page1',
        component: () => import('../client/page/page1'),
        children:[
          {
            path:'age1',
            name:'age1',
            alias:'age1',
            component: () => import('../client/age/age1')
          },
          {
            path:'age2',
            name:'age2',
            alias:'age2',
            component: () => import('../client/age/age2')
          }
        ]
      },
      {
        path:'/page2',
        name:'page2',
        alias:'page2',
        component: () => import('../client/page/page2')
      }
    ]
  },
  {
    path:'/home1',
    name:'home1',
    component: () => import('../vue-router/home1')
  },
  {
    path:'/details/:info',
    name:'details',
    component: () => import('../vue-router/details')
  },
  {
    path:'/$emit',
    name:'parent',
    component: () => import('../$emit/parent')
  },
  {
    path:'/child1',
    name:'child1',
    component: () => import('../$emit/child1')
  },
  {
    path:'/$dad',
    name:'dad',
    component: () => import('../$slots/dad')
  },
  {
    path:'/filter',
    name:'filter',
    component: () => import('../filter/filter')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
  
})

export default router

// router.beforeEach((to,from,next)=>{
//   console.log(to,from,next);
//   next()
// })