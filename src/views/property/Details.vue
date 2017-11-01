<template>
<div>
    <Card>
        <Form  :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <Form-item label="优享空间名称:">
                         <span>香年广场T1</span>
                    </Form-item>
                </Col>
                <Col span="6">
                    <Form-item label="订单号:">
                         <span>10000000001</span>
                    </Form-item>
                </Col>
                <Col span="6">
                    <Form-item label="订单金额:">
                         <span>￥30.56</span>
                    </Form-item>
                </Col>
                <Col span="6">
                    <Form-item label="商品数量:">
                         <span>4</span>
                    </Form-item>
                </Col>
            </Row>
            <Row >
                <Col span="6">
                    <Form-item label="订单状态:">
                         <span> 已支付</span>
                    </Form-item>
                </Col>
                <Col span="6">
                    <Form-item label="订单时间:">
                         <span>2017.3.20  16:35:50</span>
                    </Form-item>
                </Col>
            </Row>
         </Form>
    </Card>
    <br/>
    <Card>
        <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
        <Page :current="2" :total="50" show-elevator></Page>
        <div class="clearfix"></div>
    </Card>
</div>
</template>

<script>
    export default {
            data () {
            return {
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品条码',
                        key: 'num'
                    },
                    {
                        title: '商品名',
                        key: 'name'
                    },
                    {
                        title: '商品价格',
                        key: 'opne_up_time'
                    },
                    {
                        title: '退款状态',
                        key: 'containers_count'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                            let _this = this
                            return h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        _this.refunds(params.index)
                                    }
                                 }
                            }, '退款')
                        }
                    },
                ],
                data1: [
                    {
                        num: '10000000001',
                        name: '统一冰红茶',
                        opne_up_time: '￥4.00',
                        containers_count: '已退款'
                    },
                    {
                        num: '10000000001',
                        name: '统一冰红茶',
                        opne_up_time: '￥4.00',
                        containers_count: '已退款'
                    }
                ]
            }
        },
        methods: {
            refunds (index) {
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>确定要退款吗？</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            }
        }

    }
</script>

<style scoped>

</style>
