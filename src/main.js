// IE 11 hacks (do note delete)
require('es6-promise').polyfill();
Math.trunc = Math.trunc || function(x) {
  if (isNaN(x)) {return NaN;}
  if (x > 0) {return Math.floor(x);}
  return Math.ceil(x);};

// import core libraries
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import BootstrapVue from "bootstrap-vue";

// import CSS dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import font-awesome icons & associated components
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
Vue.component('v-icon', Icon);

// import custom components used within router
import Landing from './views/Landing.vue';
import Introduction from './views/Introduction.vue';

// import raw data object
import ExampleDataModel from './assets/models/ExampleDataModel.js';

// import main app component
import App from './App.vue';

// use core library dependencies
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

// define utility filters for number formatting
Vue.filter('threeDec', function (value) {return value.toFixed(3);})
Vue.filter('twoDec', function (value) {return value.toFixed(2);})
Vue.filter('oneDec', function (value) {return value.toFixed(1);})
Vue.filter('noDec', function (value) {return value.toFixed(0);})
Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {return value;}
  var formatter = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'EUR',minimumFractionDigits: 0});
  return formatter.format(value.toFixed(0));
});

// define app router component
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Landing',
      components: {main: Landing}
    },
    {
      path: '/introduction',
      name: 'Introduction',
      components: {main: Introduction}
    }
  ]
});

// define app data store component
const store = new Vuex.Store({state: {DataModel: ExampleDataModel,},mutations: {}, getters: {}});

// initialize main application
new Vue({store,el: '#app',router,template: '<App/>',components: { App }});
