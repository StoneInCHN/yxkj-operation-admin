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
</Card>
</template>

<script>
import { getKeeperList, deleteKeeper, resetPwd } from 'api/property';
import sceneList from './SceneList.vue';
     export default {
        data () {
            return {
              selectedRow: {},
              selectedRows: [],
              pageTotal:0,
              pageNumber:1,
              pageSize:10,
              page_list:[],
              list_loadding:false,
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
                        title: '手机号',
                        key: 'cellPhoneNum'
                    },
                    {
                        title: '姓名',
                        key: 'realName'
                    },
                    {
                        title: '负责的优享空间',
                        key: 'scenes',
                        render: (h, params) => {
                            const scenes=params.row.scenes;
                            if (scenes && scenes.length > 0) {
                                  return h(sceneList, {props: {scenes: scenes, keeper: false}})
                            }else{
                                  return "无";
                            } 
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                            return h('div',[
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
                                            this.$router.push({path:'/role/bulter/edit/'+params.row.id })
                                        }
                                     }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'warning',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.resetPwd(params.row)
                                        }
                                     }
                                }, '重置密码')
                            ])
                        }
                    }
                ]
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
              add () {
                  this.$router.push('add')
              },
            resetPwd (selectedRow) {
              this.selectedRow = selectedRow;
              this.$Modal.confirm({
                  title:'管家密码重置',
                  content:'请确定要重置物业 <b style="color:#f60">'+selectedRow.realName+'</b>（手机号：'+ selectedRow.cellPhoneNum+'）的密码吗？',
                  onOk:(()=>{
                      resetPwd(this.selectedRow.id).then(response => {
                        console.info(response);
                        if (response.code === '0000') {
                            if (this.pageTotal - ((this.pageNumber-1)*this.pageSize) == 1) {
                              this.changePage(this.pageNumber - 1);
                            }else{
                              this.changePage(this.pageNumber);
                            } 
                            this.$Notice.success({
                                title:'操作成功',
                                desc:'物业 <b style="color:#f60">'+selectedRow.realName+'</b>（账户：'+ selectedRow.cellPhoneNum+'）的密码已重置，新密码已经短信发送到物业手机上。',
                                duration: 0
                            });
                        }else{
                            this.$Message.info(response.desc);
                        }              
                      }).catch(error => {
                          this.$Message.info('请求异常');
                      });
                  })

              });
            },
            getPageList(pNum) {                
              getKeeperList(pNum, this.pageSize).then(response => {
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
                  content:'请确认要删除这 <b style="color:#f60">'+this.selectedRows.length+'</b> 项?',
                  onOk:(()=>{
                      var ids = [];
                      for (var i = 0; i < this.selectedRows.length; i++) {
                        ids.push(this.selectedRows[i].id);
                      }                      
                      deleteKeeper(ids).then(response => {
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
            onSelectionChange(selection, row) {
              this.selectedRows= selection;
            },
        },
        mounted(){
            this.changePage(1);
        },
    }
</script>

<style scoped>

</style>
