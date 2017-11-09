<template>
<Card>
    <Tabs value="name1">
        <TabPane label="香年广场T2" name="name1">
            <div class="btn-groups">
                <div class="float-left">
                    <Button type="info"   @click="allowServicAction">允许服务</Button>
                    <Button type="success"  @click="stopServiceAction">停止服务</Button>
                </div>
                <div class="float-right">
                    <Button type="success"  @click="addNewContainerAction">新增</Button>
                    <Button type="error"  @click="deleteItem">删除</Button>
                </div>
             </div>
            <div class="clearfix"></div>
            <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
            <Page :current="2" :total="50"  show-elevator></Page>
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
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '货柜编号编号',
                        key: 'container_num'
                    },
                    {
                        title: '货柜类型',
                        key: 'container_type'
                    },
                    {
                        title: '货柜状态',
                        key: 'container_status'
                    },
                    {
                        title: '预警值比例',
                        key: 'bn'
                    },
                    {
                        title: '操作',
                        key: 'action',
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
                                            this.editContainerAction()
                                        }
                                    }
                                }, '编辑'),
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
                            ])
                        }
                    }
                ],

                data1: [
                    {
                        container_num: '123',
                        container_type: '王小明',
                        container_status: '北京市朝阳区芍药居',
                    },
                    {
                        container_num: '123',
                        container_type: '王小明',
                        container_status: '北京市朝阳区芍药居',
                    }
                ]
            }
        },
        methods: {
            allowServicAction() {
                },
            stopServiceAction() {
                },
            addNewContainerAction() {
                this.$router.push({
                    path: 'add'
                })
            },
             editContainerAction() {
                    this.$router.push({
                        path: 'edit'
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
                this.$router.push({ path: 'channel'})
            },
            warningSettingAction() {
                this.$router.push({
                        path: 'waring-value-manage'
                    })
            },
            containerTypeAction() {
                this.$router.push({
                        path: 'container-type-manage'
                    })
            },
            deleteItem () {
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>确认删除香年广场T2的A1货柜？</p>',
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
