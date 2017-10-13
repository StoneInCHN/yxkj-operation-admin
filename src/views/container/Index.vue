<template>
<div>
    <div>优享空间</div>
    <Form :model="formItem" :label-width="80" :Input-width="1030" label-position="right">
        <Row :gutter="4">
            <Col span="4">
                <Form-item label="优享空间：">
                    <Input  placeholder="请输入优享空间地址或编号" ></Input>
                </Form-item>
            </Col>
            <Col span="4">
            <div style="margin-left:-70px;">  
                <Form-item>
                    <Button type="primary" icon="ios-search" >搜索</Button>
                </Form-item>
                </div>
            
            </Col>
        </Row>
     </Form>
     <div>
        <h5 style="float: left">优享空间列表</h5>
        <div style="float: left; margin-left: 80px;"> 
             <Button type="info"  size="small" @click="replenishMessageAction()">补货信息</Button>
             <Button type="success" size="small" @click="qrCodeManageAction()">二维码管理</Button>
        </div>
       <div style="float: right">
            <Button type="warning" size="small" @click="addNewContainerAction()">新增</Button>
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
            <Button type="primary" size="small">编辑</Button>
        </div>
     </div>
     <div style="clear:both; margin-top: 40px;">
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
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
                        key: 'operation'
                    },
                ],
                data1: [
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18,
                        operation: '北京市朝阳区芍药居'

                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        is_micro_container: 18,
                        operation: '北京市朝阳区芍药居'

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
            addNewContainerAction() {
                    this.$router.push({
                        path: 'add-new-container'
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
            }
        }

    }
</script>

<style scoped>
.test {
    margin-top: 20px;
}
</style>
