import {fetch} from 'utils/fetch';
import store from 'store'

export function getOrderList(pNum, pSize, filterData) {
  const data = {
  	  pageNumber: pNum,
      pageSize: pSize,
      shelfOrderData: filterData,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/order/getOrderList.jhtml', data)
}
export function getOrderDetail(id) {
  const data = {
  	  id: id,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/order/getOrderDetail.jhtml', data)
}

