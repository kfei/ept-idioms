<template>
  <md-toolbar style="border-bottom: 2px solid #eee;">
    <md-button class="md-icon-button" @click="toggleNavMenu">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1" @click="toggleNavMenu">
      {{ part }} {{ cls }}
    </h2>

    <md-switch v-model="checked0" @change="toggleLight"></md-switch>

    <md-button v-if="!isPlaying" class="md-icon-button" @click="playAudio">
      <md-icon>play_arrow</md-icon>
    </md-button>
    <md-button v-else class="md-icon-button" @click="pauseAudio">
      <md-icon>pause</md-icon>
    </md-button>

    <md-button class="md-icon-button" @click="toggleTranslation">
      <md-icon>translate</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'top-bar',
  data() {
    return {
      checked0: false,
    };
  },
  props: [
    'toggleNavMenu',
    'toggleTranslation',
    'toggleLight',
    'playAudio',
    'pauseAudio',
  ],
  computed: mapState([
    'part',
    'cls',
    'isPlaying',
  ]),
};
</script>

<style lang="stylus" scoped>
.md-toolbar
  position fixed
  width 100%
</style>
