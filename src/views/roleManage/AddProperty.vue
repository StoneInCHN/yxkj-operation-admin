<template>
<Card>
    <Form :label-width="100" label-position="right" :rules="ruleValidate" :model="dataInfo" ref="dataInfo">
        <FormItem label="姓名" prop="realName">
             <Row>
                <Col span="8">
                     <Input v-model="dataInfo.realName" placeholder="请输入物业姓名"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="账号"  prop="cellPhoneNum">
             <Row>
                <Col span="8">
                   <Input v-model="dataInfo.cellPhoneNum" placeholder="请输入物业手机号"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="负责的优享空间">
            <sceneCart v-for="scene in dataInfo.scenes" :scene="scene" :scenes="dataInfo.scenes" key ="scene.id"></sceneCart>           
        </FormItem>
        <FormItem label="">
            <Button type="success" icon="plus" @click="add"> 新增 </Button>           
        </FormItem>
         <FormItem >             
             <router-link to="/role/property/index"><Button type="primary"><Icon type="chevron-left"></Icon>&nbsp;返回</Button></router-link>
             <Button type="primary" @click="handleSubmit('dataInfo')"> 保存 </Button>
        </FormItem>
    </Form>
</Card>
</template>

<script>
    import { getAllScene,addKeeper } from 'api/keeper'; 
    import { isValidMobile } from 'utils/validate';
    import sceneCart from './SceneCart.vue';
    export default {
          components: { sceneCart },
          data () {
            const validMobile = (rule, value, callback) => {
              if (!isValidMobile(value)) {
                callback(new Error('请输入正确的手机号'));
              } else {
                callback();
              }
            };
            return {
                template: {id:null,point:null},
                allScene: [],
                selectKeys: [],
                listStyle: {
                    width: '300px',
                    height: '500px',
                },
                dataInfo:{
                    scenes:[]
                },
                ruleValidate: {
                    realName: [
                        { required: true, message: '物业姓名不能为空', trigger: 'blur' }
                    ],
                    cellPhoneNum: [
                        { required: true, message: '物业手机号不能为空', trigger: 'blur' },
                        { required: true, trigger: 'blur', validator: validMobile }         
                    ],
                },
            }
        },
        methods: {
            handleChange (targetKeys) {
                this.selectKeys = targetKeys;
                this.dataInfo.sceneIds = this.selectKeys;
            },
            render (item) {
                return item.label + ' - ' + item.key;
            },
            reloadData(){              
              getAllScene().then(response => {
                if (response.code === '0000') {
                    this.allScene = response.msg;
                    this.selectKeys = [];                  
                }               
              }).catch(error => {
                console.log(error)
              });
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (this.dataInfo.sceneIds && this.dataInfo.sceneIds.length > 0) {
                            addKeeper(this.dataInfo).then(response => {
                              if (response.code === '0000') {
                                this.$Message.success('提交成功!');
                                //this.$router.push({path:'/role/bulter/index'})
                                this.$router.push('index')
                              }               
                            }).catch(error => {
                              console.log(error)
                            }); 
                        }else{
                            this.$Message.error('请至少选择一个优享空间!');
                        }                       
                    }
                })
            },  
            add(){
                this.dataInfo.scenes.push(this.template);
            },
            remove(){
                this.dataInfo.scenes.pop(this.template);
            },
             
        },
        mounted (){
                     
        }, 
        created(){
            this.reloadData();  
            this.dataInfo.scenes.push(this.template);
        }
    }
</script>

<style scoped>

</style>
