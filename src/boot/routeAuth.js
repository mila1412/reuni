export default ({ app, router, store, Vue }) => {
  // console.log('router')
  router.beforeEach((to, from, next) => {
    if (to.meta.login && !store.getters['user/user'].isLogin) {
      next('/login')
    } else if (to.meta.admin && !store.getters['user/user'].isAdmin) {
      next('/')
    } else {
      next()
    }
  })
}
