
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { title: '首頁 | 任由尼甜點' } },
      { path: 'register', component: () => import('pages/Register.vue'), meta: { title: '註冊 | 任由尼甜點' } },
      { path: 'login', component: () => import('pages/Login.vue'), meta: { title: '登入 | 任由尼甜點' } },
      { path: 'productlist', component: () => import('pages/ProductList.vue'), meta: { title: '商品列表 | 任由尼甜點' } },
      { path: 'product/:id', component: () => import('pages/SingleProduct.vue') },
      { path: 'orders', component: () => import('pages/Orders.vue'), meta: { title: '我的訂單 | 任由尼甜點', login: true } },
      { path: 'orders/:id', component: () => import('pages/SingleOrders.vue'), meta: { title: '訂單明細 | 任由尼甜點', login: true } },
      { path: 'news', component: () => import('pages/News.vue'), meta: { title: '最新消息 | 任由尼甜點' } },
      { path: 'faq', component: () => import('pages/FAQ.vue'), meta: { title: '常見問題 | 任由尼甜點' } },
      { path: 'profile', component: () => import('pages/Profile.vue'), meta: { title: '修改會員資料 | 任由尼甜點', login: true } },
      { path: 'cart', component: () => import('pages/Cart.vue'), meta: { title: '購物車 | 任由尼甜點', login: true } }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'products', component: () => import('pages/AdminProducts.vue'), meta: { title: '商品管理 | 任由尼甜點', login: true, admin: true } },
      { path: 'orders', component: () => import('pages/AdminOrders.vue'), meta: { title: '訂單管理 | 任由尼甜點', login: true, admin: true } },
      { path: 'orders/:id', component: () => import('pages/AdminSingleOrders.vue'), meta: { title: '會員訂單明細 | 任由尼甜點', login: true, admin: true } },
      { path: 'news', component: () => import('pages/AdminNews.vue'), meta: { title: '最新消息管理 | 任由尼甜點', login: true, admin: true } },
      { path: 'members', component: () => import('pages/AdminMembers.vue'), meta: { title: '會員管理 | 任由尼甜點', login: true, admin: true } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
