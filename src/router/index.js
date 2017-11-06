import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'

// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'
import DataDetail from '@/views/operationManage/DataDetail'
import UserData from '@/views/operationManage/UserData'
import OrderData from '@/views/operationManage/OrderData'
import IncomeData from '@/views/operationManage/IncomeData'
import ReplenishMessage from '@/views/sence/ReplenishMessage'
import QRCodeManage from '@/views/sence/QRCodeManage'
import AddNewContainer from '@/views/sence/AddNewContainer'
import EditContainer from '@/views/sence/EditContainer'
import ContainerManage from '@/views/sence/ContainerManage'
import GoodsManage from '@/views/goodsManage/Index'
import BulterManage from '@/views/roleManage/BulterManage'
import PropertyManage from '@/views/roleManage/PropertyManage'
import EditSence from '@/views/sence/EditSence'
import AddNewSence from '@/views/sence/AddNewSence'
import WarningValueManage from '@/views/sence/WarningValueManage'
import ContainerTypeManage from '@/views/sence/ContainerTypeManage'
/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {
        path: '/pages',
        redirect: '/pages/p404',
        name: 'Pages',
        component: {
            render(c) { return c('router-view') }
        },
        children: [{ path: '404', name: 'Page404', component: _import('errorPages/Page404') },
            { path: '500', name: 'Page500', component: _import('errorPages/Page404') },
        ]
    }
]

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});

