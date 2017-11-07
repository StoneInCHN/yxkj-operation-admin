<template>
    <div>
    <Form :label-width="100" label-position="right" :rules="ruleValid" :model="scene" ref="dataInfo">
        <Row style="margin-bottom:20px">
            <Col span="6">
                <FormItem label="" prop="id">
                    <Select v-model="scene.id" style="width:90%" @on-change="selectScene">
                        <Option v-for="item in allScene" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="1">分润点</Col>
            <Col span="4">
                <FormItem label="" prop="point">
                    <Input v-model="scene.point"></Input>
                </FormItem>
            </Col>
            <Col span="1" style="font-size:16px;padding: 0 5px"> % </Col>
            <Col span="3"><Button type="ghost" icon="minus" @click="remove(scene.id)">删除</Button></Col>
        </Row>
    </Form>
    </div>    
</template>
<script>
    import { percent } from 'utils/validate';
    export default {
        props: {
            scene: Object,  
            scenes: Array,
            allScene: Array,
        },
        data () {
            const validPercent = (rule, value, callback) => {
              if (!percent(value)) {
                callback(new Error('分润点：0~100之间正数！'));
              } else {
                callback();
              }
            };
            return {
                index:1,
                ruleValid: {
                    id: [
                        { required: true, message: '请选择有限空间', trigger: 'blur' }
                    ],
                    point: [
                        { required: true, message: '分润点不能为空！', trigger: 'blur' },
                        { required: true, trigger: 'blur', validator: validPercent }         
                    ],
                },
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
            selectScene(selection){
                //console.info(this.scenes);
                //不能选择重复的有限空间
            }
        },
        created () {
            //console.info(this.scenes);
            //console.info(this.allScene);
        },
    }
</script>
<style scoped>
.scene{
    cursor: pointer;
    font-weight: bold;
}
  
</style>