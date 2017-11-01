<template>
<Card>
	<Table border ref="selection" :columns="columns4" :data="data1" ></Table>
    <Page :current="2" :total="50" show-elevator></Page>
    <div class="clearfix"></div>
</Card>
</template>
<script>
    export default {
            data () {
            return {
                columns4: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '日期',
                        key: 'num'
                    },
                    {
                        title: '时间',
                        key: 'name'
                    },
                    {
                        title: '优享空间',
                        key: 'opne_up_time'
                    },
                    {
                        title: '货柜号',
                        key: 'containers_count'
                    },
                    {
                        title: '货道号',
                        key: 'containers_count'
                    },
                    {
                        title: '发生情景',
                        key: 'containers_count'
                    },
                    {
                        title: '异常原因',
                        key: 'containers_count'
                    }
                ],
                data1: [
                    {
                        num: '10000000001',
                        name: '统一冰红茶',
                        opne_up_time: '￥4.00',
                        containers_count: '已退款'
                    },
                    {
                        num: '10000000001',
                        name: '统一冰红茶',
                        opne_up_time: '￥4.00',
                        containers_count: '已退款'
                    }
                ]
            }
        }
    }
</script>

<style >

</style>