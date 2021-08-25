<template>
  <q-page id="cart" class="q-pa-lg">
    <div class="container">
      <div class="cart-circle-1 text-grey-8 q-mb-md">購物車內容</div>
      <q-table
        :data="table.data"
        :columns="table.columns"
        row-key="name"
        :rows-per-page-options="[0]"
        :pagination.sync="table.pagination"
        hide-bottom
        flat
        bordered
      >
        <template v-slot:body-cell-image1="props">
          <q-td :props="props" no-hover>
            <q-avatar size="80px">
              <img :src="props.row.image1">
            </q-avatar>
          </q-td>
        </template>
        <template v-slot:body-cell-name="props">
          <q-td :props="props" no-hover>
            <router-link class="order-link" :to="'/product/'+props.row._id">{{ props.row.name }}</router-link>
          </q-td>
        </template>
        <template v-slot:body-cell-price="props">
          <q-td :props="props" no-hover>
          {{ props.row.price }}
          </q-td>
        </template>
        <template v-slot:body-cell-amount="props">
          <q-td :props="props" no-hover>
            <q-input v-model.number="props.row.number" type="number" outlined class="cart-input">
              <template v-slot:prepend>
                <q-btn
                  dense
                  flat
                  icon="remove"
                  class="number-btn"
                  @click="numberSub(props.rowIndex)"
                />
              </template>
              <template v-slot:append>
                <q-btn
                  dense
                  flat
                  icon="add"
                  class="number-btn"
                  @click="numberAdd(props.row)"
                />
              </template>
            </q-input>
          </q-td>
        </template>
        <template v-slot:body-cell-total="props">
          <q-td :props="props" no-hover>
          {{ props.row.price * props.row.amount }}
          </q-td>
        </template>
        <template v-slot:body-cell-delete="props">
          <q-td :props="props" no-hover>
            <q-btn unelevated :ripple="false" @click="delProduct(props.rowIndex)">
              <q-icon name="clear" class="clear-btn"></q-icon>
            </q-btn>
          </q-td>
        </template>
      </q-table>
      <div class="cart-circle-2 text-grey-8 q-mt-xl q-mb-md">請選擇取貨方式</div>
      <div class="button-group q-pa-md" style="border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 4px;">
        <q-btn unelevated :ripple="false" @click="deliveryHome" class="delivery-btn" :class="[delivery === 160 ? 'border' : '']">
          <span v-if="delivery === 160"><q-icon name="check_circle" class="icon"></q-icon> 宅配到府</span>
          <span v-else><q-icon name="radio_button_unchecked" class="icon"></q-icon> 宅配到府</span>
          <span>NT$160</span>
        </q-btn>
        <q-btn unelevated :ripple="false" @click="delivery711" class="delivery-btn" :class="[delivery === 170 ? 'border' : '']">
          <span v-if="delivery === 170"><q-icon name="check_circle" class="icon"></q-icon> 7-11 店到店取貨</span>
          <span v-else><q-icon name="radio_button_unchecked" class="icon"></q-icon> 7-11 店到店取貨</span>
          <span>NT$170</span>
        </q-btn>
        <q-btn unelevated :ripple="false" @click="deliveryPerson" class="delivery-btn" :class="[delivery === 0 ? 'border' : '']">
          <span v-if="delivery === 0"><q-icon name="check_circle" class="icon"></q-icon> 面交取貨</span>
          <span v-else><q-icon name="radio_button_unchecked" class="icon"></q-icon> 面交取貨</span>
          <span>NT$0</span>
        </q-btn>
      </div>
      <div class="cart-circle-3 text-grey-8 q-mt-xl q-mb-md">收件人資料</div>
        <div class="q-pa-md" style="border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 4px;">
          <div class="info">
            <div class="person-info q-mx-lg">
              <p class="q-mb-sm q-mt-md">姓名（必填）</p>
              <q-input
                filled
                v-model="name"
                label="請輸入姓名"
                :rules="[ (val) => $v.name.required || '請輸入姓名' ]"
              />
              <p class="q-mb-sm">電話（必填）</p>
              <q-input
                filled
                v-model="phone"
                label="請輸入手機號碼"
                :rules="[
                  (val) => $v.phone.required || '請輸入手機號碼',
                  (val) => $v.phone.minLength || '手機號碼須為十碼',
                  (val) => $v.phone.maxLength || '手機號碼須為十碼'
                ]"
              />
              <p class="q-mb-sm">信箱（必填）</p>
              <q-input
                filled
                v-model="email"
                label="請輸入聯絡信箱"
                :rules="[
                  (val) => $v.email.required || '請輸入聯絡信箱',
                  (val) => $v.email.email || '信箱格式不符'
                ]"
              />
              <p class="q-mb-sm">優惠券代碼</p>
              <q-input
                filled
                v-model="coupon"
                label="請輸入優惠券代碼"
              />
            </div>
            <div class="face-text q-px-md q-pb-md" style="border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 4px;">
              面交付款取貨地點（可商議取貨時間）
              1. 鳳山國中捷運站 1 號出口
              2. 統一超商工協門市前（鳳山區埤頂里建國路一段 79 號）
              3. 全家便利商店埤頂店門市前（鳳山區中山東路 545 號）
              4. 大東文化中心捷運站 1、2 號出口
              5. 鳳山西站 2 號出口（鳳山自由路、青年路口）
              6. 統一超商青建門市（鳳山區建國路三段 295 號）
              7. 和樂宴會館（鳳山區建國路二段 88 號）
              8. 鳳山火車站
            </div>
          </div>
      </div>
      <div class="cart-circle-4 text-grey-8 q-mt-xl q-mb-md">結帳金額</div>
      <div class="q-pa-md" style="border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 4px;">
        <q-list class="bg-grey-2">
          <q-item>
            <q-item-section>
              <q-item-label>小計</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>{{ totalprice }}元</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section class="text-cart">
              <q-item-label>優惠折抵</q-item-label>
            </q-item-section>
            <q-item-section side class="text-cart">
              <q-item-label>-0元</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label>運費</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>{{ delivery }}元</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="bg-cart">
            <q-item-section>
              <q-item-label>實付總額</q-item-label>
            </q-item-section>
            <q-item-section side class="text-white">
              <q-item-label>{{ totalprice + delivery }}元</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-mt-lg text-center">
          <q-btn class="bg-cart-red full-width" @click="checkout">確認訂購</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'PageCart',
  data () {
    return {
      delivery: 0,
      name: '',
      phone: '',
      email: '',
      coupon: '',
      table: {
        columns: [
          { name: 'image1', field: 'image1', align: 'center', label: '商品明細', style: 'width: 200px' },
          { name: 'name', field: 'name', align: 'left', label: '', style: 'width: 200px' },
          { name: 'price', field: 'price', align: 'center', label: '單價', style: 'width: 200px' },
          { name: 'amount', field: 'amount', align: 'center', label: '數量', style: 'width: 200px' },
          { name: 'total', field: 'total', align: 'center', label: '小計', style: 'width: 200px' },
          { name: 'delete', field: 'delete', align: 'center', label: '' }
        ],
        pagination: {
          page: 1,
          rowsPerPage: 0
        },
        data: []
      }
    }
  },
  validations: {
    name: {
      required
    },
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10)
    },
    email: {
      required,
      email
    }
  },
  computed: {
    totalprice () {
      return this.table.data.length === 0 ? 0 : this.table.data.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0)
    }
  },
  methods: {
    deliveryHome () {
      this.delivery = 160
      // this.deliveryStatus = true
    },
    delivery711 () {
      this.delivery = 170
      // this.deliveryStatus = true
    },
    deliveryPerson () {
      this.delivery = 0
      // this.deliveryStatus = true
    },
    async numberSub (index) {
      if (this.table.data[index].number > 0) {
        this.table.data[index].number--
      }
      try {
        await this.$axios.patch('/users/cart', { product: this.table.data[index]._id, amount: this.table.data[index].number }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.table.data[index].amount = this.table.data[index].number
        if (this.table.data[index].number <= 0) {
          this.table.data.splice(index, 1)
        }
      } catch (error) {
        console.log(error)
        this.$q.notify({
          message: '修改商品失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async numberAdd (row) {
      row.number++
      try {
        await this.$axios.patch('/users/cart', { product: row._id, amount: row.number }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        row.amount = row.number
      } catch (error) {
        this.$q.notify({
          message: '修改商品失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async delProduct (index) {
      try {
        await this.$axios.patch('/users/cart', { product: this.table.data[index]._id, amount: 0 }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.table.data.splice(index, 1)
      } catch (error) {
        this.$q.notify({
          message: '刪除商品失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async checkout () {
      if (this.table.data.length === 0) {
        this.$q.notify({
          message: '購物車內沒有商品喔',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        return
      }

      if (this.name.length === 0 || this.phone.length === 0 || this.email.length === 0) {
        this.$q.notify({
          message: '必填欄位不得為空',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        return
      }

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.$q.notify({
          message: '請正確填寫收件人資料',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        return
      }

      try {
        await this.$axios.post('/orders/checkout', { delivery: this.delivery, name: this.name, phone: this.phone, email: this.email }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$q.notify({
          message: '感謝您的購買',
          timeout: 1000,
          icon: 'mood',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        this.$store.commit('user/CartAmountPast', 0)
        this.$router.push('/orders')
      } catch (error) {
        this.$q.notify({
          message: '結帳失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    }
  },
  watch: {
    table: {
      handler () {
        let pastNumber = 0
        if (this.table.data.length > 0) {
          for (let i = 0; i < this.table.data.length; i++) {
            pastNumber += this.table.data[i].amount
          }
        } else {
          pastNumber = 0
        }
        this.$store.commit('user/CartAmountPast', pastNumber)
      },
      deep: true
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/users/cart', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.table.data = data.result.map(item => {
        item = { ...item.product, amount: item.amount }
        item.image1 = `${process.env.API_URL}/files/${item.image1}`
        item.number = item.amount
        return item
      })
      if (this.table.data.length === 0) {
        this.$q.notify({
          message: '購物車還沒有商品喔',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    } catch (error) {
      this.$q.notify({
        message: '取得購物車失敗',
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
