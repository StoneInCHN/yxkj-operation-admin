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
                    <Form-item label="优享空间编号">
                        <Input  placeholder="请输入优享空间编号" ></Input>
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
    <div class="btn-groups">
        <div class="float-left">
            <Button type="info"   @click="replenishMessageAction">补货信息</Button>
            <Button type="success"  @click="qrCodeManageAction">二维码管理</Button>
        </div>
        <div class="float-right">
            <Button type="success"  @click="addNewSecnceAction">新增</Button>
            <Button type="error"  @click="deleteItem">删除</Button>
        </div>
     </div>
     <div class="clearfix"></div>
    <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
    <Page :current="2" :total="50" show-elevator></Page>
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
                        title: '编号',
                        key: 'num'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '开业时间',
                        key: 'opne_up_time'
                    },
                    {
                        title: '货柜数',
                        key: 'containers_count'
                    },
                    {
                        title: '是否含微仓',
                        key: 'is_micro_container'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
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
                                            alert('bianji')
                                            this.editSecnceAction()
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.deleteItem()
                                        }
                                    }
                                }, '删除'),
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
                                            this.containerManageAction(params.index)
                                        }
                                    }
                                }, '货柜管理')
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
            replenishMessageAction() {
                    this.$router.push({
                        path: 'replenish'
                    })
                },
            qrCodeManageAction() {
                    this.$router.push({
                        path: 'qrCode'
                    })
                },
            addNewSecnceAction() {
                this.$router.push({path: 'add'})
            },
             editSecnceAction() {
                    this.$router.push({
                        path: 'edit-sence'
                    })
            },
            delteContainerAction() {
                console.log('delteContainerAction')
                this.modal_loading = true
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modalDelete = false
                    this.$Message.success('删除成功');
                }, 2000);
            },
            containerManageAction(index) {
                 this.$router.push({
                        path: 'containers'
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

<style scoped>
.test {
    margin-top: 20px;
}
.float-left{
    float: left;
}
.float-right{
    float: right;
}
.btn-groups {
    margin: 10px;
    overflow: hidden;
}
</style>
