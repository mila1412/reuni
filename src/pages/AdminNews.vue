<template>
  <q-page id="adminnews" class="q-pa-lg">
    <div class="container">
      <h5 class="text-bold text-grey-9 q-mb-md">最新消息管理</h5>
      <q-btn unelevated class="bg-add q-mb-md" text-color="white" @click="editForm.isEdit = true">
        <span><q-icon name="add"></q-icon> 新增貼文</span>
      </q-btn>
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
        <template v-slot:body-cell-image11="props">
          <q-td :props="props">
            <q-avatar size="50px">
              <img :src="props.row.image11">
            </q-avatar>
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
          <h5 class="text-center text-bold q-mb-lg" v-if="editForm.model._id.length > 0">編輯貼文</h5>
          <h5 class="text-center text-bold q-mb-lg" v-else>新增貼文</h5>

          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input label="標題" stack-label outlined v-model="editForm.model.title"
                :rules="[val => !!val || '請輸入標題']"
              >
              </q-input>
            </div>
            <div class="col-12">
              <q-input type="textarea" label="說明" stack-label outlined v-model="editForm.model.description"></q-input>
            </div>
            <div class="col-12">
              <q-select outlined v-model="editForm.model.post" :options="options.post" label="狀態" emit-value map-options/>
            </div>
            <div class="col-12">
              <q-input v-model="editForm.model.date" filled type="date" hint="發布時間" />
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
  name: 'PageAdminNews',
  data () {
    return {
      editForm: {
        data: null,
        model: {
          title: '',
          description: '',
          date: '',
          post: false,
          image1: null,
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
          { name: 'title', field: 'title', align: 'center', label: '標題', style: 'width: 200px' },
          { name: 'description', field: 'description', align: 'center', label: '說明', style: 'width: 200px' },
          { name: 'date', field: 'date', align: 'center', label: '上架時間', sortable: true },
          { name: 'post', field: 'post', align: 'center', label: '狀態' },
          { name: 'operation', field: 'operation', align: 'center', label: '操作' }
        ],
        data: []
      },
      options: {
        post: [
          { label: '隱藏', value: false, color: 'grey-7' },
          { label: '發布', value: true, color: 'cyan-8' }
        ]
      }
    }
  },
  methods: {
    editDialog (row) {
      this.editForm.isEdit = true
      for (const field in row) {
        this.editForm.model[field] = row[field]
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
          const { data } = await this.$axios.post('/news', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          }).then((response) => {
            this.editForm.model._id = response.data.result._id
            this.table.data.push({ ...this.editForm.model, image11: `${process.env.API_URL}/files/${response.data.result.image1}` })
          })
        } else {
          const { data } = await this.$axios.patch('/news/' + this.editForm.model._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.user.jwt.token
            }
          })
          for (const field in this.editForm.model) {
            this.editForm.data[field] = this.editForm.model[field]
          }
          this.editForm.data.image11 = `${process.env.API_URL}/files/${data.result.image1}`
        }
        this.editForm.model = {
          title: '',
          description: '',
          date: '',
          post: false,
          image1: null,
          _id: ''
        }
      } catch (error) {
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
        title: '',
        description: '',
        date: '',
        post: false,
        image1: null,
        _id: ''
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.$axios.get('/news/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.user.jwt.token
        }
      })
      this.table.data = data.result.map(data => {
        // data.date = new Date(data.date).toLocaleDateString()
        if (data.image1) {
          data.image11 = `${process.env.API_URL}/files/${data.image1}`
        }
        return data
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
