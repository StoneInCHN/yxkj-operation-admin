<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="android-people"></Icon>用户数据
        </p>
         <Form :label-width="100" label-position="right" :model="formItem">
            <Row >
                <Col span="6">
                    <FormItem label="选择优享空间">
                       <SelectScene :sceneId.sync="formItem.sceneId"></SelectScene>
                    </FormItem>
                </Col>
                <Col span="7">
                    <FormItem label="选择日期">
                        <DatePicker type="daterange" v-model="formItem.daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="6">
                 <div style="margin-left:-60px;">  
                    <FormItem>
                        <Button type="primary" icon="ios-search" @click="search">搜索</Button>
                    </FormItem>
                    </div>
                </Col>
            </Row>
        </Form>
    </Card>
    <br/>
    <Card>
         <Tabs>
            <TabPane label="所有用户" >
                <Table :columns="columns1" :data="data1"></Table>
                <Page :current="page1.pageNumber" :total="page1.total" show-elevator @on-change="changePage1"></Page>
            </TabPane>
            <TabPane label="注册用户" >
                <Table :columns="columns2" :data="data2"></Table>
                <Page :current="page2.pageNumber" :total="page2.total" show-elevator @on-change="changePage2"></Page>
            </TabPane>
        </Tabs>
    </Card>
</div>
</template>

<script>
import SelectScene from '@/components/common/SelectScene'
import {allList, regList} from 'api/user'
import {dropDownList} from 'api/scene'
     export default {
        components: {SelectScene},
        data () {
            return {
                sceneDatas:[],
                formItem: {
                    sceneId: '',
                    daterange: ''
                },
                page1:{
                    pageNumber: 1,
                    pageSize: 10,
                    total: 0
                },
                page2:{
                    pageNumber: 1,
                    pageSize: 10,
                    total: 0
                },
                columns1: [
                    {
                        title: '用户识别码',
                        key: 'userName',
                        width: 300,
                        ellipsis: true
                    },
                    {
                        title: '用户名称',
                        key: 'nickName'
                    },
                    {
                        title: '支付方式',
                        key: 'userChannel',
                        render: (h, params) => {
                            let label = ''
                            if (params.row.userChannel === 'ALIPAY'){
                                label = '支付宝'
                            } else if (params.row.userChannel === 'WECHAT') {
                                label = '微信'
                            }
                            return h('div', [
                                h('span', label)
                            ]);
                        }
                    },
                     {
                        title: '手机号',
                        key: 'cellPhoneNum'
                    },
                    {
                        title: '性别',
                        key: 'gender',
                        render: (h, params) => {
                            let label = ''
                            if (params.row.userChannel === 'MALE'){
                                label = '男'
                            } else if (params.row.userChannel === 'FEMALE') {
                                label = '女'
                            }
                            return h('div', [
                                h('span', label)
                            ]);
                        }
                    },
                    {
                        title: '注册时间',
                        key: 'regTime'
                    },
                    {
                        title: '所属优享空间',
                        key: 'sceneName'
                    },
                    {
                        title: '用户获取渠道',
                        key: 'userChannel',
                        render: (h, params) => {
                            let label = ''
                            if (params.row.userChannel === 'ALIPAY'){
                                label = '支付宝'
                            } else if (params.row.userChannel === 'WECHAT') {
                                label = '微信'
                            }
                            return h('div', [
                                h('span', label)
                            ]);
                        }
                    }
                ],
                data1: [],
                columns2: [
                    {
                        title: '手机号',
                        key: 'cellPhoneNum'
                    },
                    {
                        title: '支付宝昵称',
                        key: 'alipayName'
                    },
                    {
                        title: '微信昵称',
                        key: 'wechatNickName'
                    },
                     {
                        title: '性别',
                        key: 'gender'
                    },
                    {
                        title: '注册时间',
                        key: 'gender'
                    },
                    {
                        title: '所属优享空间',
                        key: 'sceneName'
                    },
                    {
                        title: '用户获取渠道',
                        key: 'userChannel'
                    }
                ],
                data2: []
            }
        },
        mounted () {
            this.getAllList({})
            this.getRegList({})
        },
        methods: {
            search () {
                let params = {
                    sceneId: this.formItem.sceneId,
                    startTime: this.formItem.daterange[0],
                    endTime: this.formItem.daterange[1]
                }
                this.getAllList(params,this.page1.pageNumber)
                this.getRegList(params,this.page2.pageNumber)
            },
            changePage1 (currentPage) {
                let params = {
                    sceneId: this.formItem.sceneId,
                    startTime: this.formItem.daterange[0],
                    endTime: this.formItem.daterange[1]
                }
                this.page1.pageNumber = currentPage
                this.getAllList(params,this.page1.pageNumber)
            },
            changePage2 (currentPage) {
                let params = {
                    sceneId: this.formItem.sceneId,
                    startTime: this.formItem.daterange[0],
                    endTime: this.formItem.daterange[1]
                }
                this.page2.pageNumber = currentPage
                this.getRegList(params,this.page2.pageNumber)
            },
            getAllList (filterData,pNum) {
                allList(filterData,pNum).then((res)=> {
                    if (res.msg) {
                        this.data1 = res.msg
                        this.page1.total = res.page.total
                    }
                })
            },
            getRegList (filterData,pNum) {
                regList(filterData,pNum).then((res)=> {
                    if (res.msg) {
                        this.data2 = res.msg
                        this.page2.total = res.page.total
                    }
                })
            }
        }
    }
</script>

<style scoped>
.page-position{
    float:right; 
    margin-top:10px;
}
</style>

