<template>
<div>
    <div>优享空间</div>
    <Form  :label-width="80" :Input-width="100" label-position="right">
        <Row :gutter="4">
            <Col span="6">
                <Form-item label="优享空间：">
                    <Input  placeholder="请输入优享空间地址或编号" ></Input>
                </Form-item>
            </Col>
            <Col span="4">
            <div style="margin-left:-10px;">  
                <Form-item>
                    <Button type="primary" icon="ios-search" >搜索</Button>
                </Form-item>
            </div>
            </Col>
        </Row>
     </Form>
     <div style="">
        <h5 style="float: left">优享空间列表</h5>
        <div style="float: left; margin-left: 80px;"> 
             <Button type="info"  size="small" @click="replenishMessageAction()">补货信息</Button>
             <Button type="success" size="small" @click="qrCodeManageAction()">二维码管理</Button>
        </div>
       <div style="float: right">
            <Button type="success" size="small" @click="addNewSecnceAction()">新增</Button>
            <Button type="error" size="small" @click="modalDelete = true">删除</Button>
                <Modal v-model="modalDelete" width="360">
                    <p slot="header" style="color:#f60;text-align:center">
                        <Icon type="information-circled"></Icon>
                        <span>确认删除选中的优享空间吗？</span>
                    </p>
                    <div style="text-align:center">
                        <p>删除后，将无法恢复</p>
                        <p>是否继续删除？</p>
                    </div>
                    <div slot="footer">
                        <Button type="error" size="large" long :loading="modal_loading" @click="delteContainerAction()">删除</Button>
                    </div>
                </Modal>
            <Button type="primary" size="small" @click="editSecnceAction()">编辑</Button>
        </div>
     </div>
     <div style="margin-top: 40px;">
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
                            }, '货柜管理');
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
                    this.$router.push({
                        path: 'add-new-sence'
                    })
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
                        path: 'container-manage'
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
