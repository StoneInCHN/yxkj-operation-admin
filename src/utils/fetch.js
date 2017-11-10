import axios from 'axios';
import store from '../store';
import vue from 'vue';


axios.defaults.timeout = 100000

//axios.defaults.baseURL = 'http://127.0.0.1:8087'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Auth-Token'] = store.getters.token; 
  }
  return config;
}, error => {
  console.log(error); // for debug
  return Promise.reject(error);
})

axios.interceptors.response.use(
  response => {    
      if (response.data && response.data.code === '0004') { 
          store.dispatch('FedLogOut')
      }
      return response;
  },
  error => {
    console.log('err' + error);// for debug
    vue.$Message.error({
                    message: error.message,
                    duration: 5 * 1000,
                    closable: true
                });
    return Promise.reject(error);
  }
)

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getPageParams(filters) {
  let pageParams = {
      pageNumber: 1,
      pageSize: 10 ,
      // userName: store.getters.user.userName
  }
  if(filters) {
    for (let item in filters) {
      if(filters[item]) {
        if (item === 'daterange') {
          if(filters[item][0]) {
            pageParams.startTime = filters[item][0]
          }
          if(filters[item][1]) {
            pageParams.endTime = filters[item][1]
          }
        } else {
          pageParams[item] = filters[item]
        }
      }
    }
  }
  return pageParams
}

export function getParams(filters) {
  let commonParams = {
      userName: store.getters.user.userName
  }
  if(filters) {
    for (let item in filters) {
      if(filters[item]) {
        if (item === 'daterange') {
          if(filters[item][0]) {
            commonParams.startTime = filters[item][0]
          }
          if(filters[item][1]) {
            commonParams.endTime = filters[item][1]
          }
        } else {
          commonParams[item] = filters[item]
        }
      }
    }
  }
  return commonParams
}

