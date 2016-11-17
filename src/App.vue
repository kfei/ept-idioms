<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <button v-on:click="changeColor">Click me</button>
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
  methods: {
    changeColor: function changeColor() {
      /* eslint-disable no-console */
      // console.log($(this.$el));
      $(this.$el).css('background-color', 'grey');
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
</style>
