import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router'
import RouterConf from './router/router'

// MyPlugin.install = (Vue,options){

// }

Vue.use(VueRouter)



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

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
