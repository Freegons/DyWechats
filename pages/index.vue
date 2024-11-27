<template>
  <div class="Demo">
    <img src="/assets/loginImage.png" />
    <div class="loginA">
      <div class="login">
        <v-card class="elevation-0" style="width: 300px; height: 300px">
          <v-card-title class="text-h5 justify-center">登录</v-card-title>

          <!-- Login Form -->
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              label="用户名"
              :rules="usernameRules"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="密码"
              type="password"
              :rules="passwordRules"
              required
            ></v-text-field>

            <v-btn color="primary" block :disabled="!valid" @click="onSubmit">
              登录
            </v-btn>
          </v-form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
definePageMeta({
  layout: "blank",
});

export default {
  data() {
    return {
      username: "",
      password: "",
      valid: false,
      usernameRules: [
        (v) => !!v || "用户名不能为空",
        (v) => (v && v.length >= 3) || "用户名至少 3 个字符",
      ],
      passwordRules: [
        (v) => !!v || "密码不能为空",
        (v) => (v && v.length >= 6) || "密码至少 6 个字符",
      ],
    };
  },
  methods: {
    onSubmit() {
      if (this.username && this.password) {
        axios
          .post("https://yjlian.cn/api/login.php", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            console.log("后端返回的数据:", response.data);
            if (response.data.status === "success") {
              // this.$toast("登录成功！");
              this.$router.push({ name: "user" });
            } else {
              console.error("登录失败:", response.data.message); // 打印错误信息
            }
          })
          .catch((error) => {
            console.error("请求失败，错误信息:", error); // 打印请求失败的错误信息
          });
      } else {
        console.log("用户名或密码为空");
      }
    },
  },
};
</script>

<style scoped>
.Demo {
  width: 700px;
  height: 400px;
  background-color: white;
  margin: 20vh auto;
  display: flex;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.Demo img {
  height: 100%;
  width: auto;
}

.loginA {
  display: flex;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
}

.login {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: none;
}

.v-container {
  height: 100vh;
}

.v-card {
  width: 100%;
  height: 100%;
}

.v-btn {
  margin-top: 10px;
}
</style>
