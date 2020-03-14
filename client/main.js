import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

// bootstrap responsive front-end component library
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// Components
import App from './App.vue';
import './main.html';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});
