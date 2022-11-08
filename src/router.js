import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/' , name: 'Demo', component: Demo },
        {path: '/documentation' , name: 'Documentation', component: Documentation },
    ]
})



export default routers