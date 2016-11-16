<template>
  <div id="app">
    <ons-page>
      <ons-toolbar>
        <div class="left">
          <ons-toolbar-button>
            <ons-icon icon="ion-navicon, material:md-menu"></ons-icon>
          </ons-toolbar-button>
        </div>
        <div class="center">ept-idioms</div>
      </ons-toolbar>
      <img src="./assets/logo.png">
      <index></index>
      <p style="text-align: center">
        <ons-button
          @click="$notification.alert(message)"
        >
          Click me!
        </ons-button>
      </p>
      <p style="height: 400px;">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illum cumque placeat nostrum fuga ipsam eveniet ab incidunt perspiciatis laudantium, vel aut eligendi qui sed cum fugiat harum praesentium nesciunt.
      </p>
    </ons-page>
  </div>
</template>

<script>
// import $ from 'jquery';
import Index from './components/Index';

export default {
  name: 'app',
  components: {
    Index,
  },
  data() {
    return {
      message: 'Hello world!',
    };
  },
  methods: {
    onChange: function onChange(event) {
      /* eslint-disable no-console */
      // console.log($(this.$el));
      this.switchState = event.target.checked;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
