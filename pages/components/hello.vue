<template>
<div id="container">
  <mu-appbar title="Title" id="titlebar">
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>
  <mu-paper id="sidemenu">
     <AppMenu/>
  </mu-paper>
  <div id="subcontent">
   dasdaas
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import MuseUI from 'muse-ui'
import AppMenu from '../components/menulist.vue'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)

export default {
  name: 'hello',
  components:{AppMenu},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#__nuxt {
  width: 100%;
  height: 100%;
}

#titlebar {
  height: 4em;
  position:fixed;
}

#container{
  width: 100%;
  height:100%;
}
#sidemenu {
  padding-top:4em;
  width:20em;
  height:100%;
  float: left;
}

#subcontent {
  padding-top:4em;
  flow: left;
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
