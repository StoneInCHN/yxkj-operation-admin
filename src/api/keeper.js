import {fetch} from 'utils/fetch';
import store from 'store'

export function getKeeperList(pNum, pSize) {
  const data = {
  	  pageNumber: pNum,
      pageSize: pSize,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/keeperPage.jhtml', data)
}
export function getAllScene(id) {
  const data = {
  	  id:id,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/getSceneList.jhtml', data)
}
export function addKeeper(dataInfo) {
  const data = {
      realName: dataInfo.realName,  
      cellPhoneNum: dataInfo.cellPhoneNum,  
      sceneIds: dataInfo.sceneIds,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/addKeeper.jhtml', data)
}
export function getKeeperData(id) {
  const data = {
      id: id,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/getKeeperData.jhtml', data)
}
export function updateKeeper(dataInfo) {
  const data = {
  	  id:dataInfo.id,
      realName: dataInfo.realName,  
      cellPhoneNum: dataInfo.cellPhoneNum,  
      sceneIds: dataInfo.sceneIds,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/updateKeeper.jhtml', data)
}
export function deleteKeeper(ids) {
  const data = {
  	  ids: ids,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/deleteKeeper.jhtml', data)
}
export function resetPwd(id) {
  const data = {
  	  id: id,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/containerKeeper/resetPwd.jhtml', data)
}
