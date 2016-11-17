<template>
  <md-sidenav class="md-left" ref="sideNav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>News</span>

        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Americas</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>

      <md-list-item>
        <md-icon>shopping_basket</md-icon>
        <span>Shop</span>
      </md-list-item>
    </md-list>

  </md-sidenav>
</template>

<script>
export default {
  name: 'nav-menu',
  methods: {
    toggle() {
      this.$refs.sideNav.toggle();
    },
  },
};
</script>

<style>
</style>
