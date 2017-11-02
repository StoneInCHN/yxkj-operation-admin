<template>
<Card>
    <Form :label-width="100" label-position="right">
        <FormItem label="商品条码">
             <Row>
                <Col span="8">
                    <Input placeholder="请填写商品条码"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="商品名称" >
             <Row>
                <Col span="8">
                   <Input placeholder="请填写商品名称"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="净含量">
            <Row>
                <Col span="8">
                    <Input placeholder="请填写净含量"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="商品分类">
            <Row>
                <Col span="8">
                    <Select v-model="typeName">
                        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="成本价">
            <Row>
                <Col span="8">
                    <Input placeholder="请填写成本价"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="默认售价">
            <Row>
                <Col span="8">
                    <Input placeholder="请填写默认售价"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="产品图片">
            <Row span="8">
                <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                        <span>大图&nbsp;&nbsp;</span>
                        <Button type="ghost" icon="ios-cloud-upload-outline">选择文件</Button>
                </Upload>
            </Row>
            <Row span="8">
                <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                        <span>小图&nbsp;&nbsp;</span>
                        <Button type="ghost" icon="ios-cloud-upload-outline">选择文件</Button>
                </Upload>
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
                typeList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                typeName: ''
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
