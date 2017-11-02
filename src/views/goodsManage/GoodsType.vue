<template>
    <Card>
        <div class="btn-groups">
            <div class="float-right">
                <Button type="success"  @click="add">新增</Button>
                <Button type="error"  @click="deleteItem">删除</Button>
            </div>
         </div>
        <Table border ref="selection" :columns="columns" :data="datas" ></Table>
        <Page :current="2" :total="50" show-elevator></Page>
        <div class="clearfix"></div>
        <Modal v-model="goodsTypeModal" title="商品分类管理" @on-ok="save" @on-cancel="cancel">
            <Form  :label-width="60" label-position="right">
            <Row >
                <Col span="24">
                    <Form-item label="分类名称">
                        <Input  v-model="typeName" placeholder="请输入商品分类名称" ></Input>
                    </Form-item>
                </Col>
                </Col>
            </Row>
         </Form>
        </Modal>
    </Card>
</template>

<script>
    export default {
            data () {
            return {
                goodsTypeModal: false,
                typeName:'',
                newFlag: false,
                editIndex:'',
                columns: [
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
                        title: '商品分类',
                        key: 'name'
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
                                            this.edit(params)
                                        }
                                    }
                                }, '编辑')
                            ]);
                        }
                    },
                ],
                datas: [
                    {
                        id: '1',
                        name: '王小明',
                    },
                    {
                        id: '2',
                        name: '王大明',
                    }
                ]
            }
        },
        methods: {
            add () {
                this.goodsTypeModal = true
                this.newFlag = true
            },
            edit (params) {
                this.goodsTypeModal = true
                this.typeName = params.row.name
                this.editIndex = params.index
            },
            cancel () {
                this.newFlag = false
                this.typeName= ''
            },
            save () {
                if (this.newFlag) {
                    let typeObj = {
                        id: '11',
                        name : this.typeName
                    }
                    this.datas.push(typeObj)
                } else {
                    let typeObj = this.datas[this.editIndex]
                    typeObj.name = this.typeName
                    this.datas[this.editIndex] = typeObj
                }
                this.editIndex = ''
                this.newFlag = false
                this.typeName = ''
            },
            deleteItem () {
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>确认删除选中的商品分类吗？</p>',
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
