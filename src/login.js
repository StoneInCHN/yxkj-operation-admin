import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import Cookies from 'js-cookie';
import {getCurrentUser} from 'api/common';

// permissiom judge
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin权限 直接通过
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}


const whiteList = ['/login', '/authredirect']// 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress  
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.user.length === 0) {
          next({ path: '/login' }) 
      }else{
        if (store.getters.addRouters && store.getters.addRouters.length > 0) {
          //console.info("666");
          next();
        }else{
          console.info("autoLogin");
          var loginForm = {}
          loginForm.userName = Cookies.get('Admin-userName')
          loginForm.password = Cookies.get('Admin-password')
          loginForm.captcha = Cookies.get('Admin-captcha')
          loginForm.captchaId = Cookies.get('Admin-captchaId')
          loginForm.autoLogin = true
          store.dispatch('Login', loginForm).then(res => {
              
          }).catch(err => {
              this.$message.error(err);
          });
          next();
        }                   
          //router.addRoutes(Cookies.get('Admin-routers')) // 动态添加可访问路由表
          //next({ ...to }) // hack方法 确保addRoutes已完成
      }
    }
  } else {
    //console.info("9999");
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
})

router.afterEach((transition) => {
  NProgress.done() // 结束Progress
})
