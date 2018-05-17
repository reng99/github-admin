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
				fixedHeight: 100, // 固定一列的高度
				eventTotal: 0,
				events:[
					{
						id: 1,
						title: '明确目标', //  title不能超过6个字
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 2,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 3,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 2,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 3,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 3,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 2,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
					},
					{
						id: 3,
						title: '明确目标',
						scope: '2018.05.01 - 2018.05.07',
						desc: '明确目标的描述'
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
