import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router'
import RouterConf from './router/router'
import Vuex from 'vuex'
import storeConf from './store/store'
// MyPlugin.install = (Vue,options){

// }

// 使用router插件
Vue.use(VueRouter)

// 使用vuex插件
Vue.use(Vuex)

const router = new VueRouter(RouterConf)

const store = new Vuex.Store({
    modules:{
        storeConf
    }
})

router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    if(window.sessionStorage.getItem("token")||to.path==="/about"){
        next()
    }else{
        next('/about')
    }
})

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
