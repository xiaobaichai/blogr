<template>
  <div>
      <b-nav></b-nav>
      <router-view></router-view>
      <b-bottom></b-bottom>
  </div>
</template>

<script>
// 引入组件
import BNav from '@/components/BNav.vue'
import BBottom from '@/components/BBottom.vue'

export default {
  name: 'bDashboard',
  components: { BNav, BBottom },
  methods: {

  },
  mounted () {
    this.$store.dispatch('getUserAcountAsync')
  }
}
</script>

<style>

</style>
