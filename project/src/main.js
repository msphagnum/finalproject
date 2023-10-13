import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import HomePage from './components/HomeComp.vue'
import ChatPage from './components/ChatComp.vue'
import TestApi from './components/TestApi.vue'
import NotFoundPage from './components/NotFound.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatPage
    },
    {
        path: '/test',
        name: 'TestApi',
        component: TestApi
    },
    {
        path: '/:pathmatch(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)


const app = createApp(App)
app.use(router)
app.mount('#app')