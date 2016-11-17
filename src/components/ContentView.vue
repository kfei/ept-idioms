<template>
  <div class="content-view">
    content view block
  </div>
</template>

<script>
export default {
  name: 'content-view',
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.content-view {
  background-color: #eee;
  height: 360px;
}
</style>
