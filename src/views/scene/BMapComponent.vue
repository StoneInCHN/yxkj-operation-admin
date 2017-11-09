<template>
  <Modal title="百度地图" v-model="mapData.showMap" width="1000" :mask-closable="false">
      <Form slot="footer">
      <FormItem label="详细地址">
        <Row>
          <Col span="8">
              <Input v-model="mapData.address" readonly></Input>
          </Col>
          <Col span="4" style="float:right">
              <Button type="primary" @click="closeMap"> 确定 </Button>
          </Col>          
        </Row>       
      </FormItem>

      </Form>
      <div id="allmap" v-bind:style="mapStyle"></div>
   </Modal>
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
      mapData: Object,  
      mapHeight:{
        type:Number,
        default:600
      },
      longitude:{
        type:Number,
        default:116.404
      },
      // 纬度
      latitude:{
        type:Number,
        default:39.915
      },
    },
    methods: {
        closeMap(){
          this.mapData.showMap = false;
        }
    },  
    mounted(){
            var _this = this;
            var map = new BMap.Map("allmap");    
            var point = new BMap.Point(_this.mapData.longitude,_this.mapData.latitude);
            var marker = new BMap.Marker(point);
            var geocoder = new BMap.Geocoder();

            map.centerAndZoom(point,12);
            map.addOverlay(marker);            
            map.enableScrollWheelZoom(true);
            marker.enableDragging();
            
            map.addEventListener("click", function(e){
                if(marker){
                  map.removeOverlay(marker);
                }
                _this.mapData.longitude = e.point.lng;
                _this.mapData.latitude = e.point.lat;
                point = new BMap.Point(e.point.lng, e.point.lat);
                marker = new BMap.Marker(point);
                map.addOverlay(marker); 
                marker.enableDragging(); 
                marker.addEventListener("dragend", function showInfo(){
                    var p = marker.getPosition();
                    _this.mapData.longitude = p.lng;
                    _this.mapData.latitude = p.lat;
                    point = new BMap.Point(_this.mapData.longitude,_this.mapData.latitude);
                    geocoder.getLocation(point,function(rs){  
                    var addComp = rs.addressComponents;   
                    _this.mapData.address = addComp.province+addComp.city+addComp.district+addComp.street+addComp.streetNumber;
                  }); 
               });   
               geocoder.getLocation(point,function(rs){  
                var addComp = rs.addressComponents;   
                _this.mapData.address = addComp.province+addComp.city+addComp.district+addComp.street+addComp.streetNumber;
               });   
            });
    }
  }
</script>
 
<style scoped>
 
</style>