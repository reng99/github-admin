<template>
	<div class="reng-container">
		<el-table
		:data="tableData"
		border
		style="width: 100%">
			<el-table-column
			prop="serialNumber"
			label="#"
			width="180">
			</el-table-column>
			<el-table-column
			prop="key"
			label="字段"
			width="180">
			</el-table-column>
			<el-table-column
			prop="value"
			label="值（备注: 空值使用'-'表示）">
			<template slot-scope="scope">{{scope.row.value | filter-empty}}</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script type="text/javascript">
	import apiPath from '@/service/apiPath'
	export default {
		data(){
			return {
				tableData: [
					// {
					// 	serialNumber: 1,
					// 	key: 'name',
					// 	value: 'reng99'
					// }
				]
			}
		},
		created(){
			var vm = this;
			let username = JSON.parse(sessionStorage.getItem('user'));
			vm.$fetch(apiPath.USER_INFO+'/'+username)
				.then(data => {
					let keys = Object.keys(data);
					keys.forEach((key , index) => {
						vm.tableData.push({
							serialNumber: index,
							key: key,
							value: data[key]
						})
					});

					// below is the same effect
					// let i = 0;
					// for(let key in data){
					// 	vm.tableData.push({
					// 		serialNumber: ++i,
					// 		key: key,
					// 		value: data[key]
					// 	})
					// }
				});
		}
	}
</script>
<style lang="less" scoped>
	
</style>