export const asyncRouterMap = [{
        path: '/',
        redirect: '/operation-manage',
        name: '首页',
        component: Full,
        hidden: false,
        children: [{
                path: '/operation-manage',
                name: '运营管理',
                icon: 'android-list',
                redirect: '/operation-manage/outline',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'outline', name: '数据概览', icon: 'ios-paper', component: DataDetail },
                    { path: 'user-data', name: '用户数据', icon: 'android-people', component: UserData },
                    { path: 'order-data', name: '订单数据', icon: 'android-document', component: OrderData},
                    { path: 'income-data', name: '收入数据', icon: 'android-list', component: IncomeData },
                    { path: 'order-data/:id', name: '订单详情',hidden: true, icon: 'ios-paper', component: _import('operationManage/OrderDetails') }
                ]
            },
            {
                path: '/sence',
                name: '优享空间',
                icon: 'speedometer',
                redirect: '/sence/index',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'index', name: '优享空间', icon: 'ios-paper', component: _import('sence/Index') },
                    { path: 'add', name: '添加、编辑优享空间', hidden: true, icon: 'android-people', component: _import('sence/AddNewSence') },
                    { path: 'qrCode', name: '二维码管理', hidden: true, icon: 'android-people', component: _import('sence/QRCodeManage') },
                    { path: 'replenish', name: '二维码管理', hidden: true, icon: 'android-people', component: _import('sence/ReplenishMessage') },
                    { path: 'container-type', name: '货柜类型', icon: 'ios-paper', component: _import('sence/ContainerTypeManage') },
                    { 
                        path: 'containers',
                        name: '货柜管理',
                        icon: 'android-people',
                        hidden: true,
                        redirect: '/sence/containers/index',
                        component: {
                            render(c) { return c('router-view') }
                        },
                        children: [
                            { path: 'index', name: '货柜管理', icon: 'ios-paper', component: _import('sence/ContainerManage') },
                            { path: 'add', name: '添加货柜', icon: 'ios-paper', component: _import('sence/AddNewContainer') },
                            { path: 'edit', name: '编辑货柜', icon: 'ios-paper', component: _import('sence/EditContainer') },
                            { path: 'channel', name: '货道管理', icon: 'ios-paper', component: _import('sence/Channel') },
                            { path: 'channel-management', name: '编辑货柜', icon: 'ios-paper', component: _import('sence/ChannelManagement') }
                        ] 
                    }  
                ]
            },
            {
                path: '/goods',
                name: '商品管理',
                icon: 'speedometer',
                redirect: '/goods/index',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'index', name: '商品列表', icon: 'ios-paper', component: _import('goodsManage/Index') },
                    { path: 'add', name: '添加商品', hidden: true, icon: 'ios-paper', component: _import('goodsManage/AddGoods') },
                    { path: 'edit', name: '编辑商品', hidden: true, icon: 'ios-paper', component: _import('goodsManage/EditGoods') },
                    { path: 'goodsType', name: '商品分类管理',hidden: true, icon: 'ios-paper', component: _import('goodsManage/GoodsType') }
                ]
            },
            {
                path: '/role',
                name: '角色管理',
                icon: 'speedometer',
                component: {
                    render(c) { return c('router-view') }
                },
                redirect: '/role/bulter',
                children: [
                    { 
                        path: 'bulter',
                        name: '管家管理', 
                        icon: 'ios-paper', 
                        redirect: '/role/bulter/index',
                        component: {
                            render(c) { return c('router-view') }
                        },
                        children: [
                            { path: 'index', name: '管家列表', icon: 'ios-paper', component: _import('roleManage/BulterManage') },
                            { path: 'add', name: '新增管家信息', hidden: true, icon: 'ios-paper', component: _import('roleManage/AddBulter') },
                            { path: 'edit/:id', name: '修改管家信息', hidden: true, icon: 'ios-paper', component: _import('roleManage/EditBulter') }
                        ]
                    },
                    { 
                        path: 'property', 
                        name: '物业管理', 
                        icon: 'ios-paper', 
                        redirect: '/role/property/index',
                        component: {
                            render(c) { return c('router-view') }
                        },
                        children: [
                            { path: 'index', name: '物业列表', icon: 'ios-paper', component: _import('roleManage/PropertyManage') },
                            { path: 'add', name: '新增物业信息', hidden: true, icon: 'ios-paper', component: _import('roleManage/AddProperty') },
                            { path: 'edit', name: '修改物业信息', hidden: true, icon: 'ios-paper', component: _import('roleManage/EditProperty') }
                        ]
                    }
                ]
            },
            {
                path: '/advertisement',
                name: '广告管理',
                icon: 'speedometer',
                redirect: '/advertisement/index',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'index', name: '广告列表', icon: 'ios-paper', component: _import('advertisement/Index') },
                    { path: 'store', name: '广告库', hidden: true, icon: 'ios-paper', component: _import('advertisement/Store') },
                    { path: 'operation', name: '批量操作',hidden: true, icon: 'ios-paper', component: _import('advertisement/Operation') }
                ]
            },
            {
                path: '/sysytem',
                name: '系统管理',
                icon: 'speedometer',
                redirect: '/sysytem/index',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'index', name: '中控版本', icon: 'ios-paper', component: _import('sysytem/Index') },
                    { path: 'add', name: '新增',hidden: true, icon: 'ios-paper', component: _import('sysytem/Add') },
                    { path: 'record', name: '更新记录',hidden: true, icon: 'ios-paper', component: _import('sysytem/UpdateRecord') },
                    { path: 'addSence', name: '更新记录',hidden: true, icon: 'ios-paper', component: _import('sysytem/AddSence') }
                ]
            },
            {
                path: '/property',
                name: '物业平台',
                icon: 'speedometer',
                redirect: '/property/index',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'index', name: '物业平台', icon: 'ios-paper', component: _import('property/Index') },
                    { path: 'details', name: '详情订单',hidden: true, icon: 'ios-paper', component: _import('property/Details') }
                ]
            },
            {
                path: '/exceptions',
                name: '异常管理',
                icon: 'speedometer',
                component: _import('exceptions/Index')
            },
            {
                path: '/messages',
                name: '消息',
                icon: 'speedometer',
                hidden: true,
                redirect: '/messages/index',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    { path: 'index', name: '消息', icon: 'ios-paper', component: _import('messages/Index') }
                ]
            }
        ]
    },

    // { path: '*', redirect: '/pages/404', hidden: true }

];