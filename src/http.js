import Vue from 'vue'
import axios from 'axios'
import QS from 'qs'

axios.defaults.baseURL ='http://localhost:3003/api' // 设置axios的基础请求路径
// axios.defaults.baseURL ='/api' // 设置axios的基础请求路径
axios.defaults.timeout = 2000; // 设置axios的请求时间

Vue.prototype.$http = axios;// 将axios添加到 Vue的原型，这样一切vue实例都可以使用该对象
Vue.prototype.qs = QS;