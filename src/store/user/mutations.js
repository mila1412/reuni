export function login (state, data) {
  state.jwt.token = data.token
  state.jwt.received = new Date().getTime()
  state.user.account = data.account
  state.user.role = data.role
  state.user.email = data.email
  state.user.birth = data.birth
  // 登入時回傳購物車商品數量
  for (let i = 0; i < data.cart.length; i++) {
    state.cartAmount += data.cart[i].amount
  }
}

export function logout (state) {
  state.jwt = {
    token: '',
    received: 0
  }
  state.user = {
    account: '',
    role: 0,
    email: '',
    birth: ''
  }
}

// input 顯示數字
export function numberAdd (state) {
  state.number++
}

export function numberSub (state) {
  state.number--
}

// 登出時
export function cartLogout (state) {
  state.cartBefore = 0
  // 防止一開始登入累加
  state.cartAmount = 0
}

// 購物車數字即時更新
export function CartAmountPast (state, data) {
  state.cartAmount = data
}

// actions addCart
// 已登入加購物車後
export function setCart (state) {
  state.cartAmount += state.number
  state.number = 1
}

// actions addGuestCart
// 登入後將未登入資訊加入購物車
export function afterLogin (state) {
  state.cartAmount += state.cartBefore
  state.order = []
}

// 未登入加購物車
export function beforeLogin (state, data) {
  state.cartBefore += state.number
  state.order.push({ product: data, amount: state.number })
  state.number = 1
}

export function getInfo (state, data) {
  state.user.account = data.account
  state.user.role = data.role
  state.user.email = data.email
  state.user.birth = data.birth
}

export function extend (state, data) {
  state.jwt.token = data
  state.jwt.received = new Date().getTime()
}
