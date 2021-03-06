import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

import { LocalStorage } from 'quasar'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user
    },
    plugins: [
      createPersistedState({
        paths: [
          'user'
        ],
        storage: {
          getItem: key => LocalStorage.getItem(key),
          setItem: (key, value) => LocalStorage.set(key, value),
          removeItem: key => LocalStorage.remove(key)
        }
      })
    ],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
