import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)

export default new Vuex.store({
    state:{
        domain:'http://test.example.com', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
        userInfo: { //保存用户信息
          nick: null,
          ulevel: null,
          uid: null,
          portrait: null
        }
    }
})