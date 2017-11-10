<template>
<Card>
    <Tabs value="name1">
        <TabPane :label="sceneName" name="name1">
            <div class="btn-groups">
                <div class="float-left">
                    <Button type="info"   @click="allowServicAction">允许服务</Button>
                    <Button type="success"  @click="stopServiceAction">停止服务</Button>
                </div>
                <div class="float-right">                    
                    <router-link :to="{path:'/scene/containers/add',query: {sceneName: sceneName,sceneId: sceneId}}">
                        <Button type="primary"  icon="android-add">新增</Button>
                    </router-link>
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
        </TabPane>
    </Tabs>
</Card>
</template>

<script>
import { vendingContainerList,deleteContainer } from 'api/container';
    export default {
            data () {
            return {
                sceneId:null,
                selectedRow: {},
                selectedRows: [],
                page_list:[],
                sceneName:'',
                list_loadding: false,
                modalDelete: false,
                modal_loading: false,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '货柜编号编号',
                        key: 'sn',
                        align: 'center',
                    },
                    {
                        title: '货柜类型',
                        key: 'category.cateName',
                        align: 'center',
                        render: (h, params) => {
                                return params.row.category.cateName;
                        }
                    },
                    {
                        title: '货柜状态',
                        key: 'status',
                        align: 'center',
                        render: (h, params) => {
                                const status=params.row.status;
                                if(status==='ACITVE'){                                  
                                    return h('div', [h('Tag', {props: {type: 'border', color: "green"}}, "允许服务")]);
                                }else if(status==='INACTIVE'){
                                    return h('div', [h('Tag', {props: {type: 'border', color: "yellow"}}, "停止服务")]);
                                }
                        }
                    },
                    {
                        title: '预警值比例',
                        key: 'warningPer',
                        align: 'center',
                        render: (h, params) => {
                                const warningPer=params.row.warningPer;
                                if (warningPer) {
                                    return warningPer+'%';
                                }else{
                                    return "-";
                                }                                
                        }
                    },
                    {
                        title: '操作',
                        key: 'action', 
                        align: 'center',                       
                        render: (h, params) => {
                            const warningPer=params.row.warningPer;
                            if (warningPer) {
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
                                                this.$router.push({path:'/scene/containers/edit/'+params.row.id })
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
                                                this.$router.push({path:'/scene/containers/channel/'+params.row.id })
                                            }
                                        }
                                    }, '货道管理')
                                ]);
                            } else {
                                return "-";
                            }
                            
                        }
                    }
                ],
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
                vendingContainerList(this.sceneId).then(response => {                    
                    if (response.code === '0000') {
                        this.page_list = response.msg;
                        if (this.page_list && this.page_list.length > 0) {
                            this.sceneName = this.page_list[0].scene.name
                        }                        
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
                      deleteContainer(ids).then(response => {
                        if (response.code === '0000') {
                            this.changePage();                           
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
                this.$router.push({path:'/scene/containers/add/'+this.sceneName});
            }, 
            allowServicAction() {
                },
            stopServiceAction() {
                },

            delteContainerAction() {
                console.log('delteContainerAction')
                this.modal_loading = true
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modalDelete = false
                    this.$Message.success('删除成功');
                }, 2000);
            },
            warningSettingAction() {
                this.$router.push({
                        path: 'waring-value-manage'
                    })
            },
            containerTypeAction() {
                this.$router.push({
                        path: 'container-type-manage'
                    })
            },
        },
        mounted(){
            this.changePage();
        },
        created(){   
             this.sceneId = this.$route.params.id;                 
        }

    }
</script>

<style scoped>
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
