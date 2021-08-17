<template>
  <q-page id="news" class="q-pa-lg">
    <div class="container">
      <q-breadcrumbs class="text-bread q-pl-md" active-color="text-bread">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="text-bread"
          />
        </template>
        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="最新消息" />
      </q-breadcrumbs>
      <div class="row justify-center post-row" v-for="post in posts" :key="post._id">
        <div class="col-12 col-lg-5">
          <q-img :src="post.image1" />
        </div>
        <div class="col-12 col-lg-5 post-text">
          <p class="post-title">{{ post.title }}</p>
          <p class="post-description">{{ post.description }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageNews',
  data () {
    return {
      posts: []
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/news')
      this.posts = data.result.map(post => {
        if (post.image1) {
          post.image1 = `${process.env.API_URL}/files/${post.image1}`
        }
        return post
      })
      this.posts = this.posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    } catch (error) {
      this.$q.notify({
        message: '取得資訊失敗',
        timeout: 1000,
        type: 'negative',
        color: 'faded',
        textColor: 'white',
        position: 'top'
      })
    }
  }
}
</script>
