<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <ons-switch
      @change="onChange"
      :checked="switchState"
    >
    <div>
      Switch is {{ switchState ? 'on' : 'off' }}
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  data() {
    return {
      switchState: true,
    };
  },
  methods: {
    onChange: function onChange(event) {
      /* eslint-disable no-console */
      // console.log($(this.$el));
      this.switchState = event.target.checked;
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
