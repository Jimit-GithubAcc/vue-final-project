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
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
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
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
    // meta: {auth: true}
  },
  {
    path: '/allcandidates',
    name: 'AllCandidates',
    component: () => import('../components/candidates/AllCandidates.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
    // meta: {auth: true}
  },
  {
    path: '/candidate/:id',
    name: 'OneCandidateDetails',
    component: () => import('../components/candidates/OneCandidateDetails.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/createprofile/:id',
    name: 'UserinfoForm',
    component: () => import('../components/userForm/UserinfoForm.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/editprofile/:id',
    name: 'editProfileForm',
    component: () => import('../components/userForm/editProfileForm.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
    {
    path: '/userprofile/:id',
    name: 'UserProfileDetails',
    component: () => import('../components/user/UserProfile.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/companyprofile',
    name: 'Profile',
    component: () => import('../components/companyProfile/index.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     console.log("Token = ",token);
    //     next()
    //   }else{
    //     console.log("Token Else= ", token)
    //     next("/firstloginpage")
    //   }
    // }
    // meta: {auth: true}
  },
  {
    path: '/companyprofile/postjob',
    name: 'PostJob',
    component: () => import('../components/companyProfile/postJob.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/companyprofile/jobdetails',
    name: 'JobDetails',
    component: () => import('../components/companyProfile/jobDetails.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/companyprofile/profiledetails',
    name: 'ProfileDetails',
    component: () => import('../components/companyProfile/profileDetails.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/firstloginpage',
    name: 'FirstLoginPage',
    component: () => import('../views/FirstLoginPage.vue')
  },
  {
    path: '/employerlogin',
    name: 'EmployerLogin',
    component: () => import('../views/companyForm/Login.vue')
  },
  {
    path: '/employersignup',
    name: 'Employersignup',
    component: () => import('../views/companyForm/SignUp.vue')
  },
  {
    path: '/user/jobdetails/:id',
    name: 'JobDetails',
    component: () => import('../views/jobs/JobDetails.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/savedjobs',
    name: 'SavedJobs',
    component: () => import('../components/user/SavedJobs.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // }
  },
  {
    path: '/appliedjobs/:id',
    name: 'AppliedJobs',
    component: () => import('../components/user/AppliedJobs.vue'),
    // beforeEnter: (_, __, next) => {
    //   let token = window.localStorage.getItem('auth_token')
    //   if(token !== null) {
    //     next()
    //   }else{
    //     next("/firstloginpage")
    //   }
    // },
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach(() => {
//   console.log("Store = ", store)
// })

// router.beforeEach((to, from, next) => {
//   if('auth' in to.meta && to.meta.auth){
//     next('/login')
//   }else {
//     next();
//   }
// })


export default router
