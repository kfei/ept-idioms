<template>
  <md-toolbar style="border-bottom: 2px solid #eee;">
    <md-button class="md-icon-button" @click="toggleNavMenu">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1" @click="toggleNavMenu">
      {{ part }} {{ cls }}
    </h2>

    <md-button v-if="!isPlaying" class="md-icon-button" @click="playAudio">
      <md-icon>play_arrow</md-icon>
    </md-button>
    <md-button v-if="isPlaying" class="md-icon-button" @click="pauseAudio">
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
  props: [
    'toggleNavMenu',
    'toggleTranslation',
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

<style scoped>
.md-toolbar {
  position: fixed;
  width: 100%;
}
</style>
