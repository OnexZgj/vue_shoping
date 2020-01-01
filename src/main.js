// 入口文件
import Vue from 'vue'

//导入App根组件
import app from './App.vue'

//导入vue路由
import VueRouer from 'vue-router'
Vue.use(VueRouer);

import { Header } from 'mint-ui';

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router  from "./router";

Vue.component(Header.name, Header);

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router
});