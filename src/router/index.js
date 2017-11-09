import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import Hello from '@/components/Hello';
import htmlFive from '@/components/htmlFive';
import VR from '@/components/vr/index';
import VRSHOW from '@/components/vr/vrFrame';
import Test from '@/components/Test';
import Testa from '@/components/test/Test-a';
import Testb from '@/components/test/Test-b';

Vue.use(Router);
Vue.prototype.axios = axios;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      children:[
        {
          path:'/test/testa',
          name:'testa',
          component:Testa
        },
        {
          path:'/test/testb',
          name:'testb',
          component:Testb
        }
      ]
    },
    {
      path:'/html5',
      name:'html5',
      component:htmlFive
    },
    {
      path:'/vr',
      name:'vr',
      component:VR,
      children:[]
    },
    {
      path:'/vrShow',
      name:'vrShow',
      component:VRSHOW
    }
  ]
})
