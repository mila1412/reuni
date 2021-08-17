<template>
  <q-page
    id="register"
    class="row justify-center items-center"
  >
    <div class="column q-pa-lg" style="padding-top: 70px">
      <div class="row">
        <q-card square style="width:300px;height:520px;">
          <q-card-section class="bg-brand text-center">
            <h4 class="text-h5 text-white">註冊</h4>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="submit" class="q-px-sm">
              <q-input
                square
                clearable
                v-model.trim="form.account"
                label="請輸入帳號"
                @input="$v.form.account.$touch()"
                :rules="[
                  (val) => $v.form.account.required || '請輸入帳號',
                  (val) => $v.form.account.minLength || '最少 4 個字元',
                  (val) => $v.form.account.maxLength || '最多 16 個字元'
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
                  (val) => $v.form.password.maxLength || '最多 16 個字元'
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
              <q-input
                square
                clearable
                v-model.trim="form.email"
                type="email"
                label="請輸入信箱"
                @input="$v.form.email.$touch()"
                :rules="[
                  (val) => $v.form.email.required || '請輸入信箱',
                  (val) => $v.form.email.email || '信箱格式不符'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input v-model="form.birth" square type="date" hint="請輸入生日"
                :rules="[(val) => $v.form.birth.required || '請輸入生日']"/>
              <div class="q-pt-lg">
                <q-btn unelevated size="lg" class="full-width bg-brand text-white" label="送出" type="submit" />
              </div>
            </q-form>
          </q-card-section>
          <q-card-section class="text-center q-pa-sm">
            <router-link to='/login' class="text-grey-5">已經有帳號？ 點我登入</router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'PageRegister',
  data () {
    return {
      form: {
        account: '',
        password: '',
        isPwd: true,
        email: '',
        birth: ''
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
      },
      email: {
        required,
        email
      },
      birth: {
        required
      }
    }
  },
  methods: {
    reset () {
      this.form.account = ''
      this.form.password = ''
      this.form.email = ''
      this.form.birth = ''
    },
    async submit () {
      try {
        await this.$axios.post('/users', this.form)
        this.$q.notify({
          message: '註冊成功',
          timeout: 1000,
          type: 'positive',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
        this.$router.push('/')
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
