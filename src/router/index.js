import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import {getAuthToken} from '../store/modules/session__manager'
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SignUp.vue'),
    // meta: {auth: false}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    // meta: {auth: false}
  },
  {
    path: '/employeer',
    name: 'Employeer',
    component: () => import('../components/employeer/index.vue'),
    // meta: {auth: true}
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: () => import('../components/user/index.vue'),
    // meta: {auth: true}
  },
  {
    path: '/createprofile',
    name: 'UserinfoForm',
    component: () => import('../components/userForm/UserinfoForm.vue')
  },
  {
    path: '/userprofile',
    name: 'UserProfileDetails',
    component: () => import('../components/user/UserProfile.vue')
  },
  {
    path: '/companyprofile',
    name: 'Profile',
    component: () => import('../components/companyProfile/index.vue'),
    // meta: {auth: true}
  },
  {
    path: '/companyprofile/postjob',
    name: 'PostJob',
    component: () => import('../components/companyProfile/postJob.vue')
  },
  {
    path: '/companyprofile/jobdetails',
    name: 'JobDetails',
    component: () => import('../components/companyProfile/jobDetails.vue')
  },
  {
    path: '/companyprofile/profiledetails',
    name: 'ProfileDetails',
    component: () => import('../components/companyProfile/profileDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if('auth' in to.meta && to.meta.auth){
//     next('/login')
//   }else {
//     next();
//   }
// })


export default router
