<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <!-- <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a> -->
        </Topbar>
        <div id="container"></div>

    </div>
</template>

<script>
    import Topbar from '../../components/Header'

    export default{
        name:"register",
        data(){
            var validateUser = (rule, value, cb)=>{
                var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g;
                if(value === ''){
                    cb(new Error('请输入用户名'))
                }else if(!pattern.test(value)){
                    cb(new Error('请输入3-10个字母/汉字/数字/下划线'))
                }else{
                    cb()
                }
            }

            var validatePwd = (rule, value, cb)=>{
                var pattern = /^\S{3,20}$/g;
                if(value === ''){
                    cb(new Error('请输入密码'))
                }else if(!pattern.test(value)){
                    cb(new Error('请输入3-20个非空白字符'))
                }else{
                    if (this.registerForm.checkPwd !== '') {
                        this.$refs.registerForm.validateField('checkPwd')
                    }
                    cb()
                }
            }

            var validateCheckPwd = (rule, value, cb)=>{
                if (value === '') {
                    cb(new Error('请再次输入密码'))
                } else if (value !== this.registerForm.pwd) {
                    cb(new Error('两次输入密码不一致!'))
                } else {
                    cb()
                }
            }
            return {
                registerForm:{
                    userName:'',
                    pwd:'',
                    checkPwd:''
                },
                registerRule:{
                    userName:[
                        {validator:validateUser, trigger:'blur'}
                    ],
                    pwd:[
                        {validator:validatePwd, trigger:'blur'}
                    ],
                    checkPwd:[
                        {validator: validateCheckPwd, trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        Axios.post('http://localhost:3000/register', data)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.code === 0) {
                                this.$message({
                                    showClose: true,
                                    message: '注册成功',
                                    type: 'success'
                                })
                                router.push({name: 'Login'})
                            } else {
                                this.$message({
                                    showClose: true,
                                    message: '注册失败',
                                    type: 'error'
                                })
                            }
                        })
                    }else{
                        return false
                    }
                })
            }
        }
    }
</script>

<style lang="scss"> 
    #container{
        margin-top: 49px;
    }
</style>
