<template>
  <div id="app">
    dsdsd
    <nuxt-link to="/components/hello">hello world</nuxt-link>
    <nuxt-link to="/components/apitest">API testing</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:10em;
  margin-top: 0px;
}

#__nuxt {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

html{
  width: 100%;
  height: 100%;
}
</style>
