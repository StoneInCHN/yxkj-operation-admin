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
                </Col>                <Col span="6">
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
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '更新日期',
                        key: 'num'
                    },
                    {
                        title: '更新时间',
                        key: 'name'
                    },
                    {
                        title: '更新版本',
                        key: 'opne_up_time'
                    },
                    {
                        title: '更新的优享空间',
                        key: 'containers_count'
                    },
                    {
                        title: '更新结果',
                        key: 'is_micro_container'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
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
                                            this.update(params.index)
                                        }
                                    }
                                }, '再次更新')
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
            update () {
                alert("update")
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
