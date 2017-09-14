import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NotFound from '@/components/404.vue'
import Main from '@/components/Main.vue'
import Table from '@/components/nav1/Table.vue'
import Form from '@/components/nav1/Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '404',
      hidden: true
    },
    {
      path: '/',
      name: '工作台',
      component: Home,
      iconCls: 'ios-home',
      children: [
        { path: '/main', component: Main, name: '主页', iconCls: 'ios-home', hidden: true },
        { path: '/table', component: Table, iconCls: 'ios-paper-outline', name: '表格' },
        { path: '/form', component: Form, iconCls: 'ios-settings', name: '表单' }
      ]
    }
  ]
})
