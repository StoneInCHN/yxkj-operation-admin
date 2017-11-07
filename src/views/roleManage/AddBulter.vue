<template>
<Card>
    <Form :label-width="100" label-position="right" :rules="ruleValidate" :model="dataInfo" ref="dataInfo">
        <FormItem label="姓名" prop="realName">
             <Row>
                <Col span="8">
                     <Input v-model="dataInfo.realName" placeholder="请输入管家姓名"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="账号"  prop="cellPhoneNum">
             <Row>
                <Col span="8">
                   <Input v-model="dataInfo.cellPhoneNum" placeholder="请输入管家手机号"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="负责的优享空间">
            <Row>
                <Col span="24">
                    <Transfer
                        :data="allScene"
                        :target-keys="selectKeys"
                        :list-style="listStyle"
                        :render-format="render"
                        :titles="['可选优享空间', '已选优享空间']"
                        :operations="['删除','添加']"
                        filterable
                        @on-change="handleChange">
                        <div :style="{float: 'right', margin: '5px'}">
                            <Button type="ghost" size="small" @click="reloadData">重置</Button>
                        </div>        
                    </Transfer>
                </Col>
            </Row>
        </FormItem>
         <FormItem >             
             <router-link to="/role/bulter/index"><Button type="primary"><Icon type="chevron-left"></Icon>&nbsp;返回</Button></router-link>
             <Button type="primary" @click="handleSubmit('dataInfo')"> 保存 </Button>
        </FormItem>
    </Form>
</Card>
</template>

<script>
    import { getAllScene,addKeeper } from 'api/keeper'; 
    import { isValidMobile } from 'utils/validate';
    export default {
          data () {
            const validMobile = (rule, value, callback) => {
              if (!isValidMobile(value)) {
                callback(new Error('请输入正确的手机号'));
              } else {
                callback();
              }
            };
            return {
                allScene: [],
                selectKeys: [],
                listStyle: {
                    width: '300px',
                    height: '500px',
                },
                dataInfo:{},
                ruleValidate: {
                    realName: [
                        { required: true, message: '管家姓名不能为空', trigger: 'blur' }
                    ],
                    cellPhoneNum: [
                        { required: true, message: '管家手机号不能为空', trigger: 'blur' },
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
                                this.$router.push({path:'/role/bulter/index'})
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
        },
        mounted (){
                     
        }, 
        created(){
            this.reloadData();  
        }
    }
</script>

<style scoped>

</style>
