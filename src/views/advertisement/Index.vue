<template>
<div>
	<Card>
        <p slot="title">
           <Icon type="ios-search"></Icon><span>广告管理</span>
        </p>
        <Form label-width="100"  label-position="right">
          <Row>
            <Col span="6">
                <FormItem label="优享空间名称:">
                    <Select placeholder="请选择">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="优享空间编号" prop="name">
                    <Input  placeholder="请输入商品名称进行查询"></Input>
                  </FormItem>
              </Col>
              <Col span="6">
                <FormItem >
                  <Button type="primary" icon="ios-search">搜索</Button>
                </FormItem>
              </Col>
          </Row>
      </Form>
    </Card>
    <br/>
    <Card>
	    <div class="btn-groups">
	        <div class="float-left">
	          <Button type="info"   @click="adStore">广告库</Button>
	        </div>
	        <div class="float-right">
	          <Button type="info"   @click="adOperation">批量操作</Button>
	        </div>
	    </div>
	    <Table border ref="selection" :columns="columns4" :data="data1"  ></Table>
	    <Page :current="2" :total="50" show-elevator></Page>
	    <div class="clearfix"></div>
	</Card>
    <Modal
        v-model="vedioModal"
        title="vedio preview"
        width="800"
        @on-ok="ok"
        @on-cancel="cancel">
        <video :src="vedioSrc" controls="controls"></video>
    </Modal>
    <Modal
        v-model="imgModal"
        title="img preview"
        width="800"
        @on-ok="ok"
        @on-cancel="cancel">
        <img :src="imgSrc" alt="" style="width:760px">
    </Modal>
