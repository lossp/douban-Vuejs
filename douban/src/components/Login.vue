// <template>
//     <div class="login">
//         <div class="row">
//             <label>用户名</label>
//             <input type="text" name="user" v-model="account">
//         </div>
//         <div class="row">
//             <label>密 码 </label>   
//             <input type="password" name="password" v-model="password">
//         </div>
//         <button @click="Login">登陆</button>
//     </div>
// </template>

// <script>
//     import ElementUI from 'element-ui'
//     export default{
//         name:"register",
//         data(){
//             var validateUser = (rule, value, cb)=>{
//                 var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g;
//                 if(value === ''){
//                     cb(new Error('请输入用户名'))
//                 }else if(!pattern.test(value)){
//                     cb(new Error('请输入3-10个字母/汉字/数字/下划线'))
//                 }else{
//                     cb()
//                 }
//             }

//             var validatePwd = (rule, value, cb)=>{
//                 var pattern = /^\S{3,20}$/g;
//                 if(value === ''){
//                     cb(new Error('请输入密码'))
//                 }else if(!pattern.test(value)){
//                     cb(new Error('请输入3-20个非空白字符'))
//                 }else{
//                     if (this.registerForm.checkPwd !== '') {
//                         this.$refs.registerForm.validateField('checkPwd')
//                     }
//                     cb()
//                 }
//             }

//             var validateCheckPwd = (rule, value, cb)=>{
//                 if (value === '') {
//                     cb(new Error('请再次输入密码'))
//                 } else if (value !== this.registerForm.pwd) {
//                     cb(new Error('两次输入密码不一致!'))
//                 } else {
//                     cb()
//                 }
//             }
//             return {
//                 registerForm:{
//                     userName:'',
//                     pwd:'',
//                     checkPwd:''
//                 },
//                 registerRule:{
//                     userName:[
//                         {validator:validateUser, trigger:'blur'}
//                     ],
//                     pwd:[
//                         {validator:validatePwd, trigger:'blur'}
//                     ],
//                     checkPwd:[
//                         {validator: validateCheckPwd, trigger:'blur'}
//                     ]
//                 }
//             }
//         },
//         methods:{
//             submitForm(formName){
//                 this.$refs[formName].validate((valid)=>{
//                     if(valid){
                        
//                     }else{
//                         return false
//                     }
//                 })
//             }
//         }
//     }
// </script>

// <style lang="scss">
//     .login{
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         .row{
//             margin-top:20px;
//         }
//         button{
//             margin-top: 24px;
//             padding: 4px;
//             border: 1px solid #eee;
//         }
//     }

//     input{
//         border: 1px solid #eee;
//         box-sizing: border-box;
//         text-align:center;
//         font-size:1.4em;
//         height:1.8em;
//         border-radius:4px;
//         border:1px solid #c8cccf;
//         color:#6a6f77;
//         -web-kit-appearance:none;
//         -moz-appearance: none;
//         display:block;
//         outline:0;
//         padding:0 1em;
//         text-decoration:none;
//         width:100%;
//     }
// </style>
