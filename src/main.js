import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router'
import RouterConf from './router/router'
import Vuex from 'vuex'
// MyPlugin.install = (Vue,options){

// }

// 使用router插件
Vue.use(VueRouter)

// 使用vuex插件
Vue.use(Vuex)


const router = new VueRouter(RouterConf)


router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    console.log(to)
    if(window.sessionStorage.getItem("token")||to.path==="/about"){
        next()
    }else{
        next('/about')
    }
})

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
})

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrease(state){
            state.count--;
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
