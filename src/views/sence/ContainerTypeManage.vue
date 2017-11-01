<template>
<Card>
    <div class="btn-groups">
        <div class="float-right">
            <Button type="success"  @click="add">新增</Button>
            <Button type="error"  @click="deleteItem">删除</Button>
        </div>
    </div>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <Page :current="2" :total="50" show-elevator></Page>
    <Modal
        v-model="modal1"
        title="添加货柜类型"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="货柜名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入货柜名称"></Input>
        </FormItem>
        <FormItem label="物理货道数" prop="mail">
            <Input v-model="formValidate.mail" ></Input>
        </FormItem>
        <FormItem label="货道容量" prop="mail">
            <Input v-model="formValidate.mail" ></Input>
        </FormItem>
        <FormItem label="温度" prop="city">
            <Select v-model="formValidate.city" placeholder="请选择所在地">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </FormItem>
        <FormItem label="备注" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
    </Form>
    </Modal>
</Card>
</template>
<script>
	 export default {
          data () {
            return {
            	modal1: false,
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '货柜名称',
                        key: 'num'
                    },
                    {
                        title: '物理货道数',
                        key: 'address'
                    },
                    {
                        title: '货道容量',
                        key: 'contaniner_cabinet_num'
                    },
                    {
                        title: '温度',
                        key: 'containers_row',
                    },
                    {
                        title: '备注',
                        key: 'containers_row',
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
                                            this.add()
                                        }
                                    }
                                }, '编辑')
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        num: '123',
                        address: '王小明',
                        contaniner_cabinet_num: '北京市朝阳区芍药居',
                        containers_rack: '北京市朝阳区芍药居',
                        containers_row: 18

                    },
                    {
                        num: '123',
                        address: '王小明',
                        contaniner_cabinet_num: '北京市朝阳区芍药居',
                        containers_rack: '北京市朝阳区芍药居',
                        containers_row: 18


                    }
                ],
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
        	add () {
        		this.modal1 = true
        	},
            deleteItem() {
               this.$Modal.confirm({
                    title: '系统提示',
                    content: '<p>确认删除选中的货柜吗？</p>',
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
<style>
	
</style>