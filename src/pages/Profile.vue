<template>
  <q-page
    id="profile"
    class="row justify-center items-center"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square style="width:300px;height:500px;">
          <q-card-section class="bg-brand text-center">
            <h4 class="text-h6 text-white">修改會員資料</h4>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="submit" class="q-px-sm">
              <q-input
                square
                clearable
                v-model.trim="account"
                label="請輸入帳號"
                @input="$v.account.$touch()"
                :rules="[
                  (val) => $v.account.required || '請輸入帳號',
                  (val) => $v.account.minLength || '最少 4 個字元',
                  (val) => $v.account.maxLength || '最多 16 個字元'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model.trim="password"
                :type="isPwd ? 'password' : 'text'"
                label="請輸入密碼"
                @input="$v.password.$touch()"
                :rules="[
                  (val) => $v.password.required || '請輸入密碼',
                  (val) => $v.password.minLength || '最少 4 個字元',
                  (val) => $v.password.maxLength || '最多 16 個字元'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model.trim="password2"
                :type="isPwd ? 'password' : 'text'"
                label="請再次輸入密碼"
                @input="$v.password.$touch()"
                :rules="[
                  (val) => $v.password.required || '請輸入密碼',
                  (val) => val === password || '輸入密碼不一致'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model.trim="email"
                type="email"
                label="請輸入信箱"
                @input="$v.email.$touch()"
                :rules="[
                  (val) => $v.email.required || '請輸入信箱',
                  (val) => $v.email.email || '信箱格式不符'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <div class="q-pt-lg">
                <q-btn unelevated size="lg" class="full-width bg-brand text-white" label="確認修改" type="submit" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import md5 from 'md5'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'PageProfile',
  data () {
    return {
      account: this.$store.state.user.user.account,
      email: this.$store.state.user.user.email,
      password: '',
      password2: '',
      isPwd: true
    }
  },
  computed: {
    userAccount () {
      return this.$store.state.user.user.account
    },
    userEmail () {
      return this.$store.state.user.user.email
    }
  },
  validations: {
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
    }
  },
  methods: {
    async submit () {
      try {
        await this.$axios.patch('/users', { account: this.account, password: md5(this.password), email: this.email }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.logout()
        this.$router.push('/login')
        this.$q.notify({
          message: '請重新登入',
          timeout: 1000,
          type: 'warning',
          color: 'faded',
          textColor: 'white',
          position: 'top'
        })
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
    async logout () {
      try {
        await this.$axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.user.jwt.token
          }
        })
        this.$store.commit('user/cartBeforeLogout')
        this.$store.commit('user/logout')
      } catch (error) {
        this.$q.notify({
          message: '發生錯誤',
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
