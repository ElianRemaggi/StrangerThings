import type { RouteRecordRaw } from 'vue-router';

import CharacterLayout from '@/characters/layout/CharacterLayout.vue';
import CharacterId from '@/characters/pages/CharacterId.vue';
import CharacterList from '@/characters/pages/CharacterList.vue';
import CharacterSearch from '@/characters/pages/CharacterSearch.vue';


export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    name: 'characters',
    component: CharacterLayout,
    children: [
        {
            path: 'by/id',
            name: 'characters-id',
            props: { title: "Por id", visible: false, },
            component: CharacterId
        }
        ,
        {
            path: 'list',
            name: 'character-list',
            props: { title: "Lista", visible: true, },
            component: CharacterList
        }
        ,
        {
            path: 'search',
            name: 'character-searcg',
            props: { title: "Busqueda", visible: true, },
            component: CharacterSearch
        }
    ]
};
