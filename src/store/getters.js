const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  token: state => state.user.token,
  user: state => state.user.user,
  tips: state => state.user.tips,
  permission_routers: state => state.user.routers,
  addRouters: state => state.user.addRouters,
  siderbar_routers:state => state.user.siderbar_routers,
  areas:state => state.common.areas,
  selectedRow:state => state.common.selectedRow,
  payMethod:state => state.common.payMethod,
  paymentTypes: state => state.common.paymentTypes
};
export default getters
