<template>
<Card>
    <div class="btn-groups">
        <div class="float-right">
            <Button type="success"  @click="add">新增</Button>
            <Button type="error"  @click="deleteItem">删除</Button>
        </div>
     </div>
    <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
    <Page :current="2" :total="50" show-elevator></Page>
    <div class="clearfix"></div>
    <Modal
        v-model="model"
        title="广告信息"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form ref="formItem" :model="formItem" label-position="right" :label-width="80">
            <FormItem prop="name" label="上传附件:">
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                </Upload>
            </FormItem>
            <FormItem prop="file" label="已上传文件:">
                <span></span>
            </FormItem>
            <FormItem label="文本域:">
                <Input v-model="formItem.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </FormItem>
        </Form>
    </Modal>
</Card>
</template>

<script>
    export default {
            data () {
            return {
                formItem: {
                    name: '',
                    file: '',
                    desc: ''
                },
                model: false,
                modalDelete: false,
                modal_loading: false,
                columns4: [
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
                        title: '文件名',
                        key: 'num'
                    },
                    {
                        title: '文件类型',
                        key: 'name'
                    },
                    {
                        title: '文件备注',
                        key: 'opne_up_time'
                    },
                    {
                        title: '上传时间',
                        key: 'date'
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
                        date: "2017-08-06"
                    },
                    {
                        num: '123',
                        name: '王小明',
                        opne_up_time: '北京市朝阳区芍药居',
                        containers_count: '北京市朝阳区芍药居',
                        date: "2017-08-06"
                    }
                ]
            }
        },
        methods: {
            edit () {
                this.model = true
            },
            add () {
                this.model = true
            },
            deleteItem () {
                this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>确认删除选中的广告吗？</p>',
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
