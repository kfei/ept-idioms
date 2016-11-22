<template>
  <!-- FIXME: Can we have components having no template? -->
  <div style="display: none;"></div>
</template>

<script>
import { Howl } from 'howler';
import { mapGetters } from 'vuex';

let sound;

export default {
  computed: {
    ...mapGetters([
      'audioSrc',
    ]),
  },
  methods: {
    setPlayingStatus(status) {
      this.$store.commit({
        type: 'setPlaying',
        isPlaying: status,
      });
    },
    play() {
      sound.play();
      this.setPlayingStatus(true);
    },
    pause() {
      sound.pause();
      this.setPlayingStatus(false);
    },
    stop() {
      sound.stop();
      this.setPlayingStatus(false);
    },
  },
  watch: {
    audioSrc: function audioSrc() {
      this.setPlayingStatus(false);
      if (sound instanceof Howl) {
        sound.unload();
      }
      sound = new Howl({
        src: [this.audioSrc],
        loop: true,
        html5: true,
      });
    },
  },
};
</script>