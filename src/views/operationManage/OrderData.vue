<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="android-people"></Icon>订单数据
        </p>
        <Form :label-width="100" label-position="right" >
             <Row >
                <Col span="6" >
                    <FormItem label="开始日期">
                        <DatePicker type="date" placeholder="选择日期" ></DatePicker>
                    </FormItem>
                </Col>
                <Col span="6" >
                    <FormItem label="结束日期">
                        <DatePicker type="date" placeholder="选择日期" ></DatePicker>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="购买方式:">
                        <Select placeholder="请选择">
                            <Option value="1">全部</Option>
                            <Option value="2">扫码购买</Option>
                            <Option value="3">输码购买</Option>
                            <Option value="4">中控购买</Option>
                            <Option value="5">线上货柜购买</Option>
                        </Select>
                    </FormItem>
                 </Col>
                 <Col span="6">
                    <FormItem label="支付方式:">
                        <Select placeholder="支付方式">
                            <Option value="1">全部</Option>
                            <Option value="2">微信</Option>
                            <Option value="3">支付宝</Option>
                        </Select>
                     </FormItem>
                 </Col>
            </Row>
            <Row>
                <Col span="6">
                    <FormItem label="优享空间名称:">
                        <Input v-model="name" placeholder="请输入优享空间名称"></Input>
                     </FormItem>
                 </Col>
                 <Col span="6">
                    <FormItem label="用户名:">
                        <Input v-model="username" placeholder="请输入用户名"></Input>
                     </FormItem>
                 </Col>
                 <Col span="6">
                    <FormItem label="订单号:">
                        <Input v-model="orderId" placeholder="请输入订单号"></Input>
                     </FormItem>
                 </Col>
                 <Col span="6">
                    <Button type="primary" icon="ios-search" class="search-btn">搜索</Button>
                 </Col>
            </Row>
        </Form>
    </Card>
    <div class="btn-groups">
        <Button type="info" >全部</Button>
        <Button type="ghost" >已支付</Button>
        <Button type="ghost" >已完成</Button>
        <Button type="ghost" >未支付</Button>
    </div>
    <Table :columns="columns1" :data="data1" align="center"></Table>
    <Page :current="2" :total="50" show-elevator ></Page>
</div>
</template>

<script>
    export default{
       data () {
            return {
                 columns1: [
                    {
                        title: '订单号',
                        key: 'code'
                    },
                    {
                        title: '用户名',
                        key: 'name'
                    },
                    {
                        title: '订单金额',
                        key: 'acount'
                    },
                     {
                        title: '商品数量',
                        key: 'num'
                    },
                    {
                        title: '优享空间',
                        key: 'gendar'
                    },
                    {
                        title: '订单状态',
                        key: 'order_status'
                    },
                    {
                        title: '购买方式',
                        key: 'shopping_method'
                    },
                    {
                        title: '支付方式',
                        key: 'pay_method'
                    },
                    {
                        title: '订单时间',
                        key: 'order_date'
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
                                            const id = '123'
                                            this.$router.push({ path: `order-data/${id}` })
                                        }
                                    }
                                }, '查看详情')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        code: '王小明',
                        name: '王小明',
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                        orderId: '123'
                    },
                    {
                        code: '王小明',
                        name: '王小明',
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                        orderId: '123'
                    },
                    {
                        code: '王小明',
                        name: '王小明',
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                        orderId: '123'
                    }
                ]
            }
    }
}
</script>

<style scoped>

</style>

