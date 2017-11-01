<template>
	<Card>
		<Tabs value="name1">
	        <TabPane :label="label1" name="name1">
	        	<Table border ref="selection" :columns="columns4" :data="data1" ></Table>
	    		<Page :current="2" :total="50" show-elevator></Page>
	        </TabPane>
	        <TabPane :label="label2" name="name2">
	        	<Table border ref="selection" :columns="columns4" :data="data1" ></Table>
	    		<Page :current="2" :total="50" show-elevator></Page>
	        </TabPane>
	        <TabPane label="其他消息" name="name3">
	        	<Table border ref="selection" :columns="columns4" :data="data1" ></Table>
	    		<Page :current="2" :total="50" show-elevator></Page>
	        </TabPane>
	    </Tabs>
	    <Modal v-model="messageModel" title="消息详情" @on-ok="ok" @on-cancel="cancel">
	    	<div class="messageInfo">
	    		<h4>优享空间“香年广场T3”补货通知</h4>
		        <p>2017.9.12  15:20:40</p>
		        <p>优享空间“香年广场T3"已完成补货，完成时间：2017.9.12  15:20:40</p>
		        <p>负责的管家：XXXXX（12345678910）</p>
		        <p>补货情况：总待补货24件，实际补货22件，仍缺货2件。</p>
		        <Button type="primary" shape="circle">点击查看详情</Button>
	    	</div>
	    </Modal>
	</Card>
</template>
<script>
    export default {
            data () {
            return {
            	label1: (h) => {
                    return h('div', [
                        h('span', '补货通知'),
                        h('Badge', {
                        	style: {
                        		marginLeft: "5px"
                        	},
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                label2: (h) => {
                    return h('div', [
                        h('span', '缺货通知'),
                        h('Badge', {
                        	style: {
                        		marginLeft: "5px"
                        	},
                            props: {
                                count: 1
                            }
                        })
                    ])
                },
                messageModel: false,
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '标题',
                        key: 'num'
                    },
                    {
                        title: '时间',
                        key: 'name'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                            let _this = this
                            return h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        _this.details(params.index)
                                    }
                                 }
                            }, '查看详情')
                        }
                    }
                ],
                data1: [
                    {
                        num: '优享空间“香年广场T3”补货通知',
                        name: '2017.9.12  15:20:40'
                    },
                    {
                        num: '优享空间“香年广场T3”补货通知',
                        name: '2017.9.12  15:20:40'
                    }
                ]
            }
        },
        methods: {
            details (index) {
                this.messageModel = true
            }
        }
    }
</script>

<style scoped>
.messageInfo{
	text-align: center;
}
.messageInfo h4{
	margin-bottom: 10px;
}
.messageInfo p{
	padding: 4px;
}
.messageInfo button{
	margin:10px;
}
</style>