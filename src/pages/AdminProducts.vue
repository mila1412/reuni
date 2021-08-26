<template>
  <q-page id="adminproducts" class="q-pa-lg">
    <div class="container">
      <h5 class="text-bold text-grey-9 q-mb-md">商品管理</h5>
      <q-btn unelevated class="bg-add q-mb-md" text-color="white" @click="editForm.isEdit = true">
        <span><q-icon name="add"></q-icon> 新增商品</span>
      </q-btn>
      <q-table
        :data="table.data"
        :columns="table.columns"
        row-key="id"
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
        <template v-slot:body-cell-sell="props">
          <q-td :props="props">
            <div>
              <q-chip text-color="white" square
                      :color="options.sell.find(option => option.value === props.row.sell).color"
                      :label="options.sell.find(option => option.value === props.row.sell).label" />
            </div>
          </q-td>
        </template>
        <!-- 圖片 -->
        <template v-slot:body-cell-image11="props">
          <q-td :props="props">
            <q-avatar size="45px">
              <img :src="props.row.image11">
            </q-avatar>
            <q-icon name="close" @click="delFile1(props.row)" class="delfile cursor-pointer" />
          </q-td>
        </template>
        <template v-slot:body-cell-image22="props">
          <q-td :props="props">
            <q-avatar size="45px">
              <img :src="props.row.image22">
            </q-avatar>
            <q-icon name="close" @click="delFile2(props.row)" class="delfile cursor-pointer" />
          </q-td>
        </template>
        <template v-slot:body-cell-image33="props">
          <q-td :props="props">
            <q-avatar size="45px">
              <img :src="props.row.image33">
            </q-avatar>
            <q-icon name="close" @click="delFile3(props.row)" class="delfile cursor-pointer" />
          </q-td>
        </template>
        <template v-slot:body-cell-image44="props">
          <q-td :props="props">
            <q-avatar size="45px">
              <img :src="props.row.image44">
            </q-avatar>
            <q-icon name="close" @click="delFile4(props.row)" class="delfile cursor-pointer" />
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

      <!-- q-dialog -->
      <q-dialog v-model="editForm.isEdit" persistent>
        <q-card class="q-pa-lg" style="max-width: 500px; width: 100%">
          <h5 class="text-center text-bold q-mb-lg" v-if="editForm.model._id.length > 0">編輯商品</h5>
          <h5 class="text-center text-bold q-mb-lg" v-else>新增商品</h5>

          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input label="名稱" stack-label outlined v-model="editForm.model.name"
                :rules="[val => !!val || '請輸入名稱']"
              >
              </q-input>
            </div>
            <div class="col-12">
              <q-input label="價格" stack-label outlined v-model="editForm.model.price"
                :rules="[
                  val => !!val || '請輸入價格',
                  val => val >= 0 || '請輸入正確價格',
                ]"
              ></q-input>
            </div>
            <div class="col-12">
              <q-input type="textarea" label="說明" stack-label outlined v-model="editForm.model.description"></q-input>
            </div>
            <div class="col-12">
              <q-select outlined stack-label v-model="editForm.model.category" :options="options.category" label="分類" emit-value map-options/>
            </div>
            <div class="col-12">
              <q-select outlined v-model="editForm.model.sell" :options="options.sell" label="狀態" emit-value map-options/>
            </div>
            <div class="col-12">
              <q-input v-model="editForm.model.date" filled type="date" hint="上架時間" />
            </div>
            <!-- q-file -->
            <div class="col-12">
              <q-file filled bottom-slots v-model="editForm.model.image1" label="上傳圖片" counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="editForm.model.image1 = null" class="cursor-pointer" />
                </template>
                <template v-slot:hint>
                  檔案大小
                </template>
              </q-file>
            </div>
            <div class="col-12">
              <q-file filled bottom-slots v-model="editForm.model.image2" label="上傳圖片" counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="editForm.model.image2 = null" class="cursor-pointer" />
                </template>
                <template v-slot:hint>
                  檔案大小
                </template>
              </q-file>
            </div>
            <div class="col-12">
              <q-file filled bottom-slots v-model="editForm.model.image3" label="上傳圖片" counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="editForm.model.image3 = null" class="cursor-pointer" />
                </template>
                <template v-slot:hint>
                  檔案大小
                </template>
              </q-file>
            </div>
            <div class="col-12">
              <q-file filled bottom-slots v-model="editForm.model.image4" label="上傳圖片" counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="editForm.model.image4 = null" class="cursor-pointer" />
                </template>
                <template v-slot:hint>
                  檔案大小
                </template>
              </q-file>
            </div>
            <div class="col-6">
              <q-btn v-close-popup unelevated color="primary" class="full-width" label="送出" @click="submitEdit"></q-btn>
            </div>
            <div class="col-6">
              <q-btn v-close-popup unelevated color="grey-7" class="full-width" label="取消" @click="cancelEdit"></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAdminProducts',
  data () {
    return {
      editForm: {
        data: null,
        model: {
          name: '',
          price: '',
          description: '',
          category: '',
          date: '',
          sell: false,
          image1: null,
          image2: null,
          image3: null,
          image4: null,
          _id: ''
        },
        isEdit: false
      },
      table: {
        pagination: {
          sortBy: 'date',
          descending: true,
          page: 1,
          rowsPerPage: 10
        },
        columns: [
          { name: 'image11', field: 'image11', align: 'center', label: '圖片' },
          { name: 'image22', field: 'image22', align: 'center' },
          { name: 'image33', field: 'image33', align: 'center' },
          { name: 'image44', field: 'image44', align: 'center' },
          { name: 'name', field: 'name', align: 'center', label: '名稱' },
          { name: 'price', field: 'price', align: 'center', label: '價格', format: val => `$${val}` },
          { name: 'description', field: 'description', align: 'center', label: '說明' },
          { name: 'sell', field: 'sell', align: 'center', label: '狀態' },
          { name: 'category', field: 'category', align: 'center', label: '分類' },
          { name: 'date', field: 'date', align: 'center', label: '上架時間', sortable: true },
          { name: 'operation', field: 'operation', align: 'center', label: '操作' }
        ],
        data: []
      },
      options: {
        sell: [
          { label: '下架', value: false, color: 'grey-7' },
          { label: '上架', value: true, color: 'cyan-8' }
        ],
        category: [
          { label: '千層蛋糕', value: '千層蛋糕' },
          { label: '軟餅乾', value: '軟餅乾' },
          { label: '雪Q餅', value: '雪Q餅' },
          { label: '瑪德蓮', value: '瑪德蓮' },
          { label: '檸檬塔', value: '檸檬塔' },
          { label: '香橙醬', value: '香橙醬' }
        ]
      }
    }
  },
  methods: {
    editDialog (row) {
      this.editForm.isEdit = true
      for (const field in row) {
        // q-file 圖片為字串會出錯
        if (!field.includes('image')) {
          this.editForm.model[field] = row[field]
        }
      }
      this.editForm.data = row
    },
    async submitEdit () {
      try {
        const fd = new FormData()
        for (const key in this.editForm.model) {
          fd.append(key, this.editForm.model[key])
        }
        if (this.editForm.model._id.length === 0) {
          await this.$axios.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          }).then((response) => {
            // 表單 _id 是之後才產生，如果直接 post 會是空的
            this.editForm.model._id = response.data.result._id
            this.table.data.push({ ...this.editForm.model, image11: `${process.env.API_URL}/files/${response.data.result.image1}`, image22: `${process.env.API_URL}/files/${response.data.result.image2}`, image33: `${process.env.API_URL}/files/${response.data.result.image3}`, image44: `${process.env.API_URL}/files/${response.data.result.image4}` })
          })
        } else {
          const { data } = await this.$axios.patch('/products/' + this.editForm.model._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          })
          for (const field in this.editForm.model) {
            this.editForm.data[field] = this.editForm.model[field]
          }
          this.editForm.data.image11 = `${process.env.API_URL}/files/${data.result.image1}`
          this.editForm.data.image22 = `${process.env.API_URL}/files/${data.result.image2}`
          this.editForm.data.image33 = `${process.env.API_URL}/files/${data.result.image3}`
          this.editForm.data.image44 = `${process.env.API_URL}/files/${data.result.image4}`
        }
        this.editForm.model = {
          name: '',
          price: '',
          description: '',
          category: '',
          date: '',
          sell: false,
          image1: null,
          image2: null,
          image3: null,
          image4: null,
          _id: ''
        }
      } catch (error) {
        console.log(error)
        this.$q.notify({
          message: error.response.data.message,
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    cancelEdit () {
      this.editForm.model = {
        name: '',
        price: '',
        description: '',
        category: '',
        date: '',
        sell: false,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        _id: ''
      }
    },
    async delFile1 (row) {
      try {
        await this.$axios.patch('/products/' + row._id + '/image1', { image1: '' }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        row.image11 = ''
      } catch (error) {
        this.$q.notify({
          message: '刪除圖片失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async delFile2 (row) {
      try {
        await this.$axios.patch('/products/' + row._id + '/image2', { image2: '' }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        row.image22 = ''
      } catch (error) {
        this.$q.notify({
          message: '刪除圖片失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async delFile3 (row) {
      try {
        await this.$axios.patch('/products/' + row._id + '/image3', { image3: '' }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        row.image33 = ''
      } catch (error) {
        this.$q.notify({
          message: '刪除圖片失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    },
    async delFile4 (row) {
      try {
        await this.$axios.patch('/products/' + row._id + '/image4', { image4: '' }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        row.image44 = ''
      } catch (error) {
        this.$q.notify({
          message: '刪除圖片失敗',
          timeout: 1000,
          type: 'negative',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.table.data = data.result.map(data => {
        if (data.image1) {
          data.image11 = `${process.env.API_URL}/files/${data.image1}`
        }
        if (data.image2) {
          data.image22 = `${process.env.API_URL}/files/${data.image2}`
        }
        if (data.image3) {
          data.image33 = `${process.env.API_URL}/files/${data.image3}`
        }
        if (data.image4) {
          data.image44 = `${process.env.API_URL}/files/${data.image4}`
        }
        if (!data.image1) {
          data.image1 = `${process.env.API_URL}/files/undefined`
        }
        if (!data.image2) {
          data.image2 = `${process.env.API_URL}/files/undefined`
        }
        if (!data.image3) {
          data.image3 = `${process.env.API_URL}/files/undefined`
        }
        if (!data.image4) {
          data.image4 = `${process.env.API_URL}/files/undefined`
        }
        return data
      })
    } catch (error) {
      console.log(error)
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
