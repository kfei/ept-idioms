<template>
  <div id="app" class="pushable">
    <div class="ui large button" v-on:click="toggleSidebar">Toggler</div>
    <div class="ui inverted labeled icon left inline vertical sidebar menu">
      <a class="item">
        <i class="home icon"></i>
        Home
      </a>
      <a class="item">
        <i class="block layout icon"></i>
        Topics
      </a>
      <a class="item">
        <i class="smile icon"></i>
        Friends
      </a>
      <a class="item">
        <i class="calendar icon"></i>
        History
      </a>
    </div>
    <hello class="pusher"></hello>
  </div>
</template>

<script>
import $ from 'jquery';
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  mounted: function created() {
    $(this.$el).find('.ui.sidebar')
      .sidebar({
        context: $('#app.pushable'),
        transition: 'overlay',
      });
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      /* eslint-disable no-console */
      $(this.$el).find('.ui.sidebar').sidebar('toggle');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .ui.button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100px;
}
</style>
