<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>新增场景</span>
        </p>
        <Form :label-width="100" label-position="left">
        <FormItem label="场景编号:">
            <Input  placeholder="请输入" style="width:200px;" value="223" disabled></Input>
        </FormItem>
         <FormItem label="开业日期：">
            <Row>
                <Col span="8">
                    <DatePicker type="date" placeholder="选择日期" ></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="所在地区：">
             <Row>
                <Col span="8">
                    <Cascader :data="addressDatas" v-model="value1"></Cascader>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="地图定位：" >
             <Row>
                <Col span="8">
                    <Button type="text" size="small" style="color: #2d8cf0;"> 选择定位 </Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="详细地址：">
            <Row>
                <Col span="8">
                    <Input></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="优享空间名称: " placeholder="优享空间所在写在楼名称，如：香年广场T3">
            <Row>
                <Col span="8">
                    <Input></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="中控IMEI: " placeholder="请输入中控IMEI">
            <Row>
                <Col span="8">
                    <Input></Input>
                </Col>
            </Row>
        </FormItem>
         <FormItem label="货柜状态: ">
             <Row>
                <Col span="8">
                    <Select placeholder="请选择">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </Col>
            </Row>
         </FormItem>
        <FormItem label="货柜音量: ">
            <Row :gutter=5>
            <Col span="1">
                <InputNumber ></InputNumber>
            </Col>
            </Row>
         </FormItem>
         <FormItem label="重启间隔天数:" >
            <Row>
                <Col span="8">
                    <Select placeholder="请选择">
                        <Option value="beijing">1天</Option>
                        <Option value="shanghai">2天</Option>
                        <Option value="shenzhen">3天</Option>
                        <Option value="shenzhen">4天</Option>
                    </Select>
                </Col>
            </Row>
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
             <Button type="info"> 重置 </Button>
        </FormItem>
    </Form>
    </Card>
</div>
</template>

<script>
    export default {
          data () {
            return {
                addressDatas: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

<style scoped>

</style>
