<template>
  <q-page id="members" class="q-pa-lg">
    <div class="container">
      <h5 class="text-bold text-grey-9 q-mb-lg">會員管理</h5>
      <q-table
        :data="table.data"
        :columns="table.columns"
        row-key="name"
        :pagination.sync="table.pagination"
        flat
        bordered
      >
        <!-- 說明 -->
        <template v-slot:body-cell-description="props">
          <q-td :props="props">
            <p class="text-truncate">{{ props.row.description }}</p>
          </q-td>
        </template>
        <!-- 日期 -->
        <template v-slot:body-cell-date="props">
          <q-td :props="props">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </q-td>
        </template>
        <!-- 上架 -->
        <template v-slot:body-cell-post="props">
          <q-td :props="props">
            <div>
              <q-chip text-color="white" square
                      :color="options.post.find(option => option.value === props.row.post).color"
                      :label="options.post.find(option => option.value === props.row.post).label" />
            </div>
          </q-td>
        </template>
        <!-- 圖片 -->
        <template v-slot:body-cell-image1="props">
          <q-td :props="props">
            <q-avatar size="50px">
              <img :src="props.row.image1">
            </q-avatar>
            <q-icon name="close" @click="delFile(props.row)" class="delfile cursor-pointer" />
          </q-td>
        </template>
        <!-- 編輯 -->
        <template v-slot:body-cell-operation="props">
          <q-td :props="props">
            <q-btn unelevated class="bg-edit" @click="editDialog(props.row)">
              <span> 編輯</span>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageMembers',
  data () {
    return {
      table: {
        pagination: {
          sortBy: 'date',
          descending: true,
          page: 1,
          rowsPerPage: 10
        },
        columns: [
          { name: 'account', field: 'account', align: 'center', label: '帳號', style: 'width: 200px' },
          { name: 'birth', field: 'birth', align: 'center', label: '生日', style: 'width: 200px' },
          { name: 'email', field: 'email', align: 'center', label: '信箱', style: 'width: 200px' },
          { name: 'date', field: 'date', align: 'center', label: '入會日期', style: 'width: 200px', sortable: true }
        ],
        data: []
      }
    }
  },
  methods: {
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/users/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.table.data = data.result.map(data => {
        data.birth = new Date(data.birth).toLocaleDateString()
        return data
      })
      console.log(this.table.data)
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
