<template>
<div>
    <Tabs value="name1">
        <TabPane label="香年广场T2" name="name1">
        <p>货柜编号：A</p>
        <Table border ref="selection" :columns="columns4" :data="data1" ></Table>
        <Page :current="2" :total="50" show-elevator></Page>
        </TabPane>
    </Tabs>
</div>
</template>

<script>
export default {
    data () {
        return {
             

        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
