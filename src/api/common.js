import store from '../store';
import {fetch} from 'utils/fetch';

export function login(userName, password, captcha, captchaId, autoLogin) {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBMPGboxzPh9SApXHBKMQHF31rgB6LQBZxg3VirK9Rbp0qvgIDw+2ygZxPQAkgiK24PTWuBbw2UTNy5NxglSCsCnY8+vJXd8cwZKrBpnwXEcO0Wuh5G8Z++X0AIisMCIoiDZZwWnvqJ7a3vUQIj62qTX259s0UqvjGA7uvoDM9tQIDAQAB");
  const data = {
      userName: userName,
      password: encrypt.encrypt(password),
      captcha: captcha,
      captchaId: captchaId,
      autoLogin: autoLogin
  };
  return fetch('/yxkj-operation/common/login.jhtml', data)

}

export function logout(userName) {
  const data = {
      userName: userName
  };
  return fetch('/yxkj-operation/common/logout.jhtml', data)
}

// 获取当前用户
export function getCurrentUser() {
  return store.getters.user
}

export function getAreaList() {
      const data = {
          userName: store.getters.user.userName
      };
      console.info("need get areas");
      return fetch('/yxkj-operation/admin/scene/getAreaList.jhtml', data)
}
export function getHomeData() {

      const data = {
          userName: store.getters.user.userName
      };
      return fetch('/yxkj-operation/common/hp/statistics.jhtml', data)
}
export function changePwd(dataInfo) {
      var encrypt = new JSEncrypt();
      encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBMPGboxzPh9SApXHBKMQHF31rgB6LQBZxg3VirK9Rbp0qvgIDw+2ygZxPQAkgiK24PTWuBbw2UTNy5NxglSCsCnY8+vJXd8cwZKrBpnwXEcO0Wuh5G8Z++X0AIisMCIoiDZZwWnvqJ7a3vUQIj62qTX259s0UqvjGA7uvoDM9tQIDAQAB");
      const data = {
          userName: dataInfo.userName,
          oldPwd: encrypt.encrypt(dataInfo.oldPwd),
          newPwd: encrypt.encrypt(dataInfo.newPwd),
      };
      return fetch('/yxkj-operation/admin/admin/changePwd.jhtml', data)
}
