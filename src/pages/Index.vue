<template>
  <q-page id="index">
    <!-- 輪播圖 -->
    <div class="q-pb-lg">
      <q-carousel
        class="index-carousel"
        animated
        v-model="slide"
        infinite
        arrows
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" :img-src="require('../assets/ca4.jpg')" />
        <q-carousel-slide :name="2" :img-src="require('../assets/ca3.jpg')" />
        <q-carousel-slide :name="3" :img-src="require('../assets/ca2.jpg')" />
        <q-carousel-slide :name="4" :img-src="require('../assets/ca1.jpg')" />
      </q-carousel>
    </div>
    <q-img class="parallax01 planet-animate" :src="require('../assets/cake1.png')"/>
    <!-- <q-img class="parallax02 planet-animate" :src="require('../assets/cake2.png')"/>
    <q-img class="parallax03 planet-animate" :src="require('../assets/cake4.png')"/> -->
    <div class="container">
      <!-- 本月熱銷 -->
      <div class="text-center">
        <h4 class="index-title">本月熱銷</h4>
        <p class="q-pt-sm q-pb-lg">BESTSELLER</p>
        <div class="row">
          <div class="col-6 col-lg-3" v-for="product in products" :key="product._id">
            <router-link :to="'/product/'+product._id">
              <div class="image">
                <q-img :src="product.image1" class="inside-image"/>
              </div>
            </router-link>
            <p style="margin-top: 10px">{{ product.name }}</p>
          </div>
        </div>
      </div>
      <!-- 關於我們 -->
      <div class="text-center" style="padding-top: 80px;">
        <h4  class="index-title">關於我們</h4>
        <p class="q-pt-sm">ABOUT US</p>
        <div class="row q-pa-lg">
          <div class="col-12 col-lg-6">
            <div class="column justify-center text-left">
              <p class="about-title">任由尼甜點工作室 리유니디저트</p>
              <p class="about-text">手作美食新鮮現做，堅持選用當季食材，
              用自己喜歡的味道和口感來製作，希望你們也喜歡。
              檸檬塔、瑪德蓮、千層蛋糕、雪Q餅、棉花糖軟餅乾、香橙醬
              老闆的名字叫大俠。</p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="flex justify-end">
              <q-img :src="require('../assets/about.png')" style="width: 500px;"/>
            </div>
          </div>
        </div>
      </div>

      <!-- 顧客回饋 -->
      <div class="text-center" style="padding-top: 80px;">
        <h4 class="index-title">顧客回饋</h4>
        <p class="q-pt-sm q-pb-lg">FEEDBACK FROM INSTAGRAM</p>
        <div class="q-px-lg">
          <q-carousel
            v-model="slide2"
            transition-prev="slide-right"
            transition-next="slide-left"
            infinite
            swipeable
            animated
            control-color="brown-9"
            arrows
            height="400px"
            class="feedback1 bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb1.jpg')" />
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb11.png')" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb2.jpg')" />
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb22.png')" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb3.jpg')" />
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb33.png')" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb4.jpg')" />
                <q-img class="rounded-borders col-6 full-height" :src="require('../assets/fb44.png')" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="q-px-lg">
          <q-carousel
            v-model="slide3"
            vertical
            transition-prev="slide-down"
            transition-next="slide-up"
            infinite
            swipeable
            animated
            control-color="brown-9"
            arrows
            height="350px"
            class="feedback2 bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" :img-src="require('../assets/fb1.jpg')" />
            <q-carousel-slide :name="2" :img-src="require('../assets/fb11.png')" />
            <q-carousel-slide :name="3" :img-src="require('../assets/fb2.jpg')" />
            <q-carousel-slide :name="4" :img-src="require('../assets/fb22.png')" />
            <q-carousel-slide :name="5" :img-src="require('../assets/fb3.jpg')" />
            <q-carousel-slide :name="6" :img-src="require('../assets/fb33.png')" />
            <q-carousel-slide :name="7" :img-src="require('../assets/fb4.jpg')" />
            <q-carousel-slide :name="8" :img-src="require('../assets/fb44.png')" />
          </q-carousel>
        </div>
      </div>

      <!-- 即刻訂購 -->
      <div style="padding-top: 100px">
      <div class="q-pa-lg">
        <q-parallax :height="250">
          <template v-slot:media>
            <img :src="require('../assets/reserve.jpg')">
          </template>
          <q-btn color="brown-5" text-color="white" size="lg" outline to="/productlist">
            即刻預訂
          </q-btn>
        </q-parallax>
      </div>
      </div>
      <!-- 甜點直播間 -->
      <div class="text-center" style="padding: 80px 0 50px 0;">
        <h4 class="index-title">甜點直播間</h4>
        <p class="q-pt-sm">VIDEOS</p>
        <div class="row">
          <div class="col-12 col-lg-4 q-pa-lg">
            <q-video
              :ratio="1"
              :src="require('../assets/v1.mp4')"
            />
            <p class="q-pa-lg" style="font-weight:bold;">《千層蛋糕製作》</p>
          </div>
          <div class="col-12 col-lg-4 q-pa-lg">
            <q-video
              :ratio="1"
              :src="require('../assets/v2.mp4')"
            />
            <p class="q-pa-lg" style="font-weight:bold;">《棉花糖餅乾出爐》</p>
          </div>
          <div class="col-12 col-lg-4 q-pa-lg">
            <q-video
              :ratio="1"
              :src="require('../assets/v3.mp4')"
            />
            <p class="q-pa-lg" style="font-weight:bold;">《焦香千層薄餅皮》</p>
          </div>
        </div>
      </div>
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="2800" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="blue-grey-3" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import { gsap, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
gsap.to('.parallax01', {
  scrollTrigger: {
    trigger: '.parallax01',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: 1
  },
  top: '50%'
})
// gsap.to('.parallax02', {
//   scrollTrigger: {
//     trigger: '.parallax02',
//     start: 'top 50%',
//     end: 'bottom 50%',
//     scrub: 1
//   },
//   top: '50%'
// })
// gsap.to('.parallax03', {
//   scrollTrigger: {
//     trigger: '.parallax03',
//     start: 'top 50%',
//     end: 'bottom 50%',
//     scrub: 1
//   },
//   top: '50%'
// })

export default {
  name: 'PageIndex',
  data () {
    return {
      autoplay: true,
      slide: 1,
      slide2: 1,
      slide3: 1,
      products: []
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/products')
      this.products = data.result.map(product => {
        if (product.image1) {
          product.image1 = `${process.env.API_URL}/files/${product.image1}`
        }
        return product
      })
      this.products = this.products.filter(product => {
        product = product.description.includes('本月熱銷')
        return product
      })
    } catch (error) {
      this.$q.notify({
        message: '取得商品失敗',
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
