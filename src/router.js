import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search';
import Playlist from "./views/Playlist";
import Artists from "./views/Artists";
Vue.use(Router);

export default new Router({
    routes:
    [
        {
            path: '/playlist/add',
            name: 'Search',
            component: Search,
        },
        {
            path: '/playlist',
            name: 'Playlist',
            component: Playlist,
        },
        {
            path: '/artists',
            name: 'artists',
            component: Artists,
        },
    ]
});