import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Login from './views/Login';
import Modificar from './views/Modificar';
import Eliminar from './views/Eliminar'




Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/modificar',
            name:'modificar',
            component: Modificar
        },
        {
            path:'/eliminar',
            name:'eliminar',
            component: Eliminar
        },



    ]
})