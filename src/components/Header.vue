<template>
  <div>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>  
    </ul>
    <ul class="nav navbar-nav ml-auto">
      
      <li class="nav-item d-md-down-none">
        <a class="nav-link" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li>
      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <span class="d-md-down-none">{{user.userName}}</span>
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp" @click="message">  <Icon type="chatbox-working"></Icon>系统消息<span class="badge badge-danger">42</span></p>
            </Dropdown-item>
            <Dropdown-item divided>
              <p class="dropdown-itemp" @click="ChangePwd"><Icon type="android-contact"></Icon> 修改密码</p>
            </Dropdown-item>
            <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon> 注销</p></a>
            </Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
      <li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
    <Modal v-model="changePwd_modal" title="修改密码" 
        @on-ok="handleSubmit('dataInfo')">
            <Form ref="dataInfo" :model="dataInfo" :rules="ruleValidate" :label-width="100">
                <FormItem label="账号" prop="userName">
                    <Input v-model="dataInfo.userName" disabled></Input>
                </FormItem>
                <FormItem label="旧密码" prop="oldPwd">
                    <Input type="password" v-model="dataInfo.oldPwd" placeholder="请输入旧密码"></Input>
                </FormItem>
                <FormItem label="新密码" prop="newPwd">
                    <Input type="password" v-model="dataInfo.newPwd" placeholder="请输入新密码"></Input>
                </FormItem>
                <FormItem label="重新输入" prop="reNewPwd">
                    <Input type="password" v-model="dataInfo.reNewPwd" placeholder="再次输入新密码"></Input>
                </FormItem>
            </Form>
    </Modal>
  </div>
</template>
<script>

import navbar from './Navbar'
import { getCurrentUser,changePwd } from 'api/common';
import { isValidPassword } from 'utils/validate';
export default {
  name: 'header',
  components: {
    navbar,    
  },
  data () {
            const lengthPassword = (rule, value, callback) => {
                if (value.length < 6 || value.length > 16) {
                  callback(new Error('密码长度必须为6~16位'));
                } else {
                  callback();
                }
            };
            const validatePassword = (rule, value, callback) => {
                if (!isValidPassword(value)) {
                  callback(new Error('请输入合法的密码'));
                } else {
                  callback();
                }
            };
            const notEqual = (rule, value, callback) => {
                if(value){
                    if(this.dataInfo.newPwd != this.dataInfo.reNewPwd){
                        callback(new Error('两次输入新密码不一致，请重新输入'));
                    }else{
                        callback();
                    }
                }else{
                    callback(new Error('请再次输入新密码'));
                }
            }; 
    return {
      user: {},
      changePwd_modal: false,
      dataInfo: {
                    userName: '',
                    oldPwd: null,
                    newPwd: null,
                    reNewPwd: null,
                },
      ruleValidate: {
                  oldPwd: [
                    { required: true, trigger: 'blur', validator: lengthPassword },
                    { required: true, trigger: 'blur', validator: validatePassword }
                  ],
                  newPwd: [
                    { required: true, trigger: 'blur', validator: lengthPassword },
                    { required: true, trigger: 'blur', validator: validatePassword }
                  ],
                  reNewPwd: [
                    { required: true, trigger: 'blur', validator: lengthPassword },
                    { required: true, trigger: 'blur', validator: validatePassword },
                    { required: true, trigger: 'blur', validator: notEqual }                    
                  ]
                },
    }
  },
  methods: {
    handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                  console.info(valid);
                    if (valid) {
                        changePwd(this.dataInfo).then(response => {
                        if (response.code === '0000') {
                            this.$Modal.success({
                              title:'提示',
                              content:'密码修改成功！',
                              okText:'重新登录',
                              //cancelText:'暂不',
                              onOk:(()=>{
                                this.$store.dispatch('LogOut').then(() => {
                                    this.$router.push({ path: '/login' });
                                }).catch(err => {
                                    this.$message.error(err);
                                });
                              }),
                              // onCancel:(()=>{
                              //    this.$router.push({path:'/dashboard'})
                              // }),
                            });                          
                        }else{
                            this.$Message.error(response.desc);
                        }              
                        }).catch(error => {
                          console.log(error)
                        });                        
                    }
                })
            },
    handleReset (name) {
                this.$refs[name].resetFields();  
                this.dataInfo.userName = this.user.userName;
            },
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    ChangePwd(){
      this.changePwd_modal = true;
    },
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    message (e) {
      e.preventDefault()
      this.$router.push('../messages')
    }
  },
    mounted(){
      this.user = getCurrentUser();
      this.dataInfo.userName = this.user.userName;
  },
}
</script>

<style type="text/css">
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
</style>
