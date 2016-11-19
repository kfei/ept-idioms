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
const MAXPART = 12;
const MAXCLASS = 10;

export default {
  name: 'nav-menu',
  data() {
    return {
      maxPart: MAXPART,
      maxClass: MAXCLASS,
    };
  },
  methods: {
    toggle() {
      this.$refs.sideNav.toggle();
    },
    randomCls() {
      const randomInt = (min, max) => {
        const lmin = Math.ceil(min);
        const lmax = Math.floor(max);
        return Math.floor(Math.random() * ((lmax - lmin) + 1)) + lmin;
      };
      this.selectCls(randomInt(1, MAXPART), randomInt(1, MAXCLASS));
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

<style scoped>
.md-toolbar > a {
  width: 100%;
}
.md-toolbar > a > img {
  max-height: 64px;
}
</style>
