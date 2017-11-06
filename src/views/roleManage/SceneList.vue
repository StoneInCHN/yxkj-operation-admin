<template>
    <div>
        <p v-for="(scene, index) in scenes">
        <span class="scene" @click="click(scene.id)">{{index+1}} - {{scene.name}}</span>
        </p>
    </div>    
</template>
<script>
    export default {
        props: {
            scenes: Array
        },
        data () {
            return {
                index:1
            }
        },
        methods: {
            click (id) {
                alert("跳转到优享空间"+id);
            },
        },
        created () {
            console.info(this.index);
        },
    }
</script>
<style scoped>
.scene{
    cursor: pointer;
    font-weight: bold;
}
  
</style>