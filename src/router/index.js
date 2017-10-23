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
import Container from '@/views/sence/Index'
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
                    { path: 'user-data', name: '用户数据', icon: 'android-document', component: UserData },
                    { path: 'order-data', name: '订单数据', icon: 'android-document', component: OrderData },
                    { path: 'income-data', name: '收入数据', icon: 'android-list', component: IncomeData }
                ]
            },
            {
                path: '/sence',
                name: '优享空间',
                icon: 'speedometer',
                component: Container,
            },
            {
                path: '/goods',
                name: '商品管理',
                icon: 'speedometer',
                component: GoodsManage
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
                    { path: 'bulter', name: '管家管理', icon: 'ios-paper', component: BulterManage },
                    { path: 'property', name: '物业管理', icon: 'ios-paper', component: PropertyManage }
                ]
            },
            {
                path: '/advertisement',
                name: '广告管理',
                icon: 'speedometer',
                component: GoodsManage
            },
            {
                path: '/sysytem',
                name: '系统管理',
                icon: 'speedometer',
                component: GoodsManage
            },
            {
                path: '/property-platform',
                name: '物业平台',
                icon: 'speedometer',
                component: GoodsManage
            },
            {
                path: '/property-platform',
                name: '物业平台',
                icon: 'speedometer',
                component: GoodsManage
            },
            {
                path: '/exceptions',
                name: '异常管理',
                icon: 'speedometer',
                component: GoodsManage
            },
            {
                path: '/messages',
                name: '消息',
                icon: 'speedometer',
                component: GoodsManage
            },
            {
                path: '/replenish-message',
                name: '补货信息',
                component: ReplenishMessage,
                hidden: true
            },
            {
                path: '/QRCode-manage',
                name: '二维码管理',
                component: QRCodeManage,
                hidden: true
            },
            {
                path: '/add-new-sence',
                name: '新增场景',
                component: AddNewSence,
                hidden: true
            },
            {
                path: '/edit-sence',
                name: '编辑场景',
                component: EditSence,
                hidden: true
            },
            {
                path: '/container-manage',
                name: '货柜管理',
                component: ContainerManage,
                hidden: true
            },
            {
                path: '/edit-container',
                name: '编辑货柜',
                component: EditContainer,
                hidden: true
            },
            {
                path: '/add-container',
                name: '新增货柜',
                component: AddNewContainer,
                hidden: true
            },
            {
                path: '/waring-value-manage',
                name: '预警值管理',
                component: WarningValueManage,
                hidden: true
            },
            {
                path: '/container-type-manage',
                name: '货柜类型管理',
                component: ContainerTypeManage,
                hidden: true
            },
        ]
    },

    // { path: '*', redirect: '/pages/404', hidden: true }

];