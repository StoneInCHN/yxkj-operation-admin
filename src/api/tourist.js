import {fetch} from 'utils/fetch';
import store from 'store'

export function getUserList(pNum, pSize, filterData) {
  const data = {
  	  pageNumber: pNum,
      pageSize: pSize,
      touristData: filterData,
      userName: store.getters.user.userName
  };
  return fetch('/yxkj-shelf/admin/user/getUserList.jhtml', data)
}
// export function exportData() {
//   const data = {
//       userName: store.getters.user.userName
//   };
//   return fetch('/yxkj-shelf/admin/user/dataExport.jhtml', data)
// }

