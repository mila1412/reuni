
<template>
  <q-layout view="hHh lpR fff" id="adminlayout">
    <q-header class="bg-admin">
    <div class="container">
      <q-toolbar>
        <q-toolbar-title class="flex">
          <q-avatar>
            <img :src="require('../assets/logo.jpg')">
          </q-avatar>
          <div>
            <q-btn flat to='/admin/products'>商品管理</q-btn>
            <q-btn flat to='/admin/orders'>訂單管理</q-btn>
            <q-btn flat to='/admin/members'>會員管理</q-btn>
            <q-btn flat to='/admin/news'>最新消息</q-btn>
          </div>
          <q-space />
          <span><q-btn flat @click="logout">登出</q-btn></span>
        </q-toolbar-title>
      </q-toolbar>
      </div>
    </q-header>

    <vue-page-transition  name="fade-in-right" style="padding:50px 0px 50px 0">
      <router-view />
    </vue-page-transition>
  </q-layout>
</template>

<script>
export default {
  name: 'AdminLayout',
  methods: {
    async logout () {
      try {
        await this.$axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$store.commit('user/logout')
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        console.log(this.$store.state)
        console.log(error)
        this.$q.notify({
          message: '發生錯誤',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    }
  }
}
</script>
