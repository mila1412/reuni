import axios from 'axios'
export default ({ app, router, store, Vue }) => {
  axios.defaults.baseURL = process.env.API_URL
  axios.interceptors.request.use((config) => {
    return config
  })
  Vue.prototype.$axios = axios
}
