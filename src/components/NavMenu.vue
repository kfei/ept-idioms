<template>
  <md-sidenav class="md-left" ref="sideNav">
    <md-toolbar>
        <a>
          <img src="../assets/logo.png" alt="logo">
        </a>
    </md-toolbar>

    <md-list>
      <md-list-item @click="randomCls()">
        <md-icon>grain</md-icon>
        <span>Random</span>
      </md-list-item>

      <md-list-item v-for="part in maxPart">
        <md-icon>bookmark</md-icon>
        <span>Part {{ part }}</span>

        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset" v-for="cls in maxClass" @click="selectCls(part, cls)">
              Class {{ cls }}
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
import config from '../config';

export default {
  name: 'nav-menu',
  data() {
    return {
      maxPart: config.MAX_PART,
      maxClass: config.MAX_CLASS,
    };
  },
  methods: {
    toggle() {
      this.$refs.sideNav.toggle();
      document.querySelector('.md-sidenav-content').scrollTop = 0;
    },
    randomCls() {
      this.$store.commit({
        type: 'randomCls',
      });
      this.$store.dispatch('fetchTextContent');
      this.$refs.sideNav.close();
    },
    selectCls(p, c) {
      this.$store.commit({
        type: 'selectCls',
        part: p,
        cls: c,
      });
      this.$store.dispatch('fetchTextContent');
      this.$refs.sideNav.close();
    },
  },
};
</script>

<style lang="stylus">
.md-sidenav
  .md-sidenav-content
    position fixed
    top 0
  .md-toolbar
    a
      width 100%
      img
        max-height 64px
</style>