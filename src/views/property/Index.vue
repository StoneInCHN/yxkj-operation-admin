<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>查询条件</span>
        </p>
        <Form  :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <Form-item label="优享空间名称">
                         <Select placeholder="请选择" filterable>
                            <Option value="1">全部</Option>
                            <Option value="2">扫码购买</Option>
                            <Option value="3">输码购买</Option>
                            <Option value="4">中控购买</Option>
                            <Option value="5">线上货柜购买</Option>
                        </Select>
                    </Form-item>
                </Col>
                <Col span="8" >
                    <FormItem label="选择日期">
                       <DatePicker type="daterange" :options="dateOptions" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="6">
                <div style="margin-left:-10px;">  
                    <Form-item>
                        <Button type="primary" icon="ios-search" >搜索</Button>
                    </Form-item>
                </div>
                </Col>
            </Row>
         </Form>
        <Row>
            <Col span="24">
                      <Circle
                        :size="100"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="100"
                        stroke-linecap="square"
                        stroke-color="#F24E09">
                        <div class="demo-Circle-custom">
                            <h1>2500</h1>
                            <p>总销售额</p>
                        </div>
                    </Circle>
                    <Circle
                        :size="100"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="100"
                        stroke-linecap="square"
                        stroke-color="#F24E09">
                        <div class="demo-Circle-custom">
                            <h1>200</h1>
                            <p>总分成</p>
                        </div>
                    </Circle>
                    <Circle
                        :size="100"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="75"
                        stroke-linecap="square"
                        stroke-color="#43a3fb">
                        <div class="demo-Circle-custom">
                            <h1>2000</h1>
                            <p>该点销售额</p>
                        </div>
                    </Circle>
                    <Circle
                        :size="100"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="50"
                        stroke-linecap="square"
                        stroke-color="#43a3fb">
                        <div class="demo-Circle-custom">
                            <h1>100</h1>
                            <p>该点分成</p>
                        </div>
                    </Circle>
                    <Circle
                        :size="100"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="3"
                        stroke-linecap="square"
                        stroke-color="#43a3fb">
                        <div class="demo-Circle-custom">
                            <h1>3%</h1>
                            <p>分润点</p>
                        </div>
                    </Circle>
                 </Col>
             </Row>
    </Card>
    <br/>
    <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
    <Page :current="2" :total="50" show-elevator></Page>
</div>
</template>

<script>
    export default {
            data () {
            return {
                dateOptions: {
                    shortcuts: [
                        {
                            text: '昨天',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        }
                    ]
                },
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '优享空间',
                        key: 'num'
                    },
                    {
                        title: '订单号',
                        key: 'name'
                    },
                    {
                        title: '订单金额',
                        key: 'opne_up_time'
                    },
                    {
                        title: '商品数量',
                        key: 'containers_count'
                    },
                    {
                        title: '订单状态',
                        key: 'is_micro_container'
                    },
                    {
                        title: '订单时间',
                        key: 'is_micro_container'
                    },
                    {
                        title: '分润点',
                        key: 'is_micro_container'
                    },
                    {
                        title: '分润金额',
                        key: 'is_micro_container'
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
                                        _this.details(params.index)
                                    }
                                 }
                            }, '查看详情')
                        }
                    }
                ],
                data1: [
                    {
                        num: '10000000001',
                        name: '统一冰红茶',
                        opne_up_time: '￥4.00',
                        containers_count: '已退款'
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居'
                    }
                ]
            }
        },
        methods: {
            details (index) {
                this.$router.push("details")
            },
            deleteItem () {
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>删除优享空间会同时删除其中的货柜，确认要删除选中的优享空间吗？</p>',
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
    .demo-Circle-custom h1{
        color: #3f414d;
        font-size: 18px;
        font-weight: normal;
    }
    .demo-Circle-custom p{
        color: #657180;
        font-size: 14px;
        margin: 10px 0 15px;
    }
    .demo-Circle-custom span{
        display: block;
        padding-top: 15px;
        color: #657180;
        font-size: 14px;
    }
    .demo-Circle-custom span:before{
            content: '';
            display: block;
            width: 50px;
            height: 1px;
            margin: 0 auto;
            background: #e0e3e6;
            position: relative;
            top: -15px;
    }
    .demo-Circle-custom span i{
        font-style: normal;
        color: #3f414d;
    }
</style>
