import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Demo from '@/pages/Demo.vue'
import Documentation from '@/pages/Documentation.vue'

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/' , name: 'Demo', component: Demo },
        {path: '/documentation' , name: 'Documentation', component: Documentation },
    ]
})



export default routers