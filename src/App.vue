<template>
  <div id="app" v-md-theme="'default'">
    <top-bar
      :toggle-nav-menu="toggleNavMenu"
      :play-audio="playAudio"
      :pause-audio="pauseAudio"></top-bar>
    <nav-menu ref="navMenu"></nav-menu>
    <content-view ref="contentView"></content-view>
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
    playAudio() {
      this.$refs.contentView.play();
    },
    pauseAudio() {
      this.$refs.contentView.pause();
    },
  },
};
</script>

<style>
body {
  background-color: #f7f7f7;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
