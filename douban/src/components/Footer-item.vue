<template>
    <a class="item" :class="{active: isActive}" @click="goToRouter">
        <span class="item-icon"><slot name="icon-normal"></slot></span>
        <span class="item-text"><slot></slot></span>
    </a>

</template>


<script>
    import '../../static/javascripts/iconfont.js'
    export default{
        props:{
            id:{
                type: String
            },
            isRouter:{
                type: Boolean,
                default:false
            }
        },
        methods:{
            goToRouter(){
                this.$parent.$emit('input',this.id)
                if(this.isRouter){
                    this.$router.push(this.id)
                    console.log(this.$router)
                }
            }
        },
        computed:{
            isActive(){
                
                if(this.$parent.value === this.id){
                    return true;
                }
            }
        }
    }
</script>
<style lang="scss">
    .item{
        flex: 1;
        text-align: center;
        justify-content: center;
        >.item-icon{
            display:block;
            padding: 2px;
            font-size: 16px;
        }
        >.item-text{
            display: block;
            font-size: 8px;
            color: #949494;
        }
    }
    .active{
        background: rgb(227,227,227);
    }
</style>