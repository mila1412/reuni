<template>
  <q-page id="singleproduct" class="q-pa-lg">
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
        <q-breadcrumbs-el label="商品列表" to="/productlist"/>
        <q-breadcrumbs-el />
        <span style="margin-left:0">{{ name }}</span>
      </q-breadcrumbs>
      <q-overlay v-model="model">
        <template v-slot:body>
          <div class="absolute fit row text-white text-h5 justify-center items-center">
            已下架
          </div>
        </template>
        <div class="row">
          <div class="left-image col-12 col-md-6">
            <div class="q-pa-md">
              <div class="mobile-only">
                <q-img :src="image1" />
              </div>
              <q-carousel
                class="carousel mobile-hide"
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
              >
                <q-carousel-slide :name="1" :img-src="image1" v-if="imageText1 !== undefined"/>
                <q-carousel-slide :name="2" :img-src="image2" v-if="imageText2 !== undefined"/>
                <q-carousel-slide :name="3" :img-src="image3" v-if="imageText3 !== undefined"/>
                <q-carousel-slide :name="4" :img-src="image4" v-if="imageText4 !== undefined"/>
              </q-carousel>
            </div>
          </div>
          <div class="right-text col-12 col-md-6 column justify-evenly">
            <h5 class="text-weight-bold">{{ name }}</h5>
            <div>
              <span class="text-grey-6" style="font-size: 14px">建議售價</span>
              <h5 class="text-cart text-weight-bold">NT${{ price }}</h5>
            </div>
            <div>
              <span class="text-grey-6" style="font-size: 14px">數量</span>
              <q-input v-model.number="number" type="number" readonly outlined class="product-input" :rules="[val => val > 0 || '請輸入正確數量']">
                <template v-slot:prepend>
                  <q-btn
                    dense
                    flat
                    icon="remove"
                    class="number-btn"
                    @click="numberSub"
                  />
                </template>
                <template v-slot:append>
                  <q-btn
                    dense
                    flat
                    icon="add"
                    class="number-btn"
                    @click="numberAdd"
                  />
                </template>
              </q-input>
            </div>
            <div class="text-cart" style="white-space: nowrap;">
              <q-btn style="width: 50%" @click="addCart">加入購物車</q-btn>
              <q-btn style="width: 50%" @click="addFav">我的最愛</q-btn>
            </div>
            <div style="white-space: pre-line;">
              🏷️ 消費滿300元可鳳山面交
              🏷️ 消費滿500元可高雄外送到府（照距離加收70-100元）
              🏷️ 宅配皆有風險，可接受再下單
            </div>
          </div>
        </div>
      </q-overlay>
      <div class="q-gutter-y-md" style="padding: 50px 0px 100px 0">
        <q-tabs v-model="tab" class="bg-grey-1 text-bread" align="justify">
          <q-tab :ripple="false" name="商品介紹" label="商品介紹" />
          <q-tab :ripple="false" name="宅配須知" label="宅配須知" />
          <q-tab :ripple="false" name="面交須知" label="面交須知" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="商品介紹" >
            {{ description }}
          </q-tab-panel>

          <q-tab-panel name="宅配須知">
            宅配週日休息，週一上工，
            所以週六寄出基本上會在周二才到貨。
            外縣市宅配請先於到貨日前三天將款項匯款完成，
            並告知其帳號後五碼，我們將會排入製程並完成配送。
            <img :src="require('../assets/line.png')" class="line">
            宅配途中因路面顛簸可能造成的輕微毀損風險請自負，
            如不能接受請勿下單。
            如因宅配人為疏失造成的嚴重損壞，請於第一時間拍照存證與我們聯繫，
            我們將會盡快與宅配公司商議賠償事宜。
          </q-tab-panel>

          <q-tab-panel name="面交須知">
            單趟車程超過十五分鐘，
            建議自備「保冷袋+冷媒」取貨。
            甜點皆以冷凍方式交貨，
            取貨後請於冰箱冷藏解凍三至五小時，
            <h6 class="text-red text-weight-bold q-mt-md">請勿於室溫下解凍！</h6>
            <img :src="require('../assets/line.png')" class="line">
            若要馬上食用可事先告知，會以冷藏或半冷凍方式交貨。
            為求商品品質，欲將甜點攜帶至中北部者，
            需自備「保冷袋+冷媒」至目的地後能冷藏或冷凍保存再食用，才可幫忙排單。
            甜點不宜於室溫下久放，建議離開冰箱後盡早食用完畢。
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageSingleProduct',
  data () {
    return {
      slide: 1,
      tab: '商品介紹',
      model: false,
      name: '',
      price: '',
      description: '',
      category: '',
      sell: true,
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      imageText1: '',
      imageText2: '',
      imageText3: '',
      imageText4: ''
    }
  },
  computed: {
    number () {
      return this.$store.state.user.number
    }
  },
  methods: {
    numberAdd () {
      this.$store.commit('user/numberAdd')
    },
    numberSub () {
      this.$store.commit('user/numberSub')
    },
    addCart () {
      if (this.number < 1) {
        this.$q.notify({
          message: '請輸入正確數量',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        return
      }
      if (this.$store.state.user.jwt.token.length === 0) {
        this.$store.commit('user/beforeLogin', this.$route.params.id)
        this.$q.notify({
          message: '已加入購物車',
          timeout: 1000,
          type: 'positive',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      } else {
        this.$store.dispatch('user/addCart', { product: this.$route.params.id }).then((res) => {
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
      }
    },
    async addFav () {
      if (this.$store.state.user.jwt.token.length === 0) {
        this.$q.notify({
          message: '請先登入',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
      try {
        await this.$axios.post('/users/favorite', { product: this.$route.params.id, amount: 1 }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$q.notify({
          message: '已加入我的最愛',
          timeout: 1000,
          type: 'positive',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.category = data.result.category
      this.sell = data.result.sell
      if (this.sell === false) this.model = true
      this.image1 = `${process.env.API_URL}/files/${data.result.image1}`
      this.image2 = `${process.env.API_URL}/files/${data.result.image2}`
      this.image3 = `${process.env.API_URL}/files/${data.result.image3}`
      this.image4 = `${process.env.API_URL}/files/${data.result.image4}`
      this.imageText1 = data.result.image1
      this.imageText2 = data.result.image2
      this.imageText3 = data.result.image3
      this.imageText4 = data.result.image4
      document.title = `${this.name} | 任由尼甜點`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
