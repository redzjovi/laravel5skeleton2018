
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('@fortawesome/fontawesome-free');
require('bootstrap-select');
require('select2');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('textarea-tinymce', require('./components/TextareaTinymceComponent.vue').default);

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app'
});
