<template>
	<div id="welcome">
		<p>{{username}}</p>
		<h3>welcome to this platform</h3>
	</div>
</template>
<script>
	// import apiPath from '@/service/apiPath'
	// import * as d3 from 'd3'
	export default {
		data() {
			return {
				username: ''
			}
		},
		methods: {

		},
		created(){
			this.username = JSON.parse(sessionStorage.getItem('user'));
			// let vm = this;
			// let username = JSON.parse(sessionStorage.getItem('user'));
			// vm.$fetch('https://api.github.com/search/repositories?q=language:JavaScript&sort=stars&order=desc')
			// 	.then(data => {
			// 		let i = 0;
			// 		data.items.forEach(item => {
			// 			console.log('第'+(++i)+'名：'+item.name+' - '+item.stargazers_count);
			// 		})
			// 	});
			// this.$nextTick(function(){
			// 	d3.select("body").transition()
    		// 		.styleTween("color", function() { return d3.interpolate("green", "red"); });
			// });
		}
	}
</script>
<style lang='less' scoped>
	#welcome{
		text-align: center;
		color: #409EFF;
		p{
			font-size: 16px;
			font-weight: bolder;
		}
	}
</style>