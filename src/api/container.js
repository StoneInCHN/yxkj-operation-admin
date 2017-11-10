import {fetch} from 'utils/fetch';
import store from 'store'

export function vendingContainerList(sceneId) {
  const data = {
      id:sceneId,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/vendingContainer/vendingContainerList.jhtml', data)
}
export function deleteContainer(ids) {
  const data = {
      ids: ids,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/vendingContainer/deleteContainer.jhtml', data)
}
export function getContainerTypeList() {
  const data = {
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerCategory/getContainerTypeList.jhtml', data)
}
export function addContainer(dataInfo) {
  const data = {
      containerData: dataInfo,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/vendingContainer/addContainer.jhtml', data)
}
export function isExistSn(sn,id) {
  var goodsData = {}
  goodsData.sn = sn
  const data = {  
      id: id,
      goodsData: goodsData,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/vendingContainer/isExistSn.jhtml', data)
}


