<template>
<Card>
    <Form ref="dataInfo" :model="dataInfo" :rules="ruleValidate" :label-width="100">
        <FormItem label="商品条码" prop="sn">
             <Row>
                <Col span="8">
                    <Input v-model="dataInfo.sn"  placeholder="请输入商品条码" @on-blur="checkSnExist"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="商品名称" prop="name">
             <Row>
                <Col span="8">
                   <Input v-model="dataInfo.name" placeholder="请输入商品名称"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="净含量" prop="spec">
            <Row>
                <Col span="8">
                    <Input v-model="dataInfo.spec" placeholder="请输入净含量"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="商品分类" prop="categoryId">
            <Row>
                <Col span="8">
                    <Select v-model="dataInfo.categoryId">
                        <Option v-for="item in cateList" :value="item.id" :label="item.cateName">{{ item.cateName }}</Option>
                    </Select>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="成本价" prop="costPrice">
            <Row>
                <Col span="8">
                    <Input v-model="dataInfo.costPrice" placeholder="请输入成本价"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="默认售价" prop="salePrice">
            <Row>
                <Col span="8">
                    <Input v-model="dataInfo.salePrice" placeholder="请输入成本价"></Input>       
                </Col>
            </Row>
        </FormItem>
        <FormItem label="商品小图" prop="smallUrl">            
                    <div class="demo-upload" v-if="small_item && small_item.status">
                        <template v-if="small_item.status === 'finished'">
                            <img :src="small_item.response.desc">
                            <div class="demo-upload-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView0"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove0()"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="small_item.showProgress" :percent="small_item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload 
                        ref="small_upload"
                        action="/yxkj-operation/file/uploadFile" 
                        :data="imageType"
                        :format="['jpg','jpeg','png']" 
                        :show-upload-list="false"
                        :max-size="2048"
                        :on-success="handleSuccess0"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        type="drag"
                        style="display: inline-block;width:59px;">
                        <div class="uploadImg">
                            <Icon type="camera" size="20"></Icon>
                        </div>
                    </Upload> 
                    <Input v-model="dataInfo.smallUrl" v-show="false"></Input>           
                    <Modal title="查看图片" v-model="small_visible" cancel-text="" width="400">
                        <img :src="dataInfo.smallUrl" v-if="small_visible" style="width: 100%">
                    </Modal>
        </FormItem>
        <FormItem label="商品大图" prop="largeUrl">            
                    <div class="demo-upload" v-if="large_item && large_item.status">
                        <template v-if="large_item.status === 'finished'">
                            <img :src="large_item.response.desc">
                            <div class="demo-upload-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView1"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove1()"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="large_item.showProgress" :percent="large_item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload 
                        ref="large_upload"
                        action="/yxkj-operation/file/uploadFile" 
                        :data="imageType"
                        :format="['jpg','jpeg','png']" 
                        :show-upload-list="false"
                        :max-size="2048"
                        :on-success="handleSuccess1"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        type="drag"
                        style="display: inline-block;width:59px;">
                        <div class="uploadImg">
                            <Icon type="camera" size="20"></Icon>
                        </div>
                    </Upload> 
                    <Input v-model="dataInfo.largeUrl" v-show="false"></Input>           
                    <Modal title="查看图片" v-model="large_visible" cancel-text="" width="700">
                        <img :src="dataInfo.largeUrl" v-if="large_visible" style="width: 100%">
                    </Modal>
        </FormItem>        
         <FormItem >
            <router-link to="/goods/index"><Button type="primary"><Icon type="chevron-left"></Icon>&nbsp;返回</Button></router-link>
             <Button type="primary" @click="handleSubmit('dataInfo')"> 保存 </Button>
             <Button type="info"> 重置 </Button>
        </FormItem>
    </Form>
</Card>
</template>

