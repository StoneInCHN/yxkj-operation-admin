<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="android-people"></Icon>订单数据
        </p>
        <Form :label-width="100" label-position="right" :model="formItem">
             <Row >
                <Col span="6">
                    <FormItem label="优享空间名称:">
                        <Input v-model="formItem.sceneName" placeholder="请输入优享空间名称"></Input>
                     </FormItem>
                 </Col>
                 <Col span="6">
                    <FormItem label="用户名:">
                        <Input v-model="formItem.username" placeholder="请输入用户名"></Input>
                     </FormItem>
                 </Col>
                <Col span="6">
                    <FormItem label="购买方式:">
                        <Select placeholder="请选择" v-model="formItem.purMethod"> 
                            <Option v-for="item in payMethods" :value="item.value" :key="item.value">{{item.name}}</Option>
                        </Select>
                    </FormItem>
                 </Col>
                 <Col span="6">
                    <FormItem label="支付方式:">
                        <Select placeholder="支付方式" v-model="formItem.paymentTypeId">
                             <Option v-for="item in paymentTypes" :value="item.value" :key="item.value">{{item.name}}</Option>
                        </Select>
                     </FormItem>
                 </Col>
            </Row>
            <Row>
                <Col span="6">
                    <FormItem label="订单号:">
                        <Input  placeholder="请输入订单号" v-model="formItem.orderSn"></Input>
                     </FormItem>
                 </Col>
                <Col span="7" >
                    <FormItem label="选择日期">
                        <DatePicker type="daterange" placement="bottom-end" v-model="formItem.daterange" placeholder="选择日期" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                 <Col span="6">
                    <Button type="primary" icon="ios-search" class="search-btn" @click="search">搜索</Button>
                 </Col>
            </Row>
        </Form>
    </Card>
    <br/>
    <Card>
        <div class="btn-groups">
            <Button type="info" >全部</Button>
            <Button type="ghost" >已支付</Button>
            <Button type="ghost" >已完成</Button>
            <Button type="ghost" >未支付</Button>
        </div>
        <Table :columns="columns" :data="lists" align="center"></Table>
         <Page :current="page.pageNumber" :total="page.total" show-elevator @on-change="changePage"></Page>
        <div class="clearfix"></div>
    </Card>
</div>
</template>

<script>
    import {getOrderList, getOrderDetail} from 'api/order'
    export default{
       data () {
            return {
                formItem: {},
                page:{
                    pageNumber: 1,
                    pageSize: 10,
                    total: 0
                },
                columns: [
                    {
                        title: '订单号',
                        key: 'sn'
                    },
                    {
                        title: '用户名',
                        key: 'endUser.userName'
                    },
                    {
                        title: '订单金额',
                        key: 'amount'
                    },
                     {
                        title: '商品数量',
                        key: 'itemCount'
                    },
                    {
                        title: '优享空间',
                        key: 'sceneName'
                    },
                    {
                        title: '订单状态',
                        key: 'status'
                    },
                    {
                        title: '购买方式',
                        key: 'purMethod'
                    },
                    {
                        title: '支付方式',
                        key: 'paymentType'
                    },
                    {
                        title: '订单时间',
                        key: 'createDate'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            let id = params.row.id
                                            this.$router.push({ path: `order-data/${id}` })
                                        }
                                    }
                                }, '查看详情')
                            ]);
                        }
                    }
                ],
                lists: []
            }
    },
    mounted () {
        this.list()
    },
    computed: {
        payMethods () {
            return this.$store.getters.payMethod
        },
        paymentTypes () {
            return this.$store.getters.paymentTypes
        }
    },
    methods: {
        search () {
            this.list(this.formItem)
        },
        list (filters) {
            getOrderList(filters).then((res) => {
                if (res.msg) {
                    this.lists = res.msg
                    this.page.total = res.page.total
                }
            })
        },
        changePage (currentPage) {
            this.list(this.formItem)
            this.page.pageNumber = currentPage
        }
    }
}
</script>

<style >

</style>

