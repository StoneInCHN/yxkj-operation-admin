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
        <Page :total="this.pageTotal" show-total show-elevator @on-change="changePage" class="page-style"></Page>
        <div class="clearfix"></div>
        <Modal v-model="goodsTypeModal" title="商品分类管理" @on-ok="save('dataInfo')">
            <Form  :label-width="100" label-position="right" :rules="ruleValidate" :model="dataInfo" ref="dataInfo">
            <Row >
                <Col span="24">
                    <FormItem label="分类名称" prop="cateName">
                        <Input v-model="dataInfo.cateName" placeholder="请输入商品分类名称" ></Input>
                    </FormItem>
                </Col>
                </Col>
            </Row>
         </Form>
        </Modal>
    </Card>
</template>

<script>
import { goodsCatePage, deleteGoodsCate, goodsCate } from 'api/goods';
    export default {
            data () {
            return {
                pageTotal:0,
                pageNumber:1,
                pageSize:10,
                page_list:[],
                list_loadding:false,
                goodsTypeModal: false,
                dataInfo:{},
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
                        key: 'cateName'
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
                                            this.edit(params.row)
                                        }
                                    }
                                }, '编辑')
                            ]);
                        }
                    },
                ],
                ruleValidate: {
                    cateName: [
                        { required: true, message: '商品分类名称不能为空', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            refresh () {
              this.changePage(this.pageNumber);
            },
            changePage(pNum){
              const vue = this;
              this.list_loadding=true;
              this.getPageList(pNum)
            },
            getPageList(pNum) {                
              goodsCatePage(pNum, this.pageSize).then(response => {
                if (response.code === '0000') {
                  this.pageTotal = response.page.total;
                  this.pageNumber = response.page.pageNumber;
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
                      deleteGoodsCate(ids).then(response => {
                        if (response.code === '0000') {
                            if (this.pageTotal - ((this.pageNumber-1)*this.pageSize) == this.selectedRows.length) {
                              this.changePage(this.pageNumber - 1);
                            }else{
                              this.changePage(this.pageNumber);
                            } 
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
                this.goodsTypeModal = true;
                this.dataInfo.id = null;
                this.dataInfo.cateName = null;
            },
            edit (selection) {
                this.goodsTypeModal = true;
                this.dataInfo.id = selection.id;
                this.dataInfo.cateName = selection.cateName;
            },
            save (name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (this.dataInfo.cateName) {
                            goodsCate(this.dataInfo).then(response => {
                              if (response.code === '0000') {
                                this.$Message.success('提交成功!');
                                this.refresh ();
                              }               
                            }).catch(error => {
                              console.log(error)
                            }); 
                        }else{
                            //this.$Message.error('请至少选择一个优享空间!');
                        }                       
                    }
                })
            },
            
            cancel () {
                this.newFlag = false
                this.typeName= ''
            },
            // save () {
            //     if (this.newFlag) {
            //         let typeObj = {
            //             id: '11',
            //             name : this.typeName
            //         }
            //         this.datas.push(typeObj)
            //     } else {
            //         let typeObj = this.datas[this.editIndex]
            //         typeObj.name = this.typeName
            //         this.datas[this.editIndex] = typeObj
            //     }
            //     this.editIndex = ''
            //     this.newFlag = false
            //     this.typeName = ''
            // },
        },
        mounted(){
            this.changePage(1);
        },

    }
</script>

<style >

</style>
