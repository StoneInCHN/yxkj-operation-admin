<template>
<Card class="container">
<div class="h6">优享空间：香年广场T3-1 编号：1000000001</div>
<div class="data-container">
    <div class="section-title">基本数据</div>
    <div>
        <div class="base-data">
            <div class="base-data-title">总用户数</div>
            <div class="base-data-value ">1888</div>
        </div>
        <div class="base-data">
            <div class="base-data-title">总订单数</div>
            <div class="base-data-value ">1888</div>
        </div>
         <div class="base-data">
            <div class="base-data-title">总销售额</div>
            <div class="base-data-value ">1888</div>
        </div>
         <div class="base-data">
            <div class="base-data-title">总用户数</div>
            <div class="base-data-value ">1888</div>
        </div>
         <div class="base-data">
            <div class="base-data-title">总用户数</div>
            <div class="base-data-value ">1888</div>
        </div>
         <div class="base-data">
            <div class="base-data-title">总用户数</div>
            <div class="base-data-value ">1888</div>
        </div>
        <div class="">
            <div class="base-data-title">
                <Dropdown>
                    <a href="javascript:void(0)">
                        重复购买率
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem >&nbsp;&nbsp; 复购1次以上&nbsp;&nbsp;</DropdownItem>
                        <DropdownItem>  &nbsp;&nbsp; 复购1次以上 &nbsp;&nbsp;  </DropdownItem>
                        <DropdownItem> &nbsp;&nbsp;  复购1次以上 &nbsp;&nbsp;  </DropdownItem>
                        <Dropdown placement="right-start" style="text-align: center;">
                         复购 <Input  size="small" placeholder="次数" style="width:60px"></Input> 次以上
                        </Dropdown>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="base-data-value ">1888</div>
        </div>
    </div>
</div>
<div class="data-container" style="clear: left">
    <div class="section-title">商品销售量</div>
     <Table :columns="columns1" :data="data1"></Table>
</div>
<div>
  <Row>
        <Col span="12">
            <div>
                <div class="section-title">最热商品</div>
                <Table :columns="mostPopularGoodsColumns" :data="mostPopularGoodsDatas"></Table>
            </div>
        </Col>
        <Col span="12">
            <div>
                <div class="section-title">最冷商品</div>
                <Table :columns="mostPopularGoodsColumns" :data="mostPopularGoodsDatas"></Table>
            </div>
        </Col>
    </Row>
</div>
 <div class="animated fadeIn">
    <div class="card-columns cols-2" >
      <line-chart/>
    </div>
  </div>
</Card>
</template>
<script>
import LineChart from '../charts/Line'
export default {
       data () {
            return {
                columns1: [
                    {
                        title: '总用户数',
                        key: 'total_users'
                    },
                    {
                        title: '总订单数',
                        key: 'total_orders'
                    },
                    {
                        title: '总销售额',
                        key: 'total_sales'
                    },
                       {
                        title: '总成本',
                        key: 'total_cost'
                    },
                    {
                        title: '毛利率',
                        key: 'total_per'
                    },
                    {
                        title: '平均客单价',
                        key: 'total_per_cost'
                    }
                ],
                data1: [
                    {
                        total_users: '1231',
                        total_orders: 12,
                        total_sales: '123',
                        total_cost: '123123',
                        total_per: 18,
                        total_per_cost: '123123',
                        tottal_repeats: '40%'
                    },
                ],
                 mostPopularGoodsColumns: [
                    {
                        title: '排序',
                        key: 'order'
                    },
                    {
                        title: '商品名',
                        key: 'goodsName'
                    },
                    {
                        title: '销量',
                        key: 'sales'
                    }
                ],
                mostPopularGoodsDatas: [
                    {
                        order: 1,
                        goodsName: '康师傅红烧牛肉面250ml',
                        sales: 9000
                    },
                     {
                        order: 1,
                        goodsName: '康师傅红烧牛肉面250ml',
                        sales: 9000
                    },
                     {
                        order: 1,
                        goodsName: '康师傅红烧牛肉面250ml',
                        sales: 9000
                    },
                     {
                        order: 1,
                        goodsName: '康师傅红烧牛肉面250ml',
                        sales: 9000
                    }
                ]
            }
        },
    components: {
        LineChart
    }
}
</script>

<style lang="css" scoped>
.section-title {
    background:lightgray;
}
.test {
    background:red;

}
.single-table-row {
    height: 110px;
    background:red;
 
}
.data-container {
    margin-top: 10px;
    margin-bottom: 10px;
}

.base-data {
    float: left;
    width: 15%;
    text-align: center;
}
.base-data-title {
    background: #f8f8f9;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 10px;
    font-family: arial;
    font-size: 12px;
    font-weight: bolder;
    border-bottom-width: 0.5px;
	border-bottom-style: solid;
	border-bottom-color: #e5e5e5;
}
.base-data-value {
     background: #ffffff;
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 10px;

    border-bottom-width: 0.5px;
	border-bottom-style: solid;
	border-bottom-color: #e5e5e5;
}
</style>

