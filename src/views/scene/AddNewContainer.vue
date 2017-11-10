<template>
<Card>
  <Tabs>
    <TabPane :label="sceneName">
        <Form ref="containerData" :model="containerData" :rules="ruleValidate" :label-width="100">
          <FormItem label="货道数量: ">
            <Row>
                <Col span="8">
                  <Input disabled :value="channelCount"></Input>
                </Col>
            </Row>
          </FormItem>
          <FormItem label="货柜类型" prop="categoryId">
            <Row>
              <Col span="8">
                <Select v-model="containerData.categoryId" @on-change="selectCate">
                    <Option v-for="item in containerTypeList" :value="item.id" :label="item.cateName">{{ item.cateName }}</Option>
                </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="货柜编号" prop="sn">
            <Row>
              <Col span="8">
                <Input v-model="containerData.sn"  placeholder="请填写货柜编号"  @on-blur="checkSnExist"></Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="货柜状态" prop="status">
            <Row>
              <Col span="8">
                <Select v-model="containerData.status">
                    <Option value="ACITVE">允许服务</Option>
                    <Option value="INACTIVE">停止服务</Option>
                </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="货柜预警比例" prop="warningPer">
            <Row>
              <Col span="8">
               <Input v-model="containerData.warningPer" placeholder="请填写百分比"></Input>
               </Col>
            </Row>
          </FormItem>
          <FormItem >
              <Button type="primary" @click="back"><Icon type="chevron-left"></Icon>&nbsp;返回</Button>
              <Button type="primary" @click="handleSubmit('containerData')"> 保存 </Button>
              <Button type="info" @click="handleReset('containerData')"> 重置 </Button>            
          </FormItem>
        </Form> 
    </TabPane>
  </Tabs>
</Card>
</template>

<script>
import { getContainerTypeList, addContainer, isExistSn } from 'api/container';
    export default {
        data () {
            return {
                sceneName:'',
                channelCount:null,
                containerData:{
                  sn:null,
                  categoryId:null,
                  status:'ACITVE'
                },
                containerTypeList:[],
                ruleValidate: {
                    sn: [
                        { required: true, message: '货柜编号不能为空', trigger: 'blur' },
                    ],
                    warningPer: [
                        { required: true, message: '货柜预警比例不能为空', trigger: 'blur' }            
                    ],                    
                },
            }
        },
        methods:{
          back(){
              this.$router.push({path:'/scene/containers/index/'+this.containerData.sceneId});
          },
          getContainerTypeList(){
            getContainerTypeList().then(response => {
                if (response.code === '0000') {
                  this.cateList = response.msg;                  
                }                
            }).catch(error => {
                console.log(error)
            });  
          },
          selectCate(value){
            console.info(value);
            this.channelCount = value;
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
                    if (valid && this.dataInfo.categoryId != null) {
                        addContainer(this.dataInfo).then(response => {
                            console.info("response");
                            if (response.code === '0000') {
                                this.$Message.success('提交成功!');
                                this.$router.push({path:'/scene/containers/index/'+this.containerData.sceneId})
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
        },
        created(){ 
            this.containerData.sceneId = this.$route.query.sceneId; 
            this.sceneName = this.$route.query.sceneName;    
            this.getContainerTypeList();
        }
    }
</script>

<style scoped>

</style>
