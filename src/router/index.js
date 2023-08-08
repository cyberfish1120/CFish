import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

// router.afterEach((to, from) => {
//   // console.log(to, from);
//   if(to.name==='chatGPT' && from.name!=='chatGPT' && from.name!==undefined){
//     location.reload()
//   }
// })

export default router
