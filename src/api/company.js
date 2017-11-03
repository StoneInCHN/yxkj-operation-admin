import {fetch} from 'utils/fetch';
import store from 'store'

export function getCompanyList(pNum, pSize, filterData) {
  const data = {
  	  pageNumber: pNum,
      pageSize: pSize,
      companyData: filterData,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/getCompanyList.jhtml', data)
}
export function deleteCompany(ids) {
  const data = {
  	  ids: ids,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/deleteCompany.jhtml', data)
}
// export function getAreaList() {
//   const data = {
//       userName: store.getters.user.userName
//   };
//   return fetch('/yxkj-shelf-operation/admin/company/getAreaList.jhtml', data)
// }
export function getShelfList() {
  const data = {
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/getShelfList.jhtml', data)
}
export function addCompany(dataInfo) {
  const data = {
      companyData: dataInfo,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/addCompany.jhtml', data)
}
export function getCompanyData(id) {
  const data = {
      id: id,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/getCompanyData.jhtml', data)
}
export function updateCompany(id,dataInfo) {
  const data = {
      id: id,  
      companyData: dataInfo,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/updateCompany.jhtml', data)
}
export function getAllGoodsProfile() {
  const data = {
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/getAllGoodsProfile.jhtml', data)
}
export function isExistCompany(dataInfo) {
  var companyData = {}
  companyData.displayName = dataInfo.displayName;
  companyData.fullName = dataInfo.fullName;
  const data = {  
      companyData: companyData,  
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/company/isExistCompany.jhtml', data)
}



