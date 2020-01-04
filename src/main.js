// 入口文件
import Vue from 'vue'

//导入App根组件
import app from './App.vue'

//导入vue路由
import VueRouer from 'vue-router'
Vue.use(VueRouer);

import VueResource from 'vue-resource'
Vue.use(VueResource);

import axios from 'axios'
Vue.prototype.$axios = axios;


import {Header, Swipe, SwipeItem,Toast } from 'mint-ui';

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from "./router";

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Toast);

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
});