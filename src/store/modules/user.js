import { asyncRouterMap, constantRouterMap} from 'src/router';
import { login, logout } from 'api/common';
import Cookies from 'js-cookie';
import router from 'src/router';
const _import = require('src/router/_import_' + process.env.NODE_ENV);

const user = {
  state: {
    user: Cookies.get('Admin-User'),
    addRouters:[],
    //addRouters: Cookies.get('Admin-routers'),
    token: Cookies.get('Admin-Token'),
    //user: [],
    //token: '',
    routers: constantRouterMap,
    
    siderbar_routers:[],
    tips: null,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },  
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
      state.routers.forEach(function(e){
          if(e.name==="首页"){
              state.siderbar_routers=e;            
          }
      })
    },
    SET_TIPS: (state, tips) => {
      state.tips = tips;
    }, 
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      var userName = userInfo.userName
      var password = userInfo.password
      var captcha = userInfo.captcha
      var captchaId = userInfo.captchaId
      var rememberMe = userInfo.rememberMe
      var autoLogin = userInfo.autoLogin
      //console.info(userInfo);
      return new Promise((resolve, reject) => {
        login(userName, password, captcha, captchaId, autoLogin).then(response => {
          // if(response.code === '0000' && response.msg.roles.length > 0) {
          if(response.code === '0000') {
              const admin = response.msg;          
              commit('SET_USER', admin);  
              commit('SET_TOKEN', response.token);  
              commit('SET_TIPS', null);
              Cookies.set('Admin-Token', response.token);               
              Cookies.set('Admin-User', admin); 
              Cookies.set('Admin-userName', userName); 
              Cookies.set('Admin-password', password); 
              Cookies.set('Admin-captcha', captcha); 
              Cookies.set('Admin-captchaId', captchaId);
              Cookies.set('RememberMe', rememberMe); 
              //根据后台返回，获取可访问的菜单权限   
              // asyncRouterMap[0].children = [];
              var accessMenu = asyncRouterMap;          
              // var authorities = response.msg.roles[0].authorities;          
              // for (var i = 0; i < authorities.length; i++) {            
              //   var menu = {};
              //   menu.name = authorities[i].name;
              //   menu.path = authorities[i].path;
              //   menu.component = _import(authorities[i].component);
              //   if (authorities[i].icon) {
              //     menu.icon = authorities[i].icon;
              //   }
              //   if (authorities[i].redirect) {
              //     menu.redirect = authorities[i].redirect;
              //   }
              //   if (authorities[i].hidden) {
              //     menu.hidden = authorities[i].hidden;
              //   }          
              //   accessMenu[0].children.push(menu); 
              // }
              //Cookies.set('Admin-routers', "hello world"); 
              //console.info(accessMenu);
              commit('SET_ROUTERS', accessMenu); 
              
              // 动态添加可访问路由表 
              router.addRoutes(accessMenu);    
          }else{//例如 服务端JWT的token过期，返回 {"code":"1000","desc":"Token失效,请重新登录"}
              //清除store中的数据，router.beforeEach 时候会检查是否有当前用户，如果没有 重定向到登录页面
              commit('SET_TOKEN', '');
              commit('SET_USER', []);
              commit('SET_ROUTERS', []); 
              Cookies.remove('Admin-Token');
              Cookies.remove('Admin-User');
              if (!Cookies.get('RememberMe')) {
                  Cookies.remove('Admin-userName');
                  Cookies.remove('Admin-password');
              } 
          }
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.user.userName).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_USER', []);
          commit('SET_ROUTERS', []);  
          Cookies.remove('Admin-Token');
          Cookies.remove('Admin-User');      
          console.info(Cookies.get('RememberMe'));   
          if (Cookies.get('RememberMe') != 'true' ) {
            console.info("remove admin 111111 from cookies")
              Cookies.remove('Admin-userName');
              Cookies.remove('Admin-password');
          }          
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {        
          commit('SET_TIPS', '登录过期，请重新登录');
          commit('SET_TOKEN', '');
          commit('SET_USER', []);
          commit('SET_ROUTERS', []); 
          Cookies.remove('Admin-Token');
          Cookies.remove('Admin-User');
          if (!Cookies.get('RememberMe')) {
              Cookies.remove('Admin-userName');
              Cookies.remove('Admin-password');
          } 
          resolve();
      });
    },

    // 获取订单列表
    // GetOrderInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getOrderList(state.token).then(response => {
    //       console.info(response.msg);
    //       resolve(response.msg);
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    // 动态修改权限
    ChangeRole({ commit }, role) {
      return new Promise(resolve => {
        //commit('SET_ROLES', [role]);
        commit('SET_TOKEN', role);
        Cookies.set('Admin-Token', role);
        resolve();
      })
    }
  }
};

export default user;
