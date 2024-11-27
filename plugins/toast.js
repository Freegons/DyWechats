import Vue from 'vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"; // 引入样式

Vue.use(Toast, {
  // 配置选项
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
})
