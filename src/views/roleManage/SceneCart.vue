<template>
    <div>
        <Row style="margin-bottom:10px">
            <Col span="6">
                <Select v-model="scene.id" style="width:90%">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
            <Col span="1">分润点</Col>
            <Col span="1"><Input v-model="scene.point"></Input></Col>
            <Col span="1" style="font-size:16px;padding: 0 5px"> % </Col>
            <Col span="3"><Button type="ghost" icon="minus" @click="remove(scene.id)">删除</Button></Col>
        </Row>
    </div>    
</template>
<script>
    export default {
        props: {
            scene: Object,
            scenes: Array
        },
        data () {
            return {
                index:1,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                ],
            }
        },
        methods: {
            click (id) {
                alert("跳转到优享空间"+id);
            },
            remove(id){
                for (var i = 0; i < this.scenes.length; i++) {
                    if (this.scenes[i].id == id) {
                        this.scenes.splice(i,1);
                        break;
                    }
                }
                console.info(this.scenes.length);
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