<script>
import { isPositiveNumber, validSn } from 'utils/validate';
import { goodsCatePage, updateGoods, isExistSn, getGoodsData } from 'api/goods';
    export default {
          data () {
            const validPrice = (rule, value, callback) => {
              if (! isPositiveNumber(value)) {
                callback(new Error('请输入正确的价格'));
              } else {
                callback();
              }
            };
            const checkSn = (rule, value, callback) => {
              if (!validSn(value)) {
                callback(new Error('请输入正确的商品编号（允许数字、空格、字母）'));
              } else {
                callback();
              }
            };  
            const isExistSn = (rule, value, callback) => {
                  if (this.snExist) {
                    callback(new Error('该商品条码已经存在，请重新填写'));
                  } else {
                    callback();
                  } 
            };  
            const lengthSn = (rule, value, callback) => {
                if (value.length < 8 || value.length > 13) {
                  callback(new Error('密码长度必须为8~13位'));
                } else {
                  callback();
                }
            };
            return {
                id:null,
                imageType:{imageType:"GOODS_IMG"},
                dataInfo: {                   
                    sn: '',
                    name: '',
                    spec: '',
                    costPrice: '',
                    salePrice: '',
                    smallUrl:'',
                    largeUrl:'',
                    categoryId: ''
                },
                ruleValidate: {
                    sn: [
                        { required: true, message: '商品条码不能为空', trigger: 'blur' },
                        { required: true, trigger: 'blur', validator: lengthSn },
                        { required: true, trigger: 'blur', validator: checkSn },
                        { required: true, trigger: 'blur', validator: isExistSn }
                    ],
                    name: [
                        { required: true, message: '商品名称不能为空', trigger: 'blur' }            
                    ],
                    spec: [
                        { required: true, message: '净含量不能为空', trigger: 'blur' }    
                    ],
                    // categoryId: [
                    //     { required: true, message: '商品分类不能为空', trigger: 'change' }            
                    // ],
                    costPrice: [
                        { required: true, trigger: 'blur', validator: validPrice }
                    ],
                    salePrice: [
                        { required: true, trigger: 'blur', validator: validPrice }
                    ],
                    smallUrl: [
                        { required: true, message: '请上传商品图片!!!', trigger: 'change' }    
                    ],
                    largeUrl: [
                        { required: true, message: '请上传商品图片!!!', trigger: 'change' }    
                    ],                    
                    
                },
                small_visible:false,
                small_item: {
                    status: '',
                    response: {
                        desc:''
                    }
                },
                small_items: [],
                large_visible:false,
                large_item: {
                    status: '',
                    response: {
                        desc:''
                    }
                },
                large_items: [],
                cateList: [],
                typeName: ''
            }
        },
        methods: {
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleSuccess0 (res, file) {
                this.small_item = this.small_items[this.small_items.length-1];
                this.dataInfo.smallUrl = this.small_item.response.desc;
            },
            handleView0 (type) {
                this.small_visible = true;                
            },
            handleRemove0 (file) {
                this.small_item = null;
                this.dataInfo.smallUrl = '';
            },
            handleSuccess1 (res, file) {
                this.large_item = this.large_items[this.large_items.length-1];
                this.dataInfo.largeUrl = this.large_item.response.desc;
            },
            handleView1 (type) {
                this.large_visible = true;                
            },
            handleRemove1 (file) {
                this.large_item = null;
                this.dataInfo.largeUrl = '';
            },
            checkSnExist() {
                console.info("checkSnExist");
                isExistSn(this.dataInfo.sn, null).then(response => {
                    if (response.code === '0000' && response.desc === 'true') {
                        this.snExist =  true;                       
                    }else{
                        this.snExist =  false;
                    }
                }).catch(error => {
                    
                }); 
            },
            handleSubmit (name) {
                this.checkSnExist();
                this.$refs[name].validate((valid) => {   
                //console.info(this.dataInfo);          
                    if (valid && this.dataInfo.categoryId != null) {
                        updateGoods(this.id,this.dataInfo).then(response => {
                            //console.info("response");
                            if (response.code === '0000') {
                                this.$Message.success('提交成功!');
                                this.$router.push({path:'/goods/index'})
                            }               
                        }).catch(error => {
                              console.log(error)
                        }); 
                       
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {                
                this.$refs[name].resetFields();
                this.item = null;
            },
            getDataInfo(){
                getGoodsData(this.id).then(response => {
                    if (response.code === '0000') {
                        this.dataInfo = response.msg;
                        //console.info(this.dataInfo.smallUrl);
                        if (this.dataInfo.smallUrl) {
                           this.small_item.status = 'finished';
                           this.small_item.response.desc = this.dataInfo.smallUrl;                           
                        }
                        //console.info(this.dataInfo.largeUrl);
                        if (this.dataInfo.largeUrl) {
                           this.large_item.status = 'finished';
                           this.large_item.response.desc = this.dataInfo.largeUrl;                           
                        }
                    }               
                }).catch(error => {
                    console.log(error)
                });
            },
        },
        mounted () {
            this.small_items = this.$refs.small_upload.fileList;
            this.large_items = this.$refs.large_upload.fileList;
        },
        created () {  
              this.id = this.$route.params.id;
              this.getDataInfo();
              goodsCatePage(1, 200).then(response => {
                if (response.code === '0000') {
                  this.cateList = response.msg;
                }                
              }).catch(error => {
                console.log(error)
              });  

        },
        
    }
</script>

<style scoped>
    .uploadImg{
        width: 58px;
        height:58px;
        line-height: 58px;
    }
    .demo-upload{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 2px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload img{
        width: 100%;
        height: 100%;
        vertical-align: top
    }
    .demo-upload-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload:hover .demo-upload-cover{
        display: block;
    }
    .demo-upload-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
