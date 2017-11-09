<template>
<!--   <div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>
  <div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div> -->
  <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script>
  export default {
    data:function(){
      return{
        mapStyle:{
          width:'100%',
          height:this.mapHeight +'px'
        }
      }
    },
    props:{
      // 地图在该视图上的高度
      mapHeight:{
        type:Number,
        default:500
      },
      // 经度
      longitude:{
        type:Number,
        default:116.404
      },
      // 纬度
      latitude:{
        type:Number,
        default:39.915
      },
      description:{
        type:String,
        default:'天安门'
      }
    },
    mounted(){
      var map =new BMap.Map("allmap");
      debugger;
      console.info(this.longitude);
  // 创建Map实例
  map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15);  // 初始化地图,设置中心点坐标和地图级别
  // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
  // map.setCurrentCity("XXXX");          // 设置地图显示的城市 此项是必须设置的
  // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放



      // var point =new BMap.Point(this.longitude,this.latitude);




      // var marker =new BMap.Marker(point);
      // map.addOverlay(marker);
      // map.centerAndZoom(point,15);
      // // 信息窗的配置信息
      // var opts ={
      //   width :250,
      //   height:75,
      //   title :"地址：",
      // }
      // var infoWindow =new BMap.InfoWindow(this.description, opts);// 创建信息窗口对象
      // marker.addEventListener("click",function(){
      //   map.openInfoWindow(infoWindow,point);
      // });
      // map.enableScrollWheelZoom(true);
      // map.openInfoWindow(infoWindow,point);//开启信息窗口
    }
  }
</script>
 
<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>