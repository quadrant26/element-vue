import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Goods from './components/goods/Goods.vue'
import Sellers from './components/sellers/Sellers.vue'
import Ratings from './components/ratings/Ratings.vue'

import './common/stylus/index.styl'

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
    linkActiveClass : 'active'
});

router.map({
    '/goods' :{
        component : Goods
    },
    '/sellers' : {
        component: Sellers
    },
    '/ratings' : {
        component: Ratings
    }
});

router.start(app, '#app');

router.go('/goods');


/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
