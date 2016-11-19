<template>
  <div class="content-view">
    <h3 v-if="showText && !textReady">Fetching class text...</h3>
    <ul v-if="showText && textReady" v-html="textContent"></ul>
    <img v-if="showTranslation" :src="imageSrc" class="translation" alt="translation">
    <audio>
      <source :src="audioSrc" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

let $audioEle;

export default {
  name: 'content-view',
  data() {
    return {
      showText: true,
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
      'audioSrc',
      'imageSrc',
    ]),
  },
  watch: {
    audioSrc: function audioSrc() {
      this.pause();
    },
  },
  methods: {
    toggleTranslation() {
      this.showText = !this.showText;
    },
    play() {
      $audioEle.load();
      // http://stackoverflow.com/a/9512994/2504317
      $audioEle.oncanplaythrough = $audioEle.play();
      this.$store.commit({
        type: 'setPlaying',
        isPlaying: true,
      });
    },
    pause() {
      $audioEle.pause();
      this.$store.commit({
        type: 'setPlaying',
        isPlaying: false,
      });
    },
  },
  mounted() {
    $audioEle = this.$el.querySelector('audio');
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.content-view {
  padding: 2em 1em;
  display: flex;
  justify-content: center;
}

.content-view img.translation {
  filter: grayscale(100%);
}
</style>

<style>
.content-view ul {
  list-style-type: none;
  padding: 0 1em;
  font-size: 1.2em;
  margin-top: 0;
  margin-bottom: 0;
}

.content-view li {
  line-height: 1.5em;
}

.content-view li.title:not(:first-child) {
  margin-top: 2em;
}

.content-view li.title {
  font-weight: 700;
  line-height: 2em;
}

.content-view li.narrator em {
  text-decoration: underline;
}
</style>