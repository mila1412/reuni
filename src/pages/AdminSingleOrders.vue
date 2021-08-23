<template>
  <q-page id="adminsingleorders" class="q-pa-lg">
    <div class="container">
      <h5 class="text-bold text-grey-9 q-mb-md">訂單管理</h5>
      <ul class="q-mb-lg q-ml-lg" style="white-space: pre-line; font-size: 14px; font-weight: bold;">
        <li>姓名：{{ name }}</li>
        <li>信箱：{{ email }}</li>
        <li>電話：{{ phone }}</li>
      </ul>
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
          <q-td :props="props">
            <q-avatar size="80px">
              <img :src="props.row.image1">
            </q-avatar>
          </q-td>
        </template>
        <template v-slot:body-cell-name="props">
          <q-td :props="props">
            <router-link class="order-link" :to="'/product/'+props.row.product">{{ props.row.name }}</router-link>
          </q-td>
        </template>
        <template v-slot:body-cell-totalprice="props">
          <q-td :props="props">
            {{ props.row.price * props.row.amount }}
          </q-td>
        </template>
      </q-table>
      <div class="sum flex justify-end q-pa-md">
        <div>
          <span>運費：{{ delivery }} 元&emsp;</span>
          <span>總額：{{ sum + delivery }} 元</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAdminSingleOrders',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      delivery: 0,
      table: {
        columns: [
          { name: 'image1', field: 'image1', align: 'center', label: '商品明細', style: 'width: 100px' },
          { name: 'name', field: 'name', align: 'left', label: '', style: 'width: 100px' },
          { name: 'amount', field: 'amount', align: 'center', label: '數量', style: 'width: 200px' },
          { name: 'price', field: 'price', align: 'center', label: '單價', style: 'width: 200px' },
          { name: 'totalprice', field: 'totalprice', align: 'center', label: '小計', style: 'width: 200px' }
        ],
        pagination: {
          sortBy: 'date',
          descending: true,
          page: 1,
          rowsPerPage: 0
        },
        data: []
      }
    }
  },
  computed: {
    sum () {
      return this.table.data.length === 0 ? 0 : this.table.data.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0)
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/orders/' + this.$route.params.id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.name = data.result.name
      this.email = data.result.email
      this.phone = data.result.phone
      this.delivery = data.result.delivery
      this.table.data = data.result.products.map(item => {
        item = { ...item.product, product: item.product._id, amount: item.amount, _id: item._id }
        item.image1 = `${process.env.API_URL}/files/${item.image1}`
        return item
      })
      // console.log(data.result)
      console.log(this.table.columns)
    } catch (error) {
      console.log(error)
      this.$q.notify({
        message: '取得訂單失敗',
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
