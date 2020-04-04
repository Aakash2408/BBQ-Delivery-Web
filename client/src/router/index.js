import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Booking from '@/components/Booking'
import Pickup from '@/components/Pickup'
import Bbq from '@/components/Bbq'
import map from '@/components/map'
import Addons from '@/components/addons'
import Orders from '@/components/Orders'
import Product from '@/components/Product'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home    
    },
    {
      path: '/login',
      name: 'Login',
      component: Login    
    },
    {
      path: '/register',
      name: 'Register',
      component: Register    
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile    
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders    
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking ,
      children:[
                  {
                         path: 'pickup',
                         name: 'Pickup',
                         component: Pickup
                  },
                  {
                         path:'bbq',
                         name:'Bbq',
                         component:Bbq
                  },
                  {
                        path:'map',
                        name:'map',
                        component:map
                  },
                  {
                       path:'addons',
                       name:'Addons',
                       component:Addons
                  }
                ]
    } 
    
  ]
})
