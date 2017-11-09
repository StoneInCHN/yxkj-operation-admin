<template>
    <Card>
        <Form ref="dataInfo" :model="dataInfo" :rules="ruleValidate" :label-width="100">
        <FormItem label="场景编号:">
            <Row>
                      <Col span="4">
                        <Input v-model="dataInfo.sn" disabled></Input>
                      </Col>
                      <Col span="1">&nbsp;</Col>        
                      <Col span="4">
                        <Tooltip content="自动生成" placement="right">
                          <Icon size="large" color="#0000ff" type="information-circled"></Icon>
                        </Tooltip>
                      </Col>
            </Row>            
        </FormItem>
        <FormItem label="开业日期" prop="openTime">
            <Row>
                <Col span="8">
                    <DatePicker type="date" placeholder="选择日期" v-model="dataInfo.openTime"></DatePicker>
                </Col>
            </Row>
        </FormItem> 
        <FormItem label="所在地区" prop="area">
             <Row>
                <Col span="8">
                    {{dataInfo.areaFullName}}
                </Col>
            </Row>
        </FormItem>
        <FormItem label="重新选择地区" prop="area">
             <Row>
                <Col span="8">
                    <Cascader v-model="dataInfo.area" placeholder="请选择公司地址" :data="areas" filterable @on-change="selecteArea"></Cascader>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="详细地址" prop="address">
             <Row>
                <Col span="8">                    
                    <Input v-model="dataInfo.address" placeholder="根据地图定位获取详细地址" readonly></Input>
                </Col>
                <Col span="2">                    
                    <BMapComponent :mapData="dataInfo"></BMapComponent>
                    <Tooltip content="地图定位" placement="right" style="margin-top:-10px">
                        <Button type="text" icon="ios-location" @click="showMapModal" style="font-size:24px;color:red"></Button>
                    </Tooltip>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="优享空间名称" prop="name">
            <Row>
                <Col span="8">
                    <Input v-model="dataInfo.name" placeholder="优享空间所在写在楼名称，如：香年广场T3"></Input>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="中控IMEI" prop="imei">
            <Row>
                <Col span="8">
                    <Input v-model="dataInfo.imei" placeholder="请输入中控IMEI"></Input>
                </Col>
            </Row>
        </FormItem>
         <FormItem label="货柜状态" prop="status">
            <Row>
                <Col span="8">
                    <Select placeholder="请选择货柜状态" v-model="dataInfo.status">
                        <Option value="ACITVE">可用</Option>
                        <Option value="INACTIVE">不可用</Option>
                    </Select>
                </Col>
            </Row>
         </FormItem>
        <FormItem label="货柜音量" prop="volume">
            <Row>
            <Col span="3">
                <InputNumber :max="100" :min="0" v-model="dataInfo.volume" size="small" style="width:50px" @on-change=""></InputNumber>
            </Col>
            </Row>
         </FormItem>
         <FormItem label="重启间隔天数" prop="rebootDay">
            <Row>
                <Col span="8">
                    <Select placeholder="请选择" v-model="dataInfo.rebootDay">
                        <Option value="1">1天</Option>
                        <Option value="2">2天</Option>
                        <Option value="3">3天</Option>
                        <Option value="4">4天</Option>
                        <Option value="5">5天</Option>
                    </Select>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="默认重启时间">
            <Row>
                <Col span="8">
                    <TimePicker placeholder="选择时间" :value="dataInfo.rebootTime" :clearable="false" @on-change="changeTime"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="是否含微仓" prop="hasStore">
            <Row>
                <Col span="8">            
                    <Select v-model="dataInfo.hasStore">
                        <Option value="true">是</Option>
                        <Option value="false">否</Option>
                    </Select>
                </Col>
            </Row>
        </FormItem>
         <FormItem >
             <router-link to="/scene/index"><Button type="primary"><Icon type="chevron-left"></Icon>&nbsp;返回</Button></router-link>
             <Button type="primary" @click="handleSubmit('dataInfo')"> 保存 </Button>
             <Button type="info"> 重置 </Button>
        </FormItem>
    </Form>
</Card>
</template>

<script>
import {updateScene, getSceneData} from 'api/scene';
import BMapComponent  from './BMapComponent.vue';
import store from 'store';

    export default {
        components: { BMapComponent },
          data () {
            return {    
                id:null,      
                dataInfo:{},
                areas: [],
                ruleValidate: {
                    name: [
                        { required: true, message: '优享空间名称不能为空', trigger: 'blur' },
                        //{ required: true, trigger: 'blur', validator: lengthSn },
                    ],
                    // openTime: [
                    //     { required: true, type: 'date', message: '开业日期不能为空', trigger: 'change' }
                    // ],
                    imei: [
                        { required: true, message: '中控IMEI不能为空', trigger: 'blur' }    
                    ], 
                    rebootDay: [
                        { required: true, message: '重启间隔天数不能为空', trigger: 'blur' }    
                    ], 
                    // rebootTime: [
                    //     { required: true, type: 'date', message: '重启时间不能为空', trigger: 'change' }
                    // ],
                    hasStore: [
                        { required: true, message: '请选择是否含微仓', trigger: 'blur' }    
                    ], 
                    // area: [
                    //     { required: true, type: 'array', message: '请选择优享空间地址', trigger: 'change' }
                    // ],
                    address: [
                        { required: true, message: '详细地址不能为空', trigger: 'change' }  
                    ],
                    status: [
                        { required: true, message: '状态不能为空', trigger: 'change' }    
                    ],   
                },
            }
        },
        methods: {
            showMapModal(){
                console.info(this.dataInfo);
                this.dataInfo.showMap = true;
            },
            handleSubmit (name) {               
                this.$refs[name].validate((valid) => {                             
                    if (valid) {
                        updateScene(this.id,this.dataInfo).then(response => {
                            console.info(response);
                            if (response.code === '0000') {
                                this.$Message.success('提交成功!');
                                this.$router.push({path:'/scene/index'})
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
            getSceneInfo(){
                getSceneData(this.id).then(response => {
                    if (response.code === '0000') {
                        this.dataInfo = response.msg;
                   }              
                }).catch(error => {
                    console.log(error)
                });
            },
            getAreaList () {
                if (store.getters.areas.code == '0000') {
                    this.areas= store.getters.areas.msg;
                }else{
                    this.$store.dispatch('GetAreaList').then(res => {
                      this.areas= res.msg;
                    }).catch(err => {
                      console.log(err)
                    });
                }

            },
            selecteArea(value, selectedData){
              this.dataInfo.area = value;
              //console.info(this.dataInfo);
            },
            changeTime(value){
                this.dataInfo.rebootTime = value;
            }
        },
        created(){   
             this.id = this.$route.params.id;
             this.getSceneInfo();         
             this.getAreaList();             
        }
    }
</script>

<style scoped>

</style>
