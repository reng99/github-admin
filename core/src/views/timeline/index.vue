<template>
	<div id="timeline">
		<div ref="autoHeight">
			<el-steps direction="vertical" :active="eventTotal">
				<template v-for="(item , index) in events">
					<div class="scope">{{item.scope}}</div>
					<el-step :title="item.title" :description="item.desc"></el-step>
				</template>
			</el-steps>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'timeline',
		data () {
			return {
				fixedHeight: 80, // 固定一列的高度
				eventTotal: 0,
				events:[
					{
						id: 1,
						title: '明确需求', //  title不能超过6个字
						scope: '2018.05.06 - 2018.05.12',
						desc: '使用element-ui并结合vue搭建一个后台的项目，然后调用github的接口获取数据，再使用d3js进行数据的图形展示。【注意⚠️】重点是d3，本仓库主要目的是学习使用d3js，为可视化界面打下基础。'
					},
					{
						id: 2,
						title: '项目搭建',
						scope: '2018.05.13 - 2018.05.19',
						desc: '在vue-cli的脚手架上搭建项目，使用到vue-router和vuex，然后就是使用less预处理器编写样式，axios处理http，d3js的引入等。各个文件的存放请参考https://github.com/reng99/github-admin'
					},
					{
						id: 3,
						title: 'd3js的学习',
						scope: '2018.05.20 - 2018.05.26',
						desc: '工作之余学习，有待完善...'
					}
				]
			}
		},
		created() {
			var vm = this;
			vm.eventTotal = vm.events.length;
			// 自动处理高度
			vm.$nextTick(()=>{
				vm.$refs.autoHeight.style.height = vm.fixedHeight * vm.eventTotal + 'px';
			});
		},
		methods: {

		},
		components: {

		}
	}
</script>

<style scoped lang="less">
#timeline {
	padding-top: 18px;
	.scope{
		width: 160px;
		// padding-left: 30px;
		// font-weight: bold;
		// background: red;
		height: 12px;
		font-size: 12px;
		line-height: 12px;
		position: relative;
		margin-left: 160px;
		margin-bottom: -18px;
		color: #999;
	}
}
</style>
