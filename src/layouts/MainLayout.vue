
<template>
  <q-layout view="hHh lpR fff" id="mainlayout">
    <q-header class="bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="header">
            <!-- logo -->
            <div class="text-center mobile-hide">
              <router-link to='/'>
                <q-img :src="require('../assets/logoword.png')" style="width: 180px; margin: 20px 0 20px 0px" />
              </router-link>
            </div>
            <div class="mobile-only">
              <router-link to='/'>
                <q-img :src="require('../assets/logo.png')" style="width: 100px; margin: 20px" />
              </router-link>
            </div>
            <!-- icon -->
            <span class="fixed-top-right" style="top: 10px; right: 10px;">
              <q-btn dense flat round icon="face" class="text-icon">
                <q-menu
                  :offset="[40, 10]"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-list v-if="!user.isLogin" style="min-width: 100px">
                    <q-item clickable to='/register'>
                      <q-item-section>註冊</q-item-section>
                    </q-item>
                    <q-item clickable to='/login'>
                      <q-item-section>登入</q-item-section>
                    </q-item>
                  </q-list>
                  <q-list v-if="user.isLogin" style="min-width: 100px">
                    <q-item clickable to='/orders'>
                      <q-item-section>我的訂單</q-item-section>
                    </q-item>
                    <q-item clickable to='/profile'>
                      <q-item-section>修改會員資料</q-item-section>
                    </q-item>
                    <q-item clickable @click="logout">
                      <q-item-section>登出</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <q-btn dense flat round icon="favorite_border" class="text-icon" @click="getFav">
                <q-popup-proxy v-if="user.isLogin && favs.length > 0" :offset="[100, 10]">
                  <q-banner class="favorite">
                    <q-list v-for="(fav, index) in favs" :key="index">
                      <q-item>
                        <q-item-section>
                          <q-item-label>
                            <q-avatar size="35px">
                              <img :src="fav.product.image1">
                            </q-avatar>
                          </q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label> {{ fav.product.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>$ {{ fav.product.price }}</q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>
                            <q-icon size="xs" name="add_shopping_cart" @click="addCart(fav.product._id)"></q-icon>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-banner>
                </q-popup-proxy>
              </q-btn>
              <q-btn dense flat round icon="shopping_cart" class="text-icon" outline @click="cart" to='/cart'>
                <q-badge color="red-5" rounded floating transparent>
                  <span v-if="!user.isLogin">{{ cartBefore }}</span>
                  <span v-else>{{ cartAmount }}</span>
                </q-badge>
              </q-btn>
            </span>
          </div>
          <!-- tab 選單 -->
          <div class="nav flex justify-center">
            <q-btn flat :ripple="false" class="text-option" to='/news'>♡ 最新消息</q-btn>
            <q-btn flat :ripple="false" class="text-option" to='/productlist'>♡ 商品列表</q-btn>
            <q-btn flat :ripple="false" class="text-option" to='/FAQ'>♡ 常見問題</q-btn>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-7 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <div class="q-pa-sm">
            <p style="font-size: 13px; margin-bottom: 5px;">Copyright © 2021 本網站僅為練習用，訂購請至原賣場。</p>
            <q-btn dense flat round icon="fab fa-github" @click="openLink('https://github.com/mila1412')"></q-btn>
            <q-btn dense flat round icon="fab fa-linkedin" @click="openLink('https://www.linkedin.com/in/%E5%AE%9C%E7%92%87-%E5%90%B3-6b1ba9219/')"></q-btn>
            <q-btn dense flat round icon="fab fa-instagram" @click="openLink('https://www.instagram.com/reuni_dessert/')"></q-btn>
            <q-btn dense flat round @click="openLink('https://shopee.tw/product/36065088/8236704833?smtt=0.36066472-1620697178.9')">
              <q-img :src="require('../assets/shopee.png')" style="width: 23px; margin-bottom: 6px;"></q-img>
            </q-btn>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      favs: []
    }
  },
  computed: {
    cartAmount () {
      return this.$store.state.user.cartAmount
    },
    cartBefore () {
      return this.$store.state.user.cartBefore
    }
  },
  methods: {
    openLink (url, target = '_blank') {
      open(url, target)
    },
    cart () {
      if (this.$store.state.user.jwt.token.length === 0) {
        this.$q.notify({
          message: '請先登入',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        this.$router.push('/login')
      }
    },
    async logout () {
      try {
        await this.$axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$store.commit('user/logout')
        this.$store.commit('user/cartLogout')
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$q.notify({
          message: '發生錯誤',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async getFav () {
      if (this.$store.state.user.jwt.token.length === 0) {
        this.$q.notify({
          message: '請先登入',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        this.$router.push('/login')
      }
      const { data } = await this.$axios.get('/users/favorite', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.favs = data.result.map(item => {
        item.product.image1 = `${process.env.API_URL}/files/${item.product.image1}`
        return item
      })
      if (this.favs.length === 0) {
        this.$q.notify({
          message: '我的最愛沒有東西喔',
          timeout: 1000,
          icon: 'sentiment_dissatisfied',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    // 我的最愛加入購物車
    async addCart (id) {
      this.$store.dispatch('user/addCart', { product: id }).then((res) => {
        this.$q.notify({
          message: '已加入購物車',
          timeout: 1000,
          type: 'positive',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      })
        .catch((error) => {
          console.log(error)
          this.$q.notify({
            message: '加入購物車失敗',
            timeout: 1000,
            type: 'negative',
            color: 'faded',
            textColor: 'white',
            position: 'top'
          })
        })

      // 刪除我的最愛
      await this.$axios.patch('/users/favorite', { product: id }, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      const index = this.favs.findIndex(item => item.product._id === id)
      this.favs.splice(index, 1)
    }
  },
  async mounted () {
    // console.log('main')
    if (this.$store.state.user.jwt.token.length === 0) return
    const diff = Date.now() - this.$store.state.user.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.$axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$store.commit('user/extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      const { data } = await this.$axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.$store.commit('user/getInfo', data.result)
    } catch (error) {
      this.$store.commit('user/logout')
    }
  }
}
</script>
