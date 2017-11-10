import {fetch} from 'utils/fetch';
import store from 'store'

export function allList(filterData,pNum, pSize) {
  const data = {
  	  pageNumber: pNum?pNum : 1,
      pageSize: pSize?pSize :10 ,
      sceneId: filterData.sceneId?filterData.sceneId:null,
      startTime: filterData.startTime?filterData.startTime:null,
      endTime: filterData.endTime?filterData.endTime:null,
      userName: store.getters.user.userName,
  }
  return fetch('/yxkj-operation/admin/user/allList', data)
}

export function regList(filterData,pNum, pSize) {
  const data = {
      pageNumber: pNum?pNum : 1,
      pageSize: pSize?pSize :10 ,
      sceneId: filterData.sceneId?filterData.sceneId:null,
      startTime: filterData.startTime?filterData.startTime:null,
      endTime: filterData.endTime?filterData.endTime:null,
      userName: store.getters.user.userName,
  };
  return fetch('/yxkj-operation/admin/user/regList', data)
}
