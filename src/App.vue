<template>
  <div id="app" v-md-theme="'default'">
    <top-bar
      :toggle-nav-menu="toggleNavMenu"
      :play-audio="playAudio"
      :pause-audio="pauseAudio"
      :toggle-translation="toggleTranslation"
      :toggle-light="toggleLight"></top-bar>
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
    toggleTranslation() {
      this.$refs.contentView.toggleTranslation();
    },
    toggleLight() {
      this.$refs.contentView.toggleLight();
    },
    playAudio() {
      this.$refs.contentView.play();
    },
    pauseAudio() {
      this.$refs.contentView.pause();
    },
  },
  mounted() {
    this.$store.dispatch('fetchTextContent');
  },
};
</script>

<style lang="stylus">
body
  background-color #f7f7f7
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>