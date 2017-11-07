<template>
<div>
	<Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>查询条件</span>
        </p>
        <Form  :label-width="100" label-position="right">
            <Row >
                <Col span="6">
                    <FormItem label="商品名称">
                        <Input  placeholder="请输入商品名称" v-model="filterData.name"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="商品条码">
                        <Input  placeholder="请输入商品条码" v-model="filterData.sn"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                <div style="margin-left:-10px;">  
                    <Form-item>
                        <Button type="primary" icon="ios-search" @click="changePage(1)">搜索</Button>
                    </Form-item>
                </div>
                </Col>
            </Row>
         </Form>
    </Card>
    <br/>
    <Card>
        <div class="btn-groups">
            <div class="float-left">
                <Button type="info"   @click="goodsType">商品分类管理</Button>
                <Button type="success"  @click="excelImport">Excel导入</Button>
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
import goodsImg from './GoodsImg.vue';
import { goodsPage,deleteGoods } from 'api/goods';
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
              list_loadding:false,
                modalDelete: false,
                modal_loading: false,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品条码',
                        key: 'sn',
                        ellipsis:'true',
                        align: 'center',
                    },
                    {
                        title: '商品名称',
                        key: 'name',
                        ellipsis:'true',
                        align: 'center',
                    },
                    {
                        title: '净含量',
                        key: 'spec',
                        align: 'center',
                    },
                    {
                        title: '商品分类',
                        key: 'category.cateName',
                        render: (h, params) => {
                            return params.row.category.cateName;
                        }
                    },
                    {
                        title: '成本价',
                        key: 'costPrice',
                        align: 'center',
                        render: (h, params) => {
                            if (params.row.costPrice) {
                                return "￥"+params.row.costPrice.toFixed(2);
                            }else{
                                return "-";
                            }
                            
                        } 
                    },
                    {
                        title: '默认售价',
                        key: 'salePrice',
                        align: 'center',
                        render: (h, params) => {
                            if (params.row.salePrice) {
                                return "￥"+params.row.salePrice.toFixed(2);
                            }else{
                                return "-";
                            }
                            
                        }                        
                    },
                    {
                        title: '小图',
                        key: 'goodsPics.smallImg',
                        align: 'center',
                        render: (h, params) => {
                                var imgs = params.row.goodsPics;
                                if (imgs && imgs.length > 0) {
                                    for (var i = 0; i < imgs.length; i++) {
                                        if(imgs[i].order == 0){
                                            return h(goodsImg, {props: {url: imgs[i].source}})
                                        }
                                    }                                  
                                }else{
                                  return "-";
                                } 
                        } 
                    },
                    {
                        title: '大图',
                        key: 'goodsPics.bigImg',
                        align: 'center',
                        render: (h, params) => {
                                var imgs = params.row.goodsPics;
                                if (imgs && imgs.length > 0) {
                                    for (var i = 0; i < imgs.length; i++) {
                                        if(imgs[i].order == 1){
                                            return h(goodsImg, {props: {url: imgs[i].source}})
                                        }
                                    }                                  
                                }else{
                                  return "-";
                                } 
                        } 
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
                                            this.edit()
                                        }
                                    }
                                }, '编辑')
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
              console.info(this.filterData);
            },
            getPageList(pNum, filterData) {                
              goodsPage(pNum, this.pageSize, filterData).then(response => {
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
                      deleteGoods(ids).then(response => {
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
            excelImport () {
            	alert("Excel导入")
            },
            edit () {
                this.$router.push({
                    path: 'edit'
                })
            },
            goodsType () {
				this.$router.push({
                    path: 'goodsType'
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
