<template>
    <div>
                    <Row class="expand-row">
                        <Col span="6">
                            <span class="expand-key">优享空间ID：</span>
                            <span class="expand-value">{{ row.id }}</span>
                        </Col>
                        <Col span="6">
                            <span class="expand-key">优享空间编号：</span>
                            <span class="expand-value">{{ row.sn }}</span>
                        </Col>   
                        <Col span="6">
                            <span class="expand-key">优享空间名称：</span>
                            <span class="expand-value">{{ row.name }}</span>
                        </Col>
                        <Col span="6">
                            <span class="expand-key">开业时间：</span>
                            <span class="expand-value">{{ openTimeStr }}</span>
                        </Col>                                              
                    </Row>        
                    <Row class="expand-row">
                        <Col span="6">
                            <span class="expand-key">所在地区：</span>
                            <span class="expand-value">{{ row.area.fullName }}</span>
                        </Col>
                        <Col span="6">
                            <span class="expand-key">详细地址：</span>
                            <span class="expand-value">{{ row.address }}</span>
                        </Col>   
                        <Col span="6">
                            <span class="expand-key">中控IMEI：</span>
                            <span class="expand-value">{{ row.central.sn }}</span>
                        </Col>
                        <Col span="6">
                            <span class="expand-key">货柜状态：</span>
                            <span class="expand-value">{{ status }}</span>
                        </Col>                                              
                    </Row>    
                    <Row class="expand-last-row">
                        <Col span="6">
                            <span class="expand-key">货柜音量：</span>
                            <span class="expand-value">{{ row.central.volume }}</span>
                        </Col>
                        <Col span="6">
                            <span class="expand-key">重启间隔天数：</span>
                            <span class="expand-value">{{ row.central.rebootDay }}</span>
                        </Col>   
                        <Col span="6">
                            <span class="expand-key">默认重启时间：</span>
                            <span class="expand-value">{{ row.central.rebootTime }}</span>
                        </Col>
                        <Col span="6">
                            <span class="expand-key">是否含微仓：</span>
                            <span class="expand-value">{{ hasStoreStr }}</span>
                        </Col>                                              
                    </Row>           
    </div>
</template>
<script>
    import { parseTime } from 'utils/index';
    export default {
        data(){
            return {
                openTimeStr:'',
                hasStoreStr:'',
                status:'',
            }
        },
        props: {
            row: Object
        },
        methods: {},
        mounted(){
            this.openTimeStr = parseTime(this.row.openTime);
            if (this.row.hasStore) {
                this.hasStoreStr = "是"
            }else{
                this.hasStoreStr = "否"
            }
            if (this.row.central.status == 'ACITVE') {
                this.status = "允许服务"
            }else{
                this.status = "停止服务"
            }
            
        }

    }
</script>
<style scoped>
    .expand-row{
        margin-bottom: 15px;
        margin-left:60px;
    }
    .expand-key{
        font-weight: bold;
    }
    .expand-last-row{
        margin-left:60px;
    }
  
</style>