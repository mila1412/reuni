import axios from 'axios'

export async function addCart ({ commit, state }, { product }) {
  await axios.post('/users/cart', { product: product, amount: state.number }, {
    headers: {
      authorization: 'Bearer ' + state.jwt.token
    }
  })
  commit('setCart')
}

export async function addGuestCart ({ commit, state }) {
  for (let i = 0; i < state.order.length; i++) {
    await axios.post('/users/cart', { product: state.order[i].product, amount: state.order[i].amount }, {
      headers: {
        authorization: 'Bearer ' + state.jwt.token
      }
    })
  }
  commit('afterLogin')
}
