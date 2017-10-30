<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="ios-search"></Icon>查询条件
        </p>
        <Form label-width="80" label-position="right">
            <Row  >
                <Col span="6" >
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
                    <FormItem label="商品种类:">
                        <Select placeholder="请选择">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="优享空间:" >
                        <Select placeholder="支付方式" >
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row >
                <Col span="6">
                    <FormItem label="商品名称">
                        <Input v-model="value" placeholder="请输入商品名称"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="商品条码">
                        <Input v-model="value" placeholder="请输入商品条码"></Input>

                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem>
                        <Button type="primary" icon="ios-search" class="search-btn">搜索</Button>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Card>
    <div class="btn-groups">
        <Button type="primary" size="large" ><Icon type="ios-download-outline"></Icon> Excel导出</Button>
    </div>
    <Table border :columns="columns1" :data="data1"></Table>
    <Page :current="2" :total="50" show-elevator></Page>
</div>
</template>

<script>
    export default{
       data () {

            return {
                 columns1: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品条码',
                        key: 'name'
                    },
                    {
                        title: '商品名称',
                        key: 'pay_method'
                    },
                     {
                        title: '净含量',
                        key: 'phone_num'
                    },
                    {
                        title: '商品种类',
                        key: 'type'
                    },
                    {
                        title: '默认售价',
                        key: 'belongs'
                    },
                    {
                        title: '商品点击量',
                        key: 'channels',
                        sortable: true
                    },
                    {
                        title: '商品销量',
                        key: 'channels',
                        sortable: true
                    },
                    {
                        title: '商品销售额',
                        key: 'channels',
                        sortable: true
                    }
                ],
                data1: [
                    {
                        code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '3',
                    },
                    {
                          code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '3',
                    },
                    {
                       code: '王小明',
                        name: 18,
                        pay_method: '北京市朝阳区芍药居',
                        phone_num: '王小明',
                        gendar: 18,
                        belongs: '北京市朝阳区芍药居',
                        channels: '2',
                    }
                ]
            }
    }
}
</script>

<style scoped>
</style>

