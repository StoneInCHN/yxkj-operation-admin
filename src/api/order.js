import {fetch, getPageParams} from 'utils/fetch';
import store from 'store'

export function getOrderList(filters) {
  let params = getPageParams(filters)
  return fetch('/yxkj-operation/admin/order/list', params)
}
export function getOrderDetail(id) {
  const data = {
  	  id: id,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/order/detail', data)
}

