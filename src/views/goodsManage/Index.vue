<template>
<div>
	<Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>查询条件</span>
        </p>
        <Form  :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <Form-item label="商品名称">
                        <Input  placeholder="请输入商品名称" ></Input>
                    </Form-item>
                </Col>
                <Col span="6">
                    <Form-item label="商品条码">
                        <Input  placeholder="请输入商品条码" ></Input>
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
                <Button type="info"   @click="goodsType">商品分类管理</Button>
                <Button type="success"  @click="excelImport">Excel导入</Button>
            </div>
            <div class="float-right">
                <Button type="success"  @click="add">新增</Button>
                <Button type="error"  @click="deleteItem">删除</Button>
            </div>
         </div>
         <div class="clearfix"></div>
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
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品条码',
                        key: 'num'
                    },
                    {
                        title: '商品名称',
                        key: 'name'
                    },
                    {
                        title: '净含量',
                        key: 'opne_up_time'
                    },
                    {
                        title: '商品分类',
                        key: 'containers_count'
                    },
                    {
                        title: '成本价',
                        key: 'is_micro_container'
                    },
                    {
                        title: '默认售价',
                        key: 'is_micro_container'
                    },
                    {
                        title: '大图',
                        key: 'is_micro_container'
                    },
                    {
                        title: '小图',
                        key: 'is_micro_container'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 100,
                        render: (h, params) => {
                          return  h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit()
                                        }
                                    }
                                }, '编辑')
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
                    }
                ]
            }
        },
        methods: {
            add () {
                this.$router.push({
                    path: 'add'
                })
            },
            excelImport () {
            	alert("Excel导入")
            },
            edit () {
                this.$router.push({
                    path: 'edit'
                })
            },
            goodsType () {
				this.$router.push({
                    path: 'goodsType'
                })
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

<style >

</style>
