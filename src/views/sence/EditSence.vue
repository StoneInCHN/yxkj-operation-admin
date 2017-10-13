<template>
<div> 
    <div class="h6">编辑场景</div>
      <Form :label-width="100" label-position="left">
        <FormItem label="场景编号:">
            <Input  placeholder="请输入" style="width:200px;" value="223" disabled></Input>
        </FormItem>
         <FormItem label="开业日期：">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="选择日期" ></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="所在地区：">
            <Select placeholder="请选择" style="width:200px;" >
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
             <Select placeholder="请选择" style="width:200px;" >
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
             <Select placeholder="请选择" style="width:200px;" >
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </FormItem>
        <FormItem label="地图定位：" >
             <Button type="text" size="small" style="color: #2d8cf0;"> 选择定位 </Button>
        </FormItem>
        <FormItem label="详细地址：">
            <Row>
                <Col span="11">
                    <Input></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="优享空间名称: " placeholder="优享空间所在写在楼名称，如：香年广场T3">
            <Row>
                <Col span="11">
                    <Input></Input>
                </Col>
            </Row>
        </FormItem>
         <FormItem label="货柜状态: ">
            <Select placeholder="请选择" style="width:200px;">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
         </FormItem>
        <FormItem label="货柜音量: ">
            <Row :gutter=5>
            <Col span="1">
                <Button>
                    <Icon type="minus-round"></Icon>
                </Button>
            </Col>
            <Col span="1">
                <Input style="margin-left: -20px; width: 40px;"></Input>
            </Col>
            <Col span="1">
                    <Button style="margin-left: -40px;" >
                    <Icon type="plus-round"></Icon>
                    </Button>
            </Col>
            </Row>
         </FormItem>
         <FormItem label="重启间隔天数:" >
            <Select placeholder="请选择"  style="width:200px;">
                <Option value="beijing">1天</Option>
                <Option value="shanghai">2天</Option>
                <Option value="shenzhen">3天</Option>
                <Option value="shenzhen">4天</Option>
            </Select>
        </FormItem>
        <FormItem label="默认重启时间：">
            <TimePicker format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></TimePicker>
        </FormItem>
        <FormItem label="是否含微仓：">
            <Select placeholder="是"  style="width:200px;">
                <Option value="beijing">是</Option>
                <Option value="shanghai">否</Option>
            </Select>
        </FormItem>
         <FormItem >
             <Button type="primary"> 保存 </Button>
        </FormItem>
    </Form>
  </div>

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
