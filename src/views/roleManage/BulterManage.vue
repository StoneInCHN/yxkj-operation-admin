<template>
<Card>
	<div class="btn-groups">
        <div class="float-right">
            <Button type="success"  @click="add">新增</Button>
            <Button type="error"  @click="deleteItem">删除</Button>
        </div>
    </div>
	<Table border ref="selection" :columns="columns4" :data="data1" ></Table>
	<Page :current="2" :total="50" show-elevator></Page>
	<div class="clearfix"></div>
</Card>
</template>

<script>
     export default {
            data () {
            return {
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '手机号',
                        key: 'num'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '负责的优享空间',
                        key: 'space'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                            let _this = this
                            return h('div',[
                            	h('Button', {
	                                props: {
	                                    type: 'primary',
	                                    size: 'small'
	                                },
	                                style: {
	                                    marginRight: '5px'
	                                },
	                                on: {
	                                    click: () => {
	                                        _this.edit(params.index)
	                                    }
	                                 }
	                            }, '编辑'),
                            	h('Button', {
	                                props: {
	                                    type: 'warning',
	                                    size: 'small'
	                                },
	                                style: {
	                                    marginRight: '5px'
	                                },
	                                on: {
	                                    click: () => {
	                                        _this.resetPwd(params.index)
	                                    }
	                                 }
	                            }, '重置密码')
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        num: '13568952709',
                        name: 'tom',
                        space: 'aaaaaaa'
                    },
                    {
                        num: '优享空间“香年广场T3”补货通知',
                        name: '2017.9.12  15:20:40'
                    }
                ]
            }
        },
        methods: {
        	add () {
        		this.$router.push('add')
        	},
        	edit () {
				this.$router.push('edit')
        	},
            resetPwd (index) {
            	 this.$Modal.confirm({
                    title: '管家密码重置',
                    content: '<p>确定要重置管家AAAA（账户：12345678910）的密码吗？',
                    onOk: () => {
                        this.$Modal.success({
		                    title: '重置密码',
		                    content: '管家AAAA（账户：12345678910）的密码已重置，新密码已经短信发送到管家手机上。'
		                });
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
