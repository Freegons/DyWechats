<template>
  <div class="Demo">
    <!-- <h1>deng</h1> -->
      <img src="/assets/loginImage.png" />
      <div class="loginA">
        <div class="login">
    <v-card class="elevation-0" style="width: 300px; height: 300px;">
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

        <v-btn
          color="primary"
          block
          :disabled="!valid"
          @click="onSubmit"
        >
          登录
        </v-btn>
      </v-form>
    </v-card>
  </div>
      </div>
      
  </div>
</template>

<script>
definePageMeta({
  layout: "blank",
});

export default {
  data() {
    return {
      username: '',
      password: '',
      valid: false,
      usernameRules: [
        v => !!v || '用户名不能为空',
        v => (v && v.length >= 3) || '用户名至少 3 个字符',
      ],
      passwordRules: [
        v => !!v || '密码不能为空',
        v => (v && v.length >= 6) || '密码至少 6 个字符',
      ],
    };
  },
  methods: {
    async onSubmit() {
    try {
      const response = await this.$http.post('https://yjlian.cn/api/login.php', {
        username: this.username,
        password: this.password,
      });
      // 登录成功后的处理
      console.log('登录成功:', response.data);
    } catch (error) {
      // 登录失败后的处理
      console.error('登录失败:', error);
      this.$toast.error('用户名或密码错误');
    }
  },
  },
};
</script>

<style>
.Demo {
  width: 700px;
  height: 400px;
  background-color: white;
  margin:20vh auto;
  display: flex;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  overflow: hidden;
}

.Demo img {
  height: 100%;
  width: auto;
}
.loginA{
  display: flex;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
}
.login {
  width: 300px; /* 更小的宽度 */
  height: 300px; /* 更小的高度 */
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px; /* 圆角 */
  /* 移除阴影 */
  box-shadow: none;
}

.v-container {
  height: 100vh; /* 使容器占满整个视口高度 */
}

/* 调整 v-card 填充整个容器 */
.v-card {
  /* margin-top: 10px; */
  width: 100%;
  height: 100%;
  /* 移除卡片阴影 */
  /* box-shadow: none; */
}

/* 为按钮和输入框设置间距 */
.v-btn {
  margin-top: 10px;
}
</style>
