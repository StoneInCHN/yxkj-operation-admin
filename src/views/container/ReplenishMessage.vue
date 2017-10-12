<template>
  <div>
    <div class="h6">补货信息</div>
    <div class="form-container">
      <Form label-width="100"  label-position="left">
      <Row type="flex">
          <Col span="4" order="1">
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
      <Row>
        <Col span="6">
            <FormItem label="选择优享空间:">
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
              <FormItem label="补货查询：" prop="name">
                  <Input  placeholder="请输入商品名称进行查询"></Input>
                </FormItem>
          </Col>
          <Col span="6">
            <FormItem >
                <Button type="primary" icon="ios-search">搜索</Button>
            </FormItem>
          </Col>
      </Row>
      </Form>
      </div>
        <div>
          <Button type="primary"  size="small" @click="replenishMessageAction()">补货记录</Button>
          <Button type="ghost" size="small">待补货清单</Button>
           <Table border ref="selection" :columns="columns4" :data="data1"></Table>
          <Page :current="2" :total="50" simple style="float:right; margin-top:10px;"></Page>
        </div>
  </div>

</template>

<script>
    export default {
          data () {
            return {
                columns4: [
                    {
                        title: '优享空间编号',
                        key: 'num'
                    },
                    {
                        title: '优享空间地址',
                        key: 'address'
                    },
                    {
                        title: '补货货柜',
                        key: 'contaniner_cabinet'
                    },
                    {
                        title: '补货货架',
                        key: 'containers_rack'
                    },
                    {
                        title: '商品条码',
                        key: 'goods_barcode'
                    },
                    {
                        title: '商品名称',
                        key: 'goods_name'
                    },
                    {
                        title: '商品规格',
                        key: 'goods_spec'
                    },
                    {
                        title: '补货数量',
                        key: 'replenish_count'
                    },
                    {
                        title: '补货时间',
                        key: 'replenish_time'
                    },
                    {
                        title: '补货人',
                        key: 'replenish_member'
                    },
                    {
                        title: '补货照片',
                        key: 'replenish_pic'
                    },
                ],
                data1: [
                    {
                        num: '123',
                        address: '王小明',
                        contaniner_cabinet: '北京市朝阳区芍药居',
                        containers_rack: '北京市朝阳区芍药居',
                        goods_barcode: 18,
                        goods_name: '王小明',
                        goods_spec: '北京市朝阳区芍药居',
                        replenish_count: '北京市朝阳区芍药居',
                        replenish_time: 18,
                        replenish_member: '北京市朝阳区芍药居',
                        replenish_pic: 18,

                    },
                    {
                        num: '123',
                        address: '王小明',
                        contaniner_cabinet: '北京市朝阳区芍药居',
                        containers_rack: '北京市朝阳区芍药居',
                        goods_barcode: 18,
                        goods_name: '王小明',
                        goods_spec: '北京市朝阳区芍药居',
                        replenish_count: '北京市朝阳区芍药居',
                        replenish_time: 18,
                        replenish_member: '北京市朝阳区芍药居',
                        replenish_pic: 18,

                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>

