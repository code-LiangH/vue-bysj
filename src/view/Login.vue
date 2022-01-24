<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userPsd">
        <el-input type="password" v-model="ruleForm.userPsd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
      <el-button type="primary" @click="toreq">主要按钮</el-button>
  </div>
</template>

<script>
import { reqLogin } from "../network/login"
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        userPsd: "",
      },
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        userPsd: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.ruleForm,'11111')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async toreq() {
        try {
           let result = await reqLogin()
           console.log(result)
        }
        catch(err) {
           console.log("出错了",err.status)
        }
     
    }
  },
};
</script>

<style lang="less">
.login {
  width: 400px;
  height: 400px;
  margin: 300px auto;
}
</style>
