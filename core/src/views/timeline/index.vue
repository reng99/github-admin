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
						desc: '工作之余学习D3JS'
					},
					{
						id: 4,
						title: 'd3js的实践',
						scope: '2018.05.27 - 2018.06.02',
						desc: 'D3JS相关demo的制作'
					},
					{
						id: 5,
						title: '渲染数据',
						scope: '2018.06.03 - 2018.06.09',
						desc: '调用github的接口，通过d3js进行相关数据的渲染到页面上'
					},
					{
						id: 6,
						title: '有事暂停',
						scope: '2018.06.10 - 2018.06.16',
						desc: '-'
					},
					{
						id: 7,
						title: '有事暂停',
						scope: '2018.06.17 - 2018.06.23',
						desc: '-'
					},
					{
						id: 8,
						title: '有事暂停',
						scope: '2018.06.24 - 2018.06.30',
						desc: '-'
					},
					{
						id: 9,
						title: '有事暂停',
						scope: '2018.07.01 - 2018.07.06',
						desc: '-'
					},
					{
						id: 10,
						title: '添加demo',
						scope: '2018.07.07 - 2018.07.13',
						desc: '添加相关的demo，本仓库完结，后期有相关d3的demo再添加；特别是结合github-api的demo。总结：d3js的难点是要读懂相关的api要做什么事情，然后进行相关的调用...'
					},
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
