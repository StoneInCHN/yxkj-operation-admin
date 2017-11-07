<template>
    <div class="demo-upload">
        <img :src="url" @click="handleView">

         <Modal title="查看图片" v-model="visible"  class="show-modal" cancel-text="">
            <img :src="url" v-if="visible" style="width: 100%">
         </Modal>
    </div>
</template>
<script>
    export default {
        props: ['url'],
        data () {
            return {
                    visible:false,
            }
        },
        methods: {
            handleView () {
                this.visible = true;
            },
        }

    }
</script>
<style scoped>
    .show-modal button{
        display: none;
    }
    .demo-upload{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 2px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-top: 5px;
    }
    .demo-upload img{
        width: 100%;
        height: 100%;
        vertical-align: top;
        cursor: pointer;
    }
  
</style>