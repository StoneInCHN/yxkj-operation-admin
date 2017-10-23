
<template>
<div>
    <Row>
        <Col span="3">
            <div> <div class="h6">货柜管理</div></div>
        </Col>
        <Col span="4">
            <Button  type="warning" size="small"  @click="warningSettingAction()">预警值管理</Button>
            <Button  type="primary" size="small"  @click="containerTypeAction()">货柜类型</Button>
        </Col>
    </Row>
     <div style="margin-top: 20px;">
        <div>   
            <div style="float:left;">优享空间:</div>
                <div style="float:left; margin-left:10px;" >香年广场T2</div>
                <Button style="float:left; margin-left:30px;" type="info"  size="small" @click="allowServicAction()">允许服务</Button>
                <Button style="float:left; margin-left:10px;" type="success" size="small" @click="stopServiceAction()">停止服务</Button>
            </div>
        <div style="float: right">
                <Button type="success" size="small" @click="addNewContainerAction()">新增</Button>
                <Button type="error" size="small" @click="modalDelete = true">删除</Button>
                    <Modal v-model="modalDelete" width="360">
                        <p slot="header" style="color:#f60;text-align:center">
                            <Icon type="information-circled"></Icon>
                            <span>确认删除选中的货柜吗？</span>
                        </p>
                        <div style="text-align:center">
                            <p>删除后，将无法恢复</p>
                            <p>是否继续删除？</p>
                        </div>
                        <div slot="footer">
                            <Button type="error" size="large" long :loading="modal_loading" @click="delteContainerAction()">删除</Button>
                        </div>
                    </Modal>
                <Button type="primary" size="small" @click="editContainerAction()">编辑</Button>
            </div>
            <div>
        </div>
     </div>
     <div style="clear: both; margin-top: 60px;">
        <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
         <Page :current="2" :total="50" simple style="float:right; margin-top:10px;"></Page>
    </div>
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
                        title: '操作',
                        key: 'action',
                        render: (h, params) => {
                          return  h('Button', {
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
                            }, '货道管理');
                        }
                    },
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
                        path: 'add-container'
                    })
            },
             editContainerAction() {
                    this.$router.push({
                        path: 'edit-container'
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
                console.log(index)
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
            }
        }

    }
</script>

<style scoped>
.test {
    margin-top: 20px;
}
</style>
