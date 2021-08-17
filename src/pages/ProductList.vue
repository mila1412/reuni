<template>
  <q-page id="productlist" class="q-pt-lg">
    <div class="container">
      <q-breadcrumbs class="text-bread q-pb-md q-pl-md" active-color="text-bread">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="text-bread"
          />
        </template>
        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="商品列表" />
      </q-breadcrumbs>
      <q-tabs mobile-arrows inline-label outside-arrows v-model="tab" class="tab">
        <q-tab name="全部" label="全部" @click="show(0)" />
        <q-tab name="千層" label="千層" @click="show(1)" />
        <q-tab name="軟餅乾" label="軟餅乾" @click="show(2)" />
        <q-tab name="雪Q餅" label="雪Q餅" @click="show(3)" />
        <q-tab name="瑪德蓮" label="瑪德蓮" @click="show(4)" />
        <q-tab name="檸檬塔" label="檸檬塔" @click="show(5)" />
        <q-tab name="香橙醬" label="香橙醬" @click="show(6)" />
      </q-tabs>
      <div class="row justify-center q-mb-lg">
        <div class="sidebar col-2">
          <div class="q-pa-md">
            <q-list bordered class="rounded-borders text-grey-8">
              <q-item
                clickable
                v-ripple
                :active="link === '全部商品'"
                @click="show(0)"
                active-class="menu-link"
              >
                <q-item-section>全部商品</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '千層蛋糕'"
                @click="show(1)"
                active-class="menu-link"
              >
                <q-item-section>千層蛋糕</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '軟餅乾'"
                @click="show(2)"
                active-class="menu-link"
              >
                <q-item-section>軟餅乾</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '雪Q餅'"
                @click="show(3)"
                active-class="menu-link"
              >
                <q-item-section>雪Q餅</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '瑪德蓮'"
                @click="show(4)"
                active-class="menu-link"
              >
                <q-item-section>瑪德蓮</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '檸檬塔'"
                @click="show(5)"
                active-class="menu-link"
              >
                <q-item-section>檸檬塔</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === '香橙醬'"
                @click="show(6)"
                active-class="menu-link"
              >
                <q-item-section>香橙醬</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="product in filterProducts" :key="product._id">
              <ProductCard :product="product"></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'PageProductList',
  data () {
    return {
      tab: '全部商品',
      link: '全部商品',
      products: [],
      display: 0
    }
  },
  components: {
    ProductCard
  },
  methods: {
    show (value) {
      this.display = value
      switch (value) {
        case 0:
          this.link = '全部商品'
          break
        case 1:
          this.link = '千層蛋糕'
          break
        case 2:
          this.link = '軟餅乾'
          break
        case 3:
          this.link = '雪Q餅'
          break
        case 4:
          this.link = '瑪德蓮'
          break
        case 5:
          this.link = '檸檬塔'
          break
        case 6:
          this.link = '香橙醬'
          break
        default:
          break
      }
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter(product => {
        if (this.display === 0) return true
        else if (this.display === 1 && product.category === '千層蛋糕') return true
        else if (this.display === 2 && product.category === '軟餅乾') return true
        else if (this.display === 3 && product.category === '雪Q餅') return true
        else if (this.display === 4 && product.category === '瑪德蓮') return true
        else if (this.display === 5 && product.category === '檸檬塔') return true
        else if (this.display === 6 && product.category === '香橙醬') return true
        else return false
      })
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
