<template>
  <div id="app" v-md-theme="'default'">
    <!-- Topbar -->
    <md-toolbar style="border-bottom: 2px solid #eee;">
      <md-button class="md-icon-button" @click="toggleNavMenu">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">ept-idioms</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <img src="./assets/logo.png">

    <nav-menu ref="navMenu"></nav-menu>

    <content-view></content-view>
  </div>
</template>

<script>
import ContentView from './components/ContentView';
import NavMenu from './components/NavMenu';

export default {
  name: 'app',
  components: {
    ContentView,
    NavMenu,
  },
  methods: {
    toggleNavMenu() {
      this.$refs.navMenu.toggle();
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
}
</style>
