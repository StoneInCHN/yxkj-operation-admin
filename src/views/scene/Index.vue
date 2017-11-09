<template>
<div>
    <Card>
        <p slot="title">
           <Icon type="ios-search"></Icon> <span>查询条件</span>
        </p>
        <Form  :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <FormItem label="优享空间名称">
                        <Input  placeholder="请输入优享空间名称" v-model="filterData.name"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="优享空间编号">
                        <Input  placeholder="请输入优享空间编号"  v-model="filterData.sn"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                <div style="margin-left:-10px;">  
                    <FormItem>
                        <Button type="primary" icon="ios-search" @click="changePage(1)">搜索</Button>
                    </FormItem>
                </div>
                </Col>
            </Row>
         </Form>
    </Card>
    <br/>
    <Card>
        <div class="btn-groups">
            <div class="float-left">
                <Button type="info"   @click="replenishMessageAction">补货信息</Button>
                <Button type="success"  @click="qrCodeManageAction">二维码管理</Button>
            </div>
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
    </Card>
</div>
</template>

<script>
import { scenePage,deleteScene } from 'api/scene';
import { parseTime } from 'utils/index';
    export default {

            data () {
            return {
                selectedRow: {},
                selectedRows: [],
                pageTotal:0,
                pageNumber:1,
                pageSize:10,
                page_list:[],
                filterData:{
                  sn:'',
                  name:''
                },
                list_loadding: false,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '编号',
                        key: 'sn',
                        ellipsis:'true',
                        align: 'center',
                    },
                    {
                        title: '名称',
                        key: 'name',
                        ellipsis:'true',
                        align: 'center',
                    },
                    {
                        title: '开业时间',
                        key: 'openTime',
                        ellipsis:'true',
                        align: 'center',
                        render: (h, params) => {
                            return parseTime(params.row.openTime);
                        }
                    },
                    {
                        title: '货柜数',
                        key: 'cntrTotalCount',
                        align: 'center',
                    },
                    {
                        title: '服务状态',
                        key: 'central.status',
                        align: 'center',
                        render: (h, params) => {
                                const status=params.row.central.status;
                                if(status==='ACITVE'){                                  
                                    return h('div', [h('Tag', {props: {type: 'border', color: "green"}}, "允许服务")]);
                                }else if(status==='INACTIVE'){
                                    return h('div', [h('Tag', {props: {type: 'border', color: "yellow"}}, "停止服务")]);
                                }
                        }
                    },   
                    {
                        title: '是否含微仓',
                        key: 'hasStore',
                        align: 'center',
                        render: (h, params) => {
                            if (params.row.hasStore) {
                                return h('div', [h('Icon', {props: {type: 'checkmark-round', color: "orange"}})]);
                            }else{
                                return "-";
                            }                            
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
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
                                            //this.editSecnceAction()
                                            this.$router.push({path:'/scene/edit/'+params.row.id })
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.containerManageAction(params.row.id)
                                        }
                                    }
                                }, '货柜管理')
                            ]);
                        }
                    },
                ],
            }
        },
        methods: {
            refresh () {
              this.changePage(this.pageNumber);
            },
            changePage(pNum){
              const vue = this;
              this.list_loadding=true;
              this.getPageList(pNum, this.filterData)
              //console.info(this.filterData);
            },
            getPageList(pNum, filterData) {                
              scenePage(pNum, this.pageSize, filterData).then(response => {
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
            deleteBatch () {
              if (this.selectedRows.length == 0) {
                  this.$Message.warning('请选择要删除的项!');
              }else{
                this.$Modal.confirm({
                  title:'提示',
                  content:'删除优享空间会同时删除其中的货柜，请确认要删除选中的这 <b style="color:#f60">'+this.selectedRows.length+'</b> 个优享空间吗?',
                  onOk:(()=>{
                      var ids = [];
                      for (var i = 0; i < this.selectedRows.length; i++) {
                        ids.push(this.selectedRows[i].id);
                      }                      
                      deleteScene(ids).then(response => {
                        if (response.code === '0000') {
                            if (this.pageTotal - ((this.pageNumber-1)*this.pageSize) == this.selectedRows.length) {
                              this.changePage(this.pageNumber - 1);
                            }else{
                              this.changePage(this.pageNumber);
                            }                             
                        }
                        this.$Message.info(response.desc);             
                      }).catch(error => {
                          this.$Message.info('请求异常');
                      });
                  })
                });
              }
            },
            onSelectionChange(selection, row) {
              this.selectedRows= selection;
            },
            add () {
                this.$router.push({
                    path: 'add'
                })
            }, 
            replenishMessageAction() {
                    this.$router.push({
                        path: 'replenish'
                    })
                },
            qrCodeManageAction() {
                    this.$router.push({
                        path: 'qrCode'
                    })
                },
            addNewSecnceAction() {
                this.$router.push({path: 'add'})
            },
            //  editSecnceAction() {
            //         this.$router.push({
            //             path: 'edit-sence'
            //         })
            // },
            delteContainerAction() {
                console.log('delteContainerAction')
                this.modal_loading = true
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modalDelete = false
                    this.$Message.success('删除成功');
                }, 2000);
            },
            containerManageAction(senceId) {
                 this.$router.push({
                        path: 'containers'
                    })
            },
        },
        mounted(){
            this.changePage(1);
        },

    }
</script>

<style >

</style>
