import Vue from 'vue';
import ons from 'onsenui';
import VueOnsen from 'vue-onsenui';
import App from './App';

import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';

Vue.use(VueOnsen);

ons.ready(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
  });
});
