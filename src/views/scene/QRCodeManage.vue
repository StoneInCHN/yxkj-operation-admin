<template>
  <div>
    <Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>查询条件</span>
        </p>
        <Form label-width="100"  label-position="right">
          <Row>
            <Col span="6">
                <FormItem label="优享空间:">
                    <Select placeholder="请选择">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="货道搜索：" prop="name">
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
    </Card>
    <br/>
    <Card>
        <div class="btn-groups">
            <div class="float-right">
              <Button type="info"   @click="exportQRCodeAction">导出二维码</Button>
            </div>
        </div>
        <div class="clearfix"></div>
        <Tabs value="name1">
            <TabPane label="补货记录" name="name1">
                <Table border ref="selection" :columns="columns4" :data="data1"  style="clear:right;"></Table>
                <Page :current="2" :total="50" show-elevator></Page>
            </TabPane>
            <TabPane label="待补货清单" name="name2">
              <Table border ref="selection" :columns="columns4" :data="data1"  style="clear:right;"></Table>
              <Page :current="2" :total="50" show-elevator></Page>
            </TabPane>
        </Tabs>
    </Card>
  </div>
</template>

<script>
    export default {
          data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '优享空间编号',
                        key: 'num'
                    },
                    {
                        title: '优享空间地址',
                        key: 'address'
                    },
               

                    {
                        title: '货柜号',
                        key: 'contaniner_cabinet_num'
                    },
                    {
                        title: '货道号',
                        key: 'containers_row',
                        
                    }
                ],
                data1: [
                    {
                        num: '123',
                        address: '王小明',
                        contaniner_cabinet_num: '北京市朝阳区芍药居',
                        containers_rack: '北京市朝阳区芍药居',
                        containers_row: 18

                    },
                    {
                        num: '123',
                        address: '王小明',
                        contaniner_cabinet_num: '北京市朝阳区芍药居',
                        containers_rack: '北京市朝阳区芍药居',
                        containers_row: 18


                    }
                ]
            }
        },
        mounted() {
            //this.$refs.selection.selectAll(true)
        },
        methods: {
            exportQRCodeAction() {
                console.log('exportQRCodeAction')
            }
        }
    }
</script>

<style scoped>

</style>

