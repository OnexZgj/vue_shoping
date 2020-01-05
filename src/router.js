import VueRouter from 'vue-router'

//导入组件是一定要保留后缀，否则会报错
import HomeComponent from "./components/HomeComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import MemberComponent from "./components/MemberComponent.vue";
import ShopCarComponent from "./components/ShopCarComponent.vue";

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        {path: "/",redirect:'/home'},
        {path: '/home', component: HomeComponent},
        {path: '/search', component: SearchComponent},
        {path: '/member', component: MemberComponent},
        {path: '/shop', component: ShopCarComponent},
    ],
    linkActiveClass: 'mui-active',
});

// 把路由对象暴露出去
export default router