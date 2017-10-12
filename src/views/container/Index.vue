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
             <Button type="success" size="small">二维码管理</Button>
        </div>
       <div style="float: right">
            <Button type="warning" size="small">新增</Button>
            <Button type="error" size="small">删除</Button>
            <Button type="primary" size="small">编辑</Button>
        </div>
     </div>
     <div style="clear:both; margin-top: 40px;">
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <Button @click="handleSelectAll(true)">设置全选</Button>
        <Button @click="handleSelectAll(false)">取消全选</Button>
         <Page :current="2" :total="50" simple style="float:right; margin-top:10px;"></Page>
    </div>
</div>
</template>

<script>
    export default {
            data () {
            return {
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
                }
        }

    }
</script>

<style scoped>
.test {
    margin-top: 20px;
}
</style>
