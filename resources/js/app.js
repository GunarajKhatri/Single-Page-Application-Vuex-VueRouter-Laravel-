/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
/*let Add=require('./components/Add.vue').default;
let Showstd=require('./components/Showstd.vue').default;
let Update=require('./components/Update.vue').default;*/
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import StoreData from './store';
import {routes} from './routes';
Vue.use(Vuex);
Vue.use(VueRouter);
const store=new Vuex.Store(StoreData);
/*const routes=[
         {
             	path:'/stds/create',component:Add,
             },
             {
             	 path:'/stds',component:Showstd,
             	 
             },
             {
                 path:'/stds/:id/update',component:Update,
                 
             }

];*/

const router=new VueRouter({
	mode:'history',
	routes
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('mainbody', require('./components/mainbody.vue').default);


const app = new Vue({
    el: '#app',
    store,
    router,
});
