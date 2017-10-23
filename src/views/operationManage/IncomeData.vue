<template>
<div>
    <div class="h6">商品收入</div>
    <div class="form-container">
     <Form label-width="80" label-position="left">
     <Row type="flex" :gutter="20">
        <Col span="4" order="1" >
            <FormItem label="开始日期">
                <DatePicker type="date" placeholder="选择日期" ></DatePicker>
            </FormItem>
        </Col>
        <Col span="4" order="2">
            <FormItem label="结束日期">
                <DatePicker type="date" placeholder="选择日期" ></DatePicker>
            </FormItem>
        </Col>
    </Row>
    <FormItem label="商品种类:">
        <Select placeholder="请选择" style="width:200px;">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
        </Select>
    </FormItem>
    <FormItem label="优享空间:" >
                <Select placeholder="支付方式"  style="width:200px;">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
    </FormItem>
    <FormItem label="收入查询：:">
        <Input v-model="value" placeholder="请输入商品名称/商品编号" style="width: 300px"></Input>
        <Button type="primary" icon="ios-search" >搜索</Button>
    </FormItem>
    </Form>
      <div style="margin-top:15px;">
          <Table border :columns="columns1" :data="data1"></Table>
          <Page :current="2" :total="50" simple style="float:right; margin-top:10px;"></Page>
    </div>
    </div>
</div>
</template>

<script>
    export default{
       data () {

            return {
                 columns1: [
                    {
                        title: '排序',
                        key: 'code'
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
                        title: '商品种类',
                        key: 'phone_num'
                    },
                    {
                        title: '默认售价',
                        key: 'gendar'
                    },
                    {
                        title: '支付方式',
                        key: 'belongs'
                    },
                    {
                        title: '订单时间',
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

</style>

