import {fetch} from 'utils/fetch';
import store from 'store'

export function scenePage(pNum, pSize, filterData) {
  //console.info(filterData);
  const data = {
  	  pageNumber: pNum,
      pageSize: pSize,
      sn: filterData.sn,
      name: filterData.name,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/scene/scenePage.jhtml', data)
}
export function deleteScene(ids) {
  const data = {
  	  ids: ids,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/scene/deleteScene.jhtml', data)
}
export function addScene(dataInfo) {
  const data = {
      sceneData: dataInfo,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/scene/addScene.jhtml', data)
}
export function getSceneData(id) {
  const data = {
      id: id,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/scene/getSceneData.jhtml', data)
}
export function updateScene(id,dataInfo) {
  const data = {
      id: id,  
      sceneData: dataInfo,   
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-operation/admin/scene/updateScene.jhtml', data)
}

export function dropDownList(filterData) {
  let params = {
      userName: store.getters.user.userName
  }
  if (filterData) {
    params.key = filter.key?filter.key:null
    params.id = filter.id?filter.id:null
  }
  return fetch('/yxkj-operation/admin/scene/dropDownList', params)
}


