<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getArticleCount } from '@/api/index.js'
export default {
  created () {
    getArticleCount().then((res) => { console.log(res) })
  }
}

</script>

<style>
@import './assets/css/normalize.css';
</style>
