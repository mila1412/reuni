export function user (state) {
  return { isLogin: state.user.account.length > 0, isAdmin: state.user.role === 1, ...state.user }
}
