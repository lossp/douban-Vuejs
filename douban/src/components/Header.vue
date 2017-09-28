<template>
    <header class="head" :class="{'is-bg':bg, 'is-fixed':fixed}">
        <div class="header-button on-left">
            <slot name="left"></slot>
        </div>

        <h1 class="header-title" v-text="title"></h1>
        <div class="header-button on-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    export default{
        props:{
            title:{
                type: String,
                default:''
            },
            bg:{
                type:Boolean,
                default:false
            },
            fixed:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss">

    header{
        display: flex;
        align-items:center;
        height: 48px;
        padding: 0 10px;
        background:#fff;
        color:#42bd56;
        >.header-button{
            width: 80px;
            align-items: stretch;
            &.on-right{
                text-align: right;
            }
            &.on-left{
                text-align: left;
            }
            a{
                text-decoration: none;
                color: #42bd56;
            }
        }
        >.header-title{
            flex: 1;
            text-align: center;
            font-size: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        &.is-bg{
            background: rgb(73,73,73);
            color: #fff;
            a{
                color: #fff;
            }
            .header-title{
                color: #fff;
            }
        }
        &.is-fixed{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 8;
        }
    }
</style>