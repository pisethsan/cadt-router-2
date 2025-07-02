import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Register from '@/pages/Register.vue'
import User from '@/pages/User.vue'
import NotFound from '@/pages/NotFound.vue'
import Sell from '@/pages/sell.vue'
import Careers from '@/pages/Careers.vue'
import History from '@/pages/History.vue'
import Services from '@/pages/Services.vue'
import Project from '@/pages/Project.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/register', component: Register },
    { path: '/users', component: User },
    { path: '/sell', component: Sell },
    { path: '/careers', component: Careers },
    { path: '/history', component: History },
    { path: '/services', component: Services },
    { path: '/project', component: Project },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    linkActiveClass: 'font-bold',
    linkExactActiveClass: 'font-bold',
    history: createWebHistory(),
    routes
})
export default router;