<template>
<Card> 
      <Form :label-width="100" label-position="left">
        <FormItem label="优享空间：">
            <label for="">香年广场T2</label>
        </FormItem>
        <FormItem label="货柜类型: ">
            <Select placeholder="请选择" style="width:200px;" >
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </FormItem>
        <FormItem label="中控IMEI: ">
             <Input style="width:200px;"></Input>
        </FormItem>
        <FormItem label="货柜状态: ">
            <Select placeholder="请选择" style="width:200px;">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
         </FormItem>
        <FormItem label="货柜编号: ">
             <Input style="width:200px;"></Input>
        </FormItem>
        <FormItem label="货道数量: ">
             <Input style="width:200px;"></Input>
         </FormItem>
        <FormItem >
            <Button type="primary"> 保存 </Button>
        </FormItem>
    </Form>
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
