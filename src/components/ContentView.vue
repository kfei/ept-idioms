<template>
  <div class="content-view">
    <ul>
      <li class="title">above all</li>
      <li class="narrator"><em>Above all</em>, we must finish the work at hand.</li>
      <li class="title">after all</li>
      <li class="narrator">Don't blame John for breaking that vase; he is a child <em>after all</em>.</li>
      <li class="title">again and again</li>
      <li class="narrator">The girl had to repeat that single phrase <em>again and again</em> to memorize it.</li>
      <li class="title">all along</li>
      <li class="narrator">Did you know that the radio was on <em>all along</em>?</li>
    </ul>
    <audio>
      <source :src="audioURLPrefix + cls + part + '.mp3'" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
const audioURLPrefix = 'https://s3-ap-northeast-1.amazonaws.com/kfei-app-assets/ept-idioms/';

export default {
  name: 'content-view',
  data() {
    return {
      part: '01',
      cls: '01',
      audioURLPrefix,
    };
  },
  methods: {
    play() {
      this.$el.querySelector('audio').play();
    },
    pause() {
      this.$el.querySelector('audio').pause();
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
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
  padding: 3em 1em;
}
</style>
