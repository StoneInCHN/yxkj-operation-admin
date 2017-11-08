import {fetch} from 'utils/fetch';
import store from 'store'

export function list() {
  const data = {
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerCategory/list.jhtml', data)
}
export function deleteType(ids) {
  const data = {
      ids: ids,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerCategory/delete.jhtml', data)
}
export function save(dataInfo) {
  const data = {
      id:dataInfo.id,
      cateName: dataInfo.cateName, 
      totalChannel: dataInfo.totalChannel,
      capacity: dataInfo.capacity,
      cTemp: dataInfo.cTemp,
      cntrType: dataInfo.cntrType,
      remark: dataInfo.remark,   
      userName: store.getters.user.userName
  };
  if (dataInfo.id) {
      return fetch('/yxkj-operation/admin/containerCategory/update.jhtml', data)
  }else{
      return fetch('/yxkj-operation/admin/containerCategory/add.jhtml', data)
  }  
}



