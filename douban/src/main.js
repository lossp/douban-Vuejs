// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch:{
    "$router":"checkLogin"
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      //cookie操作方法在源码里有或者参考网上的即可
      if(!this.getCookie('session')){
        //如果没有登录状态则跳转到登录页
        this.$router.push('/login');
      }else{
        //否则跳转到登录后的页面
        this.$router.push('/user_info');
      }
    }
  },
  created(){
    this.checkLogin();
  }
})
