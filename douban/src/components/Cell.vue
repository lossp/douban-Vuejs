<template>
    <div class="cell">
        <div class="cell-title">
            <slot name="icon"></slot>{{title}}
        </div>
        <div class="cell-right">
            <slot name="cell-right"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            title:{
                type: String,
                default:''
            },
            icon:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    .cell{
        position: relative;
        padding: 10px 5px 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:before{
            content:'';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            background: #eee;
            transform:scaleY(0.5);
        }
        >.cell-title{
            font-size: 15px;
        }
        img{
            width: 25px;
            height: 25px;
            position:relative;
            bottom: -2px;
        }

    }
</style>