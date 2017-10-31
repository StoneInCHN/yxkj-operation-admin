<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="android-people"></Icon>用户数据
        </p>
         <Form :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <FormItem label="开始日期">
                        <DatePicker type="date" placeholder="选择日期" ></DatePicker>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="结束日期">
                        <DatePicker type="date" placeholder="选择日期" ></DatePicker>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="选择优享空间">
                        <Select placeholder="请选择">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="6">
                 <div style="margin-left:-60px;">  
                    <FormItem>
                        <Button type="primary" icon="ios-search">搜索</Button>
                    </FormItem>
                    </div>
                </Col>
            </Row>
        </Form>
    </Card>
    <br/>
     <Tabs >
        <TabPane label="所有用户">
            <Table :columns="columns1" :data="data1"></Table>
            <Page :current="2" :total="50" simple class="page-position"></Page>
        </TabPane>
        <TabPane label="注册用户">
            <Table :columns="columns2" :data="data2"></Table>
            <Page :current="2" :total="50" show-elevator></Page>
        </TabPane>
    </Tabs>
</div>
</template>

<script>
     export default {
        data () {
            return {
                columns1: [
                    {
                        title: '用户识别码',
                        key: 'code'
                    },
                    {
                        title: '用户名称',
                        key: 'name'
                    },
                    {
                        title: '支付方式',
                        key: 'pay_method'
                    },
                     {
                        title: '手机号',
                        key: 'phone_num'
                    },
                    {
                        title: '性别',
                        key: 'gendar'
                    },
                    {
                        title: '注册时间',
                        key: 'register_date'
                    },
                    {
                        title: '所属优享空间',
                        key: 'belongs'
                    },
                    {
                        title: '用户获取渠道',
                        key: 'channels'
                    }
                ],
                data1: [
                    {
                        code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        register_date: '2017-08-30',
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    },
                    {
                          code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        register_date: '2017-08-30',
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    },
                    {
                       code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        register_date: '2017-08-30',
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    },
                    {
                       code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        register_date: '2017-08-30',
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    }
                ],
                columns2: [
                    {
                        title: '手机号',
                        key: 'code'
                    },
                    {
                        title: '支付宝昵称',
                        key: 'name'
                    },
                    {
                        title: '微信昵称',
                        key: 'pay_method'
                    },
                     {
                        title: '性别',
                        key: 'phone_num'
                    },
                    {
                        title: '注册时间',
                        key: 'gendar'
                    },
                    {
                        title: '所属优享空间',
                        key: 'belongs'
                    },
                    {
                        title: '用户获取渠道',
                        key: 'channels'
                    }
                ],
                data2: [
                    {
                        code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    },
                    {
                          code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    },
                    {
                       code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '王小明',
                    }
                ]
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

