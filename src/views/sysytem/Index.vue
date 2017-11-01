<template>
<div>
	<Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>查询条件</span>
        </p>
        <Form  :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <Form-item label="优享空间名称">
                        <Input  placeholder="请输入优享空间名称" ></Input>
                    </Form-item>
                </Col>
                <Col span="6">
                <div style="margin-left:-10px;">  
                    <Form-item>
                        <Button type="primary" icon="ios-search" >搜索</Button>
                    </Form-item>
                </div>
                </Col>
            </Row>
         </Form>
    </Card>
    <br/>
    <Card>
        <div class="btn-groups">
            <div class="float-left">
                <Button type="info"   @click="updateRecord">更新记录</Button>
            </div>
            <div class="float-right">
                <Button type="success"  @click="add">新增</Button>
            </div>
         </div>
        <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
        <Page :current="2" :total="50" show-elevator></Page>
        <div class="clearfix"></div>
    </Card>
</div>
</template>
<script>
	 export default {
            data () {
            return {
                modalDelete: false,
                modal_loading: false,
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
                        title: '版本号',
                        key: 'num'
                    },
                    {
                        title: '更新时间',
                        key: 'name'
                    },
                    {
                        title: '版本介绍',
                        key: 'opne_up_time'
                    },
                    {
                        title: '覆盖的优享空间',
                        key: 'containers_count'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                        	let _this = this
                          return  h('Dropdown',{
                          		style: {
                          			marginLeft: "20px"
                          		}
                         	 }, [
                                h('a', {
                                	attr: {
                                		href: 'javascript:void(0)'
                                	}
                                }, [
                                	h("span",{},"版本管理"),
	                                h("Icon",{
	                                	props: {
	                                		type: "arrow-down-b"
	                                	},
	                                	style: {
	                                		marginLeft: "10px"
	                                	}
	                                })
	                            ]),
                                h('DropdownMenu', {
                                	slot: "list"
                                }, [
                                	h("DropdownItem",{
                                		nativeOn: {
                                			click () {
                                				_this.$router.push("addSence")
                                			}
                                		}
                                	},"新增优享空间"),
                                	h("DropdownItem","下载附件")
	                            ]),

                            ]);
                        }
                    },
                ],
                data1: [
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18
                    }
                ]
            }
        },
        methods: {
            operation() {
            	alert("kk")
            },
            add () {
            	this.$router.push("add")
            },
            updateRecord () {
            	this.$router.push("record")
            },
            deleteItem () {
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>删除优享空间会同时删除其中的货柜，确认要删除选中的优享空间吗？</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            }
        }

    }
</script>
<style>
	
</style>