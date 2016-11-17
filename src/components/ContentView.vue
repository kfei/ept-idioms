<template>
  <div class="content-view">
    <h3>Content view</h3>
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
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.content-view {
  background-color: #eee;
  padding: 15em 0;
}
</style>
