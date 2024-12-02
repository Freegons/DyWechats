<template>
  <div class="Demo">
    <img src="/assets/loginImage.png" />
    <div class="loginA">
      <div class="login">
        <v-card class="elevation-0" style="width: 300px; height: 300px">
          <v-card-title class="text-h5 justify-center">登录</v-card-title>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @keyup.enter="onSubmit"
          >
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
              :loading="loading"
              :disabled="!valid || loading"
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

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useApi } from "~/composables/useApi";

const toast = useToast();
const api = useApi();

definePageMeta({
  layout: "blank",
});

const loading = ref(false);
const username = ref("");
const password = ref("");
const valid = ref(false);
const form = ref(null);

const usernameRules = [
  (v) => !!v || "用户名不能为空",
  (v) => (v && v.length >= 3) || "用户名至少 3 个字符",
];

const passwordRules = [
  (v) => !!v || "密码不能为空",
  (v) => (v && v.length >= 6) || "密码至少 6 个字符",
];

const onSubmit = async () => {
  if (!form.value.validate()) {
    return;
  }

  loading.value = true;
  try {
    const response = await api.login(username.value, password.value);

    console.log("服务器响应:", response.data);

    if (response.data.status === "success") {
      toast.success("登录成功！");
      username.value = "";
      password.value = "";
      form.value.resetValidation();
      await navigateTo("/user");
    } else {
      toast.error(response.data.message || "登录失败");
    }
  } catch (error) {
    console.error("完整错误信息:", error);
    console.error("错误响应:", error.response?.data);
    toast.error(error.response?.data?.message || "请求失败");
  } finally {
    loading.value = false;
  }
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
