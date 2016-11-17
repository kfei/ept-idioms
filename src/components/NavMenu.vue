<template>
  <md-sidenav class="md-left" ref="sideNav">
    <md-toolbar>
        <a>
          <img src="../assets/logo.png" alt="logo">
        </a>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>grain</md-icon>
        <span>Random</span>
      </md-list-item>

      <md-list-item v-for="part in maxPart">
        <md-icon>bookmark</md-icon>
        <span>Part {{ part }}</span>

        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset" v-for="cls in maxClass">
              Class {{ cls }}
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
const MAXPART = 12;
const MAXClASS = 10;

export default {
  name: 'nav-menu',
  data() {
    return {
      maxPart: MAXPART,
      maxClass: MAXClASS,
    };
  },
  methods: {
    toggle() {
      this.$refs.sideNav.toggle();
    },
  },
};
</script>

<style scoped>
.md-toolbar > a {
  width: 100%;
}
.md-toolbar > a > img {
  max-height: 64px;
}
</style>
