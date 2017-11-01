<template>
	<Card>
        <Form :label-width="100" label-position="left">
	        <FormItem label="场景编号:">
	            <Upload action="//jsonplaceholder.typicode.com/posts/">
			        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
			    </Upload>
	        </FormItem>
	         <FormItem label="上传的文件:">
	            <Row>
	                <Col span="8">
	                    
	                </Col>
	            </Row>
	        </FormItem>
	        <FormItem label="播放的位置:">
	             <Row>
	                <Col span="8">
	                     <Select placeholder="请选择">
	                        <Option value="1">视频（上）</Option>
	                        <Option value="2">视频（下）</Option>
	                        <Option value="3">图片1</Option>
	                        <Option value="4">图片2</Option>
	                        <Option value="5">图片3</Option>
	                    </Select>
	                </Col>
	            </Row>
	        </FormItem>
	        <FormItem label="优享空间" >
	             <Row>
	                <Col span="8">
	                    
	                </Col>
	            </Row>
	        </FormItem>
	        <FormItem label="详细地址：">
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
                }],
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                }
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
<style>
	
</style>