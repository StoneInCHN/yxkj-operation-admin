 <template>
    <div class="login-container" >
      <Form ref="loginForm" autoComplete="on" :model="loginForm" :rules="loginRules" class="card-box login-form">
        <Form-item prop="email">
          <Input type="text" v-model="loginForm.email" placeholder="Username" autoComplete="on">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="loginForm.password" placeholder="Password" @keyup.enter.native="handleLogin">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleLogin('loginForm')" long>登录</Button>
        </Form-item>
        <div class='tips'>admin账号为:admin@wz.com 密码123456</div>
        <div class='tips'>editor账号:editor@wz.com 密码123456</div>
      </Form>
    </div>
  </template>
  <script>
  import { isWscnEmail } from 'utils/validate';

  export default {
    name: 'login',
    data() {
      const validateEmail = (rule, value, callback) => {
        if (!isWscnEmail(value)) {
          callback(new Error('请输入正确的合法邮箱'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          email: 'admin@wz.com',
          password: ''
        },
        loginRules: {
          email: [
            { required: true, trigger: 'blur', validator: validateEmail }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePass }
          ]
        },
        loading: false,
        showDialog: false
      }
    },
    mounted() {
      $('.login-container').particleground({
          dotColor: '#5cbdaa',
          lineColor: '#5cbdaa'
      });
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
              this.$Message.success('登录成功');

              this.loading = false;
              this.$router.push({ path: '/' });
            }).catch(err => {
              this.$message.error(err);
              this.loading = false;
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      afterQRScan() {
        // const hash = window.location.hash.slice(1);
        // const hashObj = getQueryObject(hash);
        // const originUrl = window.location.origin;
        // history.replaceState({}, '', originUrl);
        // const codeMap = {
        //   wechat: 'code',
        //   tencent: 'code'
        // };
        // const codeName = hashObj[codeMap[this.auth_type]];
        // if (!codeName) {
        // } else {
        //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
        //     this.$router.push({ path: '/' });
        //   });
        // }
      }
    },
    init() {

    },
    destroyed() {
      // window.removeEventListener('hashchange', this.afterQRScan);
    }
  }

  </script>
  <style>
  .login-container a {
    color: #0078de;
  }

  #canvascontainer {
    position: absolute;
    top: 0px;
  }

  .wz-input-group-prepend {
    background-color: #141a48;
    border: 1px solid #2d8cf0;
    border-right: none;
    color: #2d8cf0;
  }
  </style>
  <style rel="stylesheet/scss" lang="scss">
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
  }

  .login-container {
    height: 100vh;
    background-color: #141a48;
    margin:0;
    overflow: hidden;

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 1px solid #2d8cf0;
      -webkit-appearance: none;
      border-radius: 3px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }

    .title {
      font-size: 26px;
      font-weight: 400;
      color: #eeeeee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .login-form {
      position: absolute;
      top:15%;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .forget-pwd {
      color: #fff;
    }
  }
  </style>