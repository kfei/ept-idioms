<template>
  <md-toolbar style="border-bottom: 2px solid #eee;">
    <md-button class="md-icon-button" @click="toggleNavMenu">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">
    </h2>

    <md-button class="md-icon-button" @click="playAudio">
      <md-icon>play_arrow</md-icon>
    </md-button>
    <md-button class="md-icon-button" @click="pauseAudio">
      <md-icon>pause</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'top-bar',
    props: [
      'toggleNavMenu',
      'playAudio',
      'pauseAudio',
    ],
  };
</script>
