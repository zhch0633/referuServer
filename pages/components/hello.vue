<template>
<div>
  <mu-appbar title="Title">
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>
  <AppMenu/>
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
</style>
