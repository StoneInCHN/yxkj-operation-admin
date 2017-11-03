import {fetch} from 'utils/fetch';
import store from 'store'

export function getGoodsList(pNum, pSize, filterData) {
  const data = {
  	  pageNumber: pNum,
      pageSize: pSize,
      goodsData: filterData,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/goods/getGoodsList.jhtml', data)
}
export function deleteGoods(ids) {
  const data = {
  	  ids: ids,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/goods/deleteGoods.jhtml', data)
}
export function addGoods(dataInfo) {
  const data = {
      goodsData: dataInfo,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/goods/addGoods.jhtml', data)
}
export function getGoodsData(id) {
  const data = {
      id: id,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/goods/getGoodsData.jhtml', data)
}
export function updateGoods(id,dataInfo) {
  const data = {
      id: id,  
      goodsData: dataInfo,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/goods/updateGoods.jhtml', data)
}
export function isExistSn(sn,id) {
  var goodsData = {}
  goodsData.sn = sn
  const data = {  
      id: id,
      goodsData: goodsData,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/goods/isExistSn.jhtml', data)
}

