<template>
	<div id="not-found">
		<el-alert
			type="error"
			title="404"
			description="抱歉，页面走失了 @～@"
			show-icon
			:closable = "false"
		>
		</el-alert>
		<router-link :to="{path: '/welcome'}" class="back">返回首页</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
	@import (reference) '../styles/public.less';
	#not-found{
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		background: #fff;
		border: 1px solid #eaeaea;
    	box-shadow: 0 0 25px #cac6c6;
		width: 400px;
		height: 160px;
		margin: 180px auto;
		.back{
			display: block;
			// color: #409EFF;
			text-align: center;
			width: 80px;
			margin: 0 auto;
			margin-top: 38px;
			// color: #e6a23c;
			// color: @testColor;
			color: #f56c6c;
			&:hover{
				text-decoration: underline;
			}
		}
	}
</style>