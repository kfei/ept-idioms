<template>
  <div class="content-view" v-bind:class="{ 'light-off': lightOff }">
    <h3 v-if="showText && !textReady">Fetching class text...</h3>
    <ul v-if="showText && textReady" v-html="textContent"></ul>
    <img v-if="showTranslation" :src="imageSrc" class="translation" alt="translation">
    <audio-player ref="audioPlayer"></audio-player>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hammer from 'hammerjs';
import is from 'is_js';
import AudioPlayer from './AudioPlayer';

let mc;

export default {
  name: 'content-view',
  components: {
    AudioPlayer,
  },
  data() {
    return {
      showText: true,
      lightOff: false,
    };
  },
  computed: {
    showTranslation() {
      return !this.showText;
    },
    textContent() {
      return this.$store.state.textContent;
    },
    textReady() {
      return this.$store.state.textReady;
    },
    ...mapGetters([
      'imageSrc',
    ]),
  },
  methods: {
    toggleTranslation() {
      this.showText = !this.showText;
    },
    toggleLight() {
      this.lightOff = !this.lightOff;
      document.body.style.backgroundColor = this.lightOff ? '#333' : '#f7f7f7';
    },
    play() {
      this.$refs.audioPlayer.play();
    },
    pause() {
      this.$refs.audioPlayer.pause();
    },
    previousCls() {
      this.$store.commit('selectPreviousCls');
      this.$store.dispatch('fetchTextContent');
    },
    nextCls() {
      this.$store.commit('selectNextCls');
      this.$store.dispatch('fetchTextContent');
    },
  },
  mounted() {
    // Enable swipe gesture on mobile devices
    if (is.mobile()) {
      mc = new Hammer.Manager(this.$el);
      const Swipe = new Hammer.Swipe({
        direction: Hammer.DIRECTION_HORIZONTAL,
      });
      mc.add(Swipe);
      mc.on('swipeleft', this.nextCls);
      mc.on('swiperight', this.previousCls);
    }
  },
};
</script>

<style lang="stylus">
.content-view
  padding 6em 1em 2em 1em
  display flex
  justify-content center

  ul
    list-style-type none
    padding 0 1em
    font-size 1.2em
    margin-top 0
    margin-bottom 0

    li
      line-height 1.5em
    li.title
      font-weight 700
      line-height 2em
      font-size 1.3em
      color #269c2c
      &:not(:first-child)
        margin-top 1.5em
    li.narrator
      em
        text-decoration underline
    &.light-off
      li.title
        color #89de8e
      li.narrator
        color white

  img.translation
    filter grayscale(100%)

  &.light-off
    ul
      li.title
        color #89de8e
      li.narrator
        color white
    img.translation
      filter grayscale(100%) invert(100%)
</style>