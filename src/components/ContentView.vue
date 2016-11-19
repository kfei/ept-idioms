<template>
  <div class="content-view">
    <ul v-if="showText">
      <li class="title">above all</li>
      <li class="narrator"><em>Above all</em>, we must finish the work at hand.</li>
      <li class="title">after all</li>
      <li class="narrator">Don't blame John for breaking that vase; he is a child <em>after all</em>.</li>
      <li class="title">again and again</li>
      <li class="narrator">The girl had to repeat that single phrase <em>again and again</em> to memorize it.</li>
      <li class="title">all along</li>
      <li class="narrator">Did you know that the radio was on <em>all along</em>?</li>
    </ul>
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

ul {
  list-style-type: none;
  padding: 0 1em;
  font-size: 1.2em;
}

li {
  line-height: 1.5em;
}

li.title:not(:first-child) {
  margin-top: 2em;
}

li.title {
  font-weight: 700;
  line-height: 2em;
}

li.narrator em {
  text-decoration: underline;
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
