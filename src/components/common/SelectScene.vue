<template>
<Select placeholder="请选择优享空间"  v-model="valueId" filterable >
	<Option value="" :key="-1">请选择优享空间</Option>
    <Option v-for="item in sceneLists" :value="item.id" :key="item.id">{{ item.name }}</Option>
</Select>
</template>
<script>
import {dropDownList} from 'api/scene'
export default { 
	name: 'SelectScene',
	props: {
		sceneId: {
			type: [String, Number]
		}
	},
	data () {
		return {
			sceneLists: [],
			valueId: this.sceneId
		}
	},
	mounted () {
		this.init()
	},
	methods: {
		init () {
			dropDownList().then((res) => {
	            if (res.msg) {
	               this.sceneLists = res.msg
	           }
	        })
		}
	},
	watch: {
		valueId (newValue) {
			this.$emit('update:sceneId', newValue)
		}
	}
}
</script>