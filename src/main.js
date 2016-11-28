import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App';
import store from './store';

Vue.use(VueMaterial);
Vue.material.theme.register('default', {
  primary: 'white',
  accent: 'black',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
