import Index from '../components/index.vue'
import About from '../components/about.vue'
import User from '../components/user.vue'


const Routers = [
    {
        path: '/index',
        component: Index,
        meta: {
            title:'index',
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title:'about',
        }
    },
    {
        path: '/user/:id',
        component: User,
        meta: {
            title:'user',
        }
    },
    {
        path: '*',
        redirect: '/index',
        meta: {
            title:'index',
        }
    }
]


const RouterConf = {
    // mode: 'history',
    routes: Routers,
}

export default RouterConf