<template>
  <div id="app" v-md-theme="'default'">
    <top-bar :toggle-nav-menu="toggleNavMenu"></top-bar>
    <nav-menu ref="navMenu"></nav-menu>
    <content-view></content-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import NavMenu from './components/NavMenu';
import ContentView from './components/ContentView';

export default {
  name: 'app',
  components: {
    TopBar,
    NavMenu,
    ContentView,
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