</div>
</template>
<script>
     export default {
          data () {
            return {
            	vedioModal: false,
            	imgModal: false,
            	imgSrc: '',
            	vedioSrc: '',
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '优享空间',
                        key: 'scene.name'
                    },
                    {
                        title: '编号',
                        key: 'scene.sn'
                    },
                    {
                        title: '视频（上）',
                        key: 'advA',
                        width: 150,
                        render: (h, params) =>{
                        	let _this = this
                        	return h('div', {
	                        		class: {
	                        			adItem:true
	                        		}
	                        	},[
                        		h('video',{
	                                attrs: {
	                                	src: params.row.advA,
	                                	controls: "controls"
	                                },
	                                style: {
	                                    width: '110px',
	                                    height: '80px'
	                                }
	                        	}),
	                        	h('div', {
	                        		class: {
	                        			adItemBtn: true
	                        		}
	                        		}, [
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('更换' +params.row.advC)
	                        	  		}
	                        	  	}
	                        	  },'更换'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log(_this)
	                        	  			_this.vedioPreview(params.row.advA)
	                        	  		}
	                        	  	}
	                        	  },'在线预览'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('添加')
	                        	  		}
	                        	  	}
	                        	  },'添加')
	                        	])
                        	])
                        }
                    },
                    {
                        title: '视频（下）',
                        key: 'advB',
                        width: 150,
                        render: (h, params) =>{
                        	let _this = this
                        	return h('div', {
	                        		class: {
	                        			adItem:true
	                        		}
	                        	},[
                        		h('video',{
	                                attrs: {
	                                	src: params.row.advB,
	                                	controls: "controls"
	                                },
	                                style: {
	                                    width: '160px',
	                                    height: '110px'
	                                }
	                        	}),
	                        	h('div', {
	                        		class: {
	                        			adItemBtn: true
	                        		}
	                        		}, [
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('在线预览')
	                        	  		}
	                        	  	}
	                        	  },'更换'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			_this.vedioPreview(params.row.advB)
	                        	  		}
	                        	  	}
	                        	  },'在线预览'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('添加')
	                        	  		}
	                        	  	}
	                        	  },'添加')
	                        	])
                        	])
                        }
                    },
                    {
                        title: '图片1',
                        key: 'advC',
                        width: 150,
                        render: (h, params) =>{
                        	let _this = this
                        	return h('div', {
	                        		class: {
	                        			adItem:true
	                        		}
	                        	},[
                        		h('img',{
	                                attrs: {
	                                	src: params.row.advC,
	                                	alt: params.row.scene.name
	                                },
	                                style: {
	                                    width: '160px',
	                                    height: '80px'
	                                }
	                        	}),
	                        	h('div', {
	                        		class: {
	                        			adItemBtn: true
	                        		}
	                        		}, [
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('更换')
	                        	  		}
	                        	  	}
	                        	  },'更换'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			_this.imgPreview(params.row.advC)
	                        	  		}
	                        	  	}
	                        	  },'在线预览'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('添加')
	                        	  		}
	                        	  	}
	                        	  },'添加')
	                        	])
                        	])
                        }
                    },
                    {
                        title: '图片2',
                        key: 'advD',
                        width: 150,
                        render: (h, params) =>{
                        	let _this = this
                        	return h('div', {
	                        		class: {
	                        			adItem:true
	                        		}
	                        	},[
                        		h('img',{
	                                attrs: {
	                                	src: params.row.advD,
	                                	alt: params.row.scene.name
	                                },
	                                style: {
	                                    width: '160px',
	                                    height: '80px'
	                                }
	                        	}),
	                        	h('div', {
	                        		class: {
	                        			adItemBtn: true
	                        		}
	                        		}, [
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('更换')
	                        	  		}
	                        	  	}
	                        	  },'更换'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			_this.imgPreview(params.row.advD)
	                        	  		}
	                        	  	}
	                        	  },'在线预览'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('添加')
	                        	  		}
	                        	  	}
	                        	  },'添加')
	                        	])
                        	])
                        }
                    },
                    {
                        title: '图片3',
                        key: 'advE',
                        width: 150,
                        render: (h, params) =>{
                        	let _this = this
                        	return h('div', {
	                        		class: {
	                        			adItem:true
	                        		}
	                        	},[
                        		h('img',{
	                                attrs: {
	                                	src: params.row.advE,
	                                	alt: params.row.scene.name
	                                },
	                                style: {
	                                    width: '160px',
	                                    height: '80px'
	                                }
	                        	}),
	                        	h('div', {
	                        		class: {
	                        			adItemBtn: true
	                        		}
	                        		}, [
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('更换' +params.row.advC)
	                        	  		}
	                        	  	}
	                        	  },'更换'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			_this.imgPreview(params.row.advE)
	                        	  		}
	                        	  	}
	                        	  },'在线预览'),
	                        	  h('a',{
	                        	  	on: {
	                        	  		click () {
	                        	  			console.log('添加')
	                        	  		}
	                        	  	}
	                        	  },'添加')
	                        	])
                        	])
                        }
                    }
                ],
                data1: [
                    {
                        id: '1',
                        scene: {
                        	name: '香年广场T3',
                        	sn: '1000000001'
                        },
                        advA: 'http://192.167.1.242:8082/yxkj/advertisement/machine/100A015D22C890E97C7BACBFDF61F1CC.mp4',
                        advB: 'http://192.167.1.242:8082/yxkj/advertisement/machine/100A015D22C890E97C7BACBFDF61F1CC.mp4',
                        advC: "http://mpic.tiankong.com/3a4/876/3a4876b6bd4604d7f562965a87db266b/640.jpg",
                        advD: "http://mpic.tiankong.com/814/c3f/814c3f9f72fc89cd53cc1c8e67735ffc/640.jpg",
                        advE: "http://mpic.tiankong.com/ab1/383/ab1383d6e9a92cc2ac69c7fd8f334820/640.jpg"
                    },
                    {
                        id: '2',
                        scene: {
                        	name: '香年广场T2',
                        	sn: '1000000002'
                        },
                        advA: 'http://192.167.1.242:8082/yxkj/advertisement/machine/100A015D22C890E97C7BACBFDF61F1CC.mp4',
                        advB: 'http://192.167.1.242:8082/yxkj/advertisement/machine/100A015D22C890E97C7BACBFDF61F1CC.mp4',
                        advC: "http://mpic.tiankong.com/3a4/876/3a4876b6bd4604d7f562965a87db266b/640.jpg",
                        advD: "http://mpic.tiankong.com/814/c3f/814c3f9f72fc89cd53cc1c8e67735ffc/640.jpg",
                        advE: "http://mpic.tiankong.com/ab1/383/ab1383d6e9a92cc2ac69c7fd8f334820/640.jpg"
                    }
                ]
            }
        },
        methods: {
            vedioPreview (src) {
                this.vedioModal = true
                this.vedioSrc = src
            },
            imgPreview (src) {
				this.imgModal = true
                this.imgSrc = src
            },
            adStore () {
            	this.$router.push("store")
            },
            adOperation () {
            	this.$router.push("operation")
            }

        }
    }
</script>

<style >
.adItem{
	height: 80px;
	overflow: hidden;
	position: relative;
}
.adItem video{
	width: 160px;
	height: 80px;
}
.adItem:hover .adItemBtn{
	top: 0;
}
.adItemBtn{
	position: absolute;
	left: 0;
	top:80px;
	opacity: 0.8;
	height:80px;
	background-color: #b1b2b3;
	width: 115px;
}
.adItemBtn a{
	display: block;
	text-align: center;
	color: #ffffff;
	margin-top: 5px;
}
</style>
