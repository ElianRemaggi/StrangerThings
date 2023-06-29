//Sistema de rutas principal

import { createRouter, createWebHistory } from 'vue-router';

import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import { characterRoute } from '@/characters/router';
import NotFound from '@/shared/pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //publics
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: NotFound,
        },
        {
            ...characterRoute,
            path: '/characters'
        },

        //1 characterRoute,

        //Characters
        /*
        {
            path: '/characters',
            name: 'characters',
            component: () => import('@/characters/layout/CharacterLayout.vue')
        },
        */
        //Default
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'notFound' })
        }
    ]
});

//1 router.addRoute(characterRoute);

export default router;