<template>
  <q-page id="adminorders" class="q-pa-lg">
    <div class="container">
      <h5 class="text-bold text-grey-9 q-mb-md">訂單管理</h5>
      <q-table
        :data="table.data"
        :columns="table.columns"
        row-key="id"
        :rows-per-page-options="[0]"
        :pagination.sync="table.pagination"
        hide-bottom
        flat
        bordered
      >
        <template v-slot:body-cell-user="props">
          <q-td :props="props">
            {{ props.row.user.account }}
          </q-td>
        </template>
        <template v-slot:body-cell-_id="props">
          <q-td :props="props">
            <router-link class="order-link" :to="'/admin/orders/'+props.row._id">{{ props.row._id }}</router-link>
          </q-td>
        </template>
        <template v-slot:body-cell-products="props">
          <q-td :props="props">
            {{ props.row.products.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.product.price), 0) + props.row.delivery }}
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAdminOrders',
  data () {
    return {
      table: {
        columns: [
          { name: 'user', field: 'user', align: 'center', label: '會員帳號', style: 'width: 200px' },
          { name: '_id', field: '_id', align: 'center', label: '訂單編號', style: 'width: 300px' },
          { name: 'date', field: 'date', align: 'center', label: '訂購日期', style: 'width: 200px', sortable: true },
          { name: 'products', field: 'products', align: 'center', label: '訂單金額', style: 'width: 200px' },
          { name: 'deliveryText', field: 'deliveryText', align: 'center', label: '取貨方式', style: 'width: 200px' }
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
  async mounted () {
    try {
      const { data } = await this.$axios.get('/orders/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.table.data = data.result.map(order => {
        order.date = new Date(order.date).toLocaleDateString()
        switch (order.delivery) {
          case 0:
            order.deliveryText = '面交取貨'
            break
          case 160:
            order.deliveryText = '宅配到府'
            break
          case 170:
            order.deliveryText = '7-11 店到店取貨'
            break
          default:
            break
        }
        return order
      })
      // console.log(this.table.data)
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
