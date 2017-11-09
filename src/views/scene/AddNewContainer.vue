
<template>
<Card>
  <Tabs value="name1">
    <TabPane label="香年广场T2" name="name1">
        <Form :label-width="100" label-position="left">
          <FormItem label="货道数量: ">
              <Input style="width:200px;" disabled value="45"></Input>
          </FormItem>
          <FormItem label="货柜类型: ">
              <Select placeholder="请选择" style="width:200px;" >
                  <Option value="beijing">北京市</Option>
                  <Option value="shanghai">上海市</Option>
                  <Option value="shenzhen">深圳市</Option>
              </Select>
          </FormItem>
          <FormItem label="货柜编号: ">
               <Input style="width:200px;"></Input>
          </FormItem>
          <FormItem label="货柜状态: ">
              <Select placeholder="请选择" style="width:200px;">
                  <Option value="beijing">北京市</Option>
                  <Option value="shanghai">上海市</Option>
                  <Option value="shenzhen">深圳市</Option>
              </Select>
           </FormItem>
           <FormItem label="货柜预警比例 ">
               <Input style="width:200px;"></Input>
          </FormItem>
          <FormItem >
              <Button type="primary"> 保存 </Button>
              <Button type="info"> 重置 </Button>
              <Button > 返回 </Button>
          </FormItem>
        </Form> 
    </TabPane>
  </Tabs>
</Card>
</template>

<script>
    export default {
          data () {
            return {
                
            }
        }
    }
</script>

<style scoped>

</style>
