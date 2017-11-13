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
import VrList from '@/components/vrtemplate/index';
import Vjia from '@/components/vrtemplate/vrvjia';
import Kujiale from '@/components/vrtemplate/kujiale';
import kujialemobile from '@/components/vrtemplate/kujialemobile';
import vjiamobile from '@/components/vrtemplate/vjiamobile';


Vue.use(Router);
Vue.prototype.axios = axios;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
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
    },
    {
      path:'/vrlist',
      name:'vrlist',
      component:VrList,
      children:[
      {
        path:'/vrlist/vjia',
          name:'vjia',
          component:Vjia
      },
      {
        path:'/vrlist/kujiale',
          name:'kujiale',
          component:Kujiale
      },
      {
        path:"/vrlist/kujialemobile",
        name:"kujialemobile",
        component:kujialemobile
      },
      {
        path:"/vrlist/vjiamobile",
        name:"vjiamobile",
        component:vjiamobile
      }
      ]
    }
  ]
})
