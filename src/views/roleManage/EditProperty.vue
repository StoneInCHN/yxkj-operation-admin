<template>
<Card>
    <Form :label-width="100" label-position="right">
        <FormItem label="姓名">
             <Row>
                <Col span="8">
                     <Input ></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="账号" >
             <Row>
                <Col span="8">
                   <Input placeholder="请填写手机号"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="负责的优享空间">
            <Row>
                <Col span="24">
                     <Transfer
                        :data="data3"
                        :target-keys="targetKeys3"
                        :list-style="listStyle"
                        :render-format="render3"
                        :operations="['向左移动','向右移动']"
                        filterable
                        @on-change="handleChange3">
                        <div :style="{float: 'right', margin: '5px'}">
                            <Button type="ghost" size="small" @click="reloadMockData">刷新</Button>
                        </div>
                    </Transfer>
                </Col>
            </Row>
        </FormItem>
         <FormItem >
             <Button type="primary"> 保存 </Button>
             <Button type="info"> 重置 </Button>
        </FormItem>
    </Form>
</Card>
</template>

<script>
    export default {
          data () {
            return {
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                },
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
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: '内容' + i,
                        description: '内容' + i + '的描述信息',
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            }
        }
    }
</script>

<style scoped>

</style>
