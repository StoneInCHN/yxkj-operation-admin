<template>
<Card>
    <Tabs value="name1">
        <TabPane label="香年广场T2" name="name1">
        <p>货柜编号：A</p>
        <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
        <Page :current="2" :total="50" show-elevator></Page>
        </TabPane>
    </Tabs>
</Card>
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
                        title: '货道编号',
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
                        title: '商品价格',
                        key: 'containers_count'
                    },
                    {
                        title: '货道容量',
                        key: 'is_micro_container'
                    },
                    {
                        title: '剩余货量',
                        key: 'is_micro_container'
                    },
                    {
                        title: '预警数量',
                        key: 'is_micro_container'
                    },
                    {
                        title: '商品状态',
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
                                }, '货道管理')
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
                        path: 'replenish-message'
                    })
                },
            qrCodeManageAction() {
                    this.$router.push({
                        path: 'QRCode-manage'
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
