<template>
<Card>
    <div class="btn-groups">
        <div class="float-right">
            <Button type="primary"  icon="android-add" @click="add">新增</Button>
            <Button type="success"  icon="trash-a" @click="deleteBatch">删除</Button>
            <Button type="info" icon="android-refresh" @click="refresh">刷新</Button>
        </div>
    </div>
    <div style="position:relative">
              <Table border :columns="columns" :data="page_list" ref="table" @on-selection-change="onSelectionChange"></Table>
              <div class="list-loadding" v-if="list_loadding">
                    <Spin size="large"></Spin>
                    <h6>正在获取数据...</h6>
              </div>
    </div>
    <div class="clearfix"></div>
    <Modal v-model="containerTypeModal" title="添加货柜类型" @on-ok="save('dataInfo')" :mask-closable="false">
        <Form  :label-width="100" label-position="right" :rules="ruleValidate" :model="dataInfo" ref="dataInfo" style="width:90%">
        <FormItem label="货柜名称" prop="cateName">
            <Input v-model="dataInfo.cateName" placeholder="请输入货柜名称"></Input>
        </FormItem>
        <FormItem label="物理货道数" prop="totalChannel">
            <Input v-model="dataInfo.totalChannel" ></Input>
        </FormItem>
        <FormItem label="货道容量" prop="capacity">
            <Input v-model="dataInfo.capacity" ></Input>
        </FormItem>
        <FormItem label="类型" prop="cntrType">
            <Select v-model="dataInfo.cntrType" placeholder="请选择类型">
                <Option value="SPRING_BOX">弹簧柜</Option>
                <Option value="GRID_BOX">格子柜</Option>
            </Select>
        </FormItem>
        <FormItem label="温度" prop="cTemp">
            <Select v-model="dataInfo.cTemp" placeholder="请选择温度">
                <Option value="COLD">冷冻</Option>
                <Option value="NORMAL">常温</Option>
            </Select>
        </FormItem>
        <FormItem label="备注" prop="remark">
            <Input v-model="dataInfo.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </FormItem>
    </Form>
    </Modal>
</Card>
</template>
<script>
import { list, save, deleteType } from 'api/containerType';
import { isPositiveNum } from 'utils/validate';
	 export default {
          data () {
            const validNum = (rule, value, callback) => {
              if (! isPositiveNum(value)) {
                callback(new Error('请输入正整数'));
              } else {
                callback();
              }
            };
            return {                
            	containerTypeModal: false,
                page_list:[],
                list_loadding:false,
                dataInfo:{},
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '货柜名称',
                        key: 'cateName'
                    },
                    {
                        title: '物理货道数',
                        key: 'totalChannel'
                    },
                    {
                        title: '货道容量',
                        key: 'capacity'
                    },
                    {
                        title: '类型',
                        key: 'cntrType',
                        render: (h, params) => {
                                const status=params.row.cntrType;
                                if(status==='SPRING_BOX'){                                  
                                    return h('div', [h('Tag', {props: {type: 'dot', color: "yellow"}}, "弹簧柜")]);
                                }else if(status==='GRID_BOX'){
                                    return h('div', [h('Tag', {props: {type: 'dot', color: "blue"}}, "格子柜")]);
                                }
                        }
                    }, 
                    {
                        title: '温度',
                        key: 'cTemp',
                        render: (h, params) => {
                                const status=params.row.cTemp;
                                if(status==='COLD'){                                  
                                    return h('div', [h('Tag', {props: {type: 'border', color: "blue"}}, "冷冻")]);
                                }else if(status==='NORMAL'){
                                    return h('div', [h('Tag', {props: {type: 'border', color: "green"}}, "常温")]);
                                }
                        }
                    },                                      
                    {
                        title: '备注',
                        key: 'remark',
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
                                            this.edit(params.row)

                                        }
                                    }
                                }, '编辑')
                            ])
                        }
                    }
                ],
                ruleValidate: {
                    cateName: [
                        { required: true, message: '货柜名称不能为空', trigger: 'blur' }
                    ],
                    totalChannel: [
                        { required: true, trigger: 'blur', validator: validNum }
                    ],
                    capacity: [
                        { required: true, trigger: 'blur', validator: validNum }
                    ],
                    cTemp: [
                        { required: true, message: '温度不能为空', trigger: 'change' }
                    ],
                    cntrType: [
                        { required: true, message: '类型不能为空', trigger: 'change' }
                    ],
                },
            }
        },
        methods: {
            refresh () {
              this.changePage();
            },
            changePage(){
              const vue = this;
              this.list_loadding=true;
              this.getPageList()
            },
            getPageList() {                
              list().then(response => {
                if (response.code === '0000') {
                  this.page_list= response.msg;
                  this.list_loadding=false;
                }                
              }).catch(error => {
                console.log(error)
              });
            }, 
            onSelectionChange(selection, row) {
              this.selectedRows= selection;
            },
            deleteBatch () {
              if (this.selectedRows.length == 0) {
                  this.$Message.warning('请选择要删除的项!');
              }else{
                this.$Modal.confirm({
                  title:'提示',
                  content:'请确认要删除这 <b style="color:#f60">'+this.selectedRows.length+'</b> 项?',
                  onOk:(()=>{
                      var ids = [];
                      for (var i = 0; i < this.selectedRows.length; i++) {
                        ids.push(this.selectedRows[i].id);
                      }                      
                      deleteType(ids).then(response => {
                        if (response.code === '0000') {
                            this.changePage();
                            this.$Message.info(response.desc);
                        }else{
                            this.$Message.info(response.desc);
                        }              
                      }).catch(error => {
                          this.$Message.info('请求异常');
                      });
                  })
                });
              }
            },
            add () {
                this.containerTypeModal = true;
                this.dataInfo.id = null;
                this.dataInfo.cateName = null;
            },
            edit (selection) {
                this.containerTypeModal = true;
                this.dataInfo.id = selection.id;
                this.dataInfo.cateName = selection.cateName;
                this.dataInfo.totalChannel = selection.totalChannel;
                this.dataInfo.capacity = selection.capacity;
                this.dataInfo.cTemp = selection.cTemp;
                this.dataInfo.cntrType = selection.cntrType;
                this.dataInfo.remark = selection.remark;  
            },
            save (name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                            save(this.dataInfo).then(response => {
                              if (response.code === '0000') {
                                this.$Message.success('提交成功!');
                                this.refresh ();
                              }else{
                                this.$Message.error(response.desc);
                              }             
                            }).catch(error => {
                              console.log(error)
                            });                                            
                    }
                })
            },            
        },
        mounted(){
                this.changePage(1);
        },
    }
</script>
<style>
	
</style>