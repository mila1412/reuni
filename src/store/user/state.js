export default function () {
  return {
    jwt: {
      token: '',
      received: 0
    },
    user: {
      account: '',
      role: 0,
      email: '',
      birth: ''
    },
    // 未登入加入的商品數量
    order: [],
    // input 顯示數字
    number: 1,
    // 未登入購物車數字
    cartBefore: 0,
    // 登入購物車數字
    cartAmount: 0
  }
}
