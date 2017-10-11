<template>
<div>
    <div>订单数据</div>
    <div class="form-container">
     <Form label-width="80">
     <Row type="flex">
        <Col span="4" order="1">
           <div style="margin-left:-10px;">
                <FormItem label="开始日期">
                <DatePicker type="date" placeholder="选择日期" ></DatePicker>
            </FormItem>
           </div>
        </Col>
        <Col span="4" order="2">
            <FormItem label="结束日期">
                <DatePicker type="date" placeholder="选择日期" ></DatePicker>
            </FormItem>
        </Col>
    </Row>
    <Row>
        <Col span="6">
            <FormItem label="购买方式:">
                <Select placeholder="请选择">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
            </FormItem>
         </Col>
    </Row>
    <Row>
        <Col span="6">
            <FormItem label="支付方式:">
                <Select placeholder="支付方式">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
             </FormItem>
         </Col>
         <Col span="6">
            <Button type="ghost" icon="ios-search">搜索</Button>
         </Col>
    </Row>
    </Form>
      <div>
          <Button type="info" shape="circle">全部</Button>
          <Button type="ghost" shape="circle">  已支付</Button>
          <Button type="ghost" shape="circle">已完成</Button>
          <Button type="ghost" shape="circle">未支付</Button>
          <Table :columns="columns1" :data="data1"></Table>
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
                        title: '订单号',
                        key: 'code'
                    },
                    {
                        title: '订单时间',
                        key: 'name'
                    },
                    {
                        title: '商品数量',
                        key: 'pay_method'
                    },
                     {
                        title: '订单状态',
                        key: 'phone_num'
                    },
                    {
                        title: '购买方式',
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

