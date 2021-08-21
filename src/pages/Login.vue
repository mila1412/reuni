<template>
  <q-page
    id="login"
    class="row justify-center items-center"
  >
    <div class="bg-image"></div>
    <div class="bg-form column q-pa-lg">
      <div class="row">
        <q-card square style="width: 300px; height: 380px;">
          <q-card-section class="bg-login text-center">
            <h4 class="text-h5 text-white">登入</h4>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="submit" @reset="reset" class="q-px-sm">
              <q-input
                square
                clearable
                v-model.trim="form.account"
                label="請輸入帳號"
                @input="$v.form.account.$touch()"
                :rules="[
                  (val) => $v.form.account.required || '請輸入帳號',
                  (val) => $v.form.account.minLength || '最少 4 個字元',
                  (val) => $v.form.account.maxLength || '最多 16 個字元',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model.trim="form.password"
                :type="form.isPwd ? 'password' : 'text'"
                label="請輸入密碼"
                @input="$v.form.password.$touch()"
                :rules="[
                  (val) => $v.form.password.required || '請輸入密碼',
                  (val) => $v.form.password.minLength || '最少 4 個字元',
                  (val) => $v.form.password.maxLength || '最多 16 個字元',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="form.isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="form.isPwd = !form.isPwd"
                  />
                </template>
              </q-input>
              <div class="q-pt-lg">
                <q-btn outline unelevated size="lg" class="full-width text-login" label="送出" type="submit" />
              </div>
            </q-form>
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <router-link to='/register' class="text-grey-5">沒有帳號？ 點我註冊</router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'PageLogin',
  data () {
    return {
      form: {
        account: '',
        password: '',
        isPwd: true
      }
    }
  },
  validations: {
    form: {
      account: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16)
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16)
      }
    }
  },
  methods: {
    reset () {
      this.form.account = ''
      this.form.password = ''
    },
    async submit () {
      try {
        const { data } = await this.$axios.post('/users/login', this.form)
        this.$q.notify({
          message: '登入成功',
          timeout: 1000,
          type: 'positive',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        this.$store.commit('user/login', data)
        this.$router.push('/')
        // 取未登入購物車的資料
        this.$store.dispatch('user/addGuestCart').then((res) => {
          // console.log(res)
        })
          .catch((error) => {
            console.log(error)
          })
        if (this.user.isAdmin) this.$router.push('/admin/products')
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
    }
  }
}
</script>
