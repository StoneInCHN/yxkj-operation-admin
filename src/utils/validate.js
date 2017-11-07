/* 用户名正则，4到16位（字母，数字，下划线，减号）*/
export function isValidUserName(str) {
  const reg = /^[a-zA-Z0-9_\-]{4,16}$/;
  return reg.test(str.trim());
}
/* 用户名正则，6到16位（字母，数字，特殊字符）*/
export function isValidPassword(str) {
  const reg = /^[a-zA-Z0-9_\-\!\@\#\$\%\^\&\*\?]{6,16}$/;
  return reg.test(str.trim());
}

/* 是否合法邮箱*/
export function isValidEmail(str) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(str.trim());
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}
/* 是否合法手机号*/
export function isValidMobile(str) {
  //const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;//包含座机号
  return reg.test(str.trim());
}
/* 是否合正数*/
export function isPositiveNumber(str) {
  const reg = /^\d*\.?\d+$/;
  return reg.test(str);
}
export function validSn(str) {
  const reg = /^[a-zA-Z0-9 ]{0,}$/;
  return reg.test(str);
}


/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 验证key*/
// export function validateKey(str) {
//     var reg = /^[a-z_\-:]+$/;
//     return reg.test(str);
// }

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

/* 大于等于0小于等于100正数*/
export function percent(str) {
  const reg = /^100$|^(\d|[1-9]\d)(\.\d+)*$/;
  return reg.test(str);
}





