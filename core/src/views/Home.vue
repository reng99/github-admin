<template>
	<el-row class="container">
		<el-col class="header" :span="24">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'" @click.native="$router.push('/')">
				{{collapsed ? 'R':'RENG'}}
			</el-col>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">
					<img :src=avatarUrl /> {{username}}
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="$router.push('/profile')">个人主页</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col class="main" :span="24">
			<aside  :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!-- 导航菜单，未折叠 -->
				<el-menu router @open="handleopen" @close="handleclose" @select="handleselect" v-if="!collapsed" unique-opened>
					<template v-for="(item , index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
						</el-submenu>
						<!-- 叶子结点 -->
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
							<i :class="item.iconCls"></i>{{item.children[0].name}}
						</el-menu-item>
					</template>
				</el-menu>
				<!-- 导航菜单，折叠 -->
				<ul class="el-menu" v-else ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="reng-menu">
						<template v-if="item.leaf"><!--叶子结点-->
							<div @click="$router.push(item.children[0].path)" class="el-menu-item" :class="$route.path==item.children[0].path?'is-active':''">
								<i :class="item.iconCls"></i>
							</div>
						</template>
						<template v-else>
							<div @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)" class="el-menu-item">
								<i :class="item.iconCls"></i>
							</div>
							<ul class="reng-submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
								<li class="el-menu-item" v-for="child in item.children" :class="$route.path==child.path?'is-active':''" :key="child.path" @click="$router.push(child.path)" style="padding: 0 20px;">{{child.name}}</li>
							</ul>
						</template>
					</li>
				</ul>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-inner" v-if="$route.matched[0].name!=''">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{path: item.path==''?'/':item.path}">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>
<script type="text/javascript">
	import apiPath from '@/service/apiPath'
	export default {
		data() {
			return {
				collapsed: false,
				username: '',
				avatarUrl: 'http://pic.58pic.com/58pic/14/64/56/25h58PIC3eG_1024.jpg'
			}
		},
		methods: {
			// collapse banner
			collapse(){
				this.collapsed=!this.collapsed;
			},
			handleopen(){
				console.log('handleopen');
			},
			handleclose(){
				console.log('handleclose');
			},
			handleselect(){
				console.log('handleselect')
			},
			showMenu(i,status){
				console.log(i);
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display = status ? 'block' : 'none';
			},
			logout(){
				let vm = this;
				vm.$confirm('确认退出吗?','提示',{
					type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					vm.$router.push({path:'/login'})
				}).catch(() => {
					console.log('error');
				});
			}
		},
		created(){
			let vm = this;
			// console.log(this.$router.options.routes);
			// console.log(this.$route);
			// this.$router.push({
			// 	path: '/'
			// })
			let username = JSON.parse(sessionStorage.getItem('user'));
			vm.$fetch(apiPath.USER_INFO+'/'+username)
				.then(data => {
					vm.username = data.login;
					vm.avatarUrl = data.avatar_url;
				});
		},
		computed:{
		}
	}
</script>
<style lang="less" scoped>
	@import '../styles/public.less';
	.container{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		.header{
			height: 60px;
			line-height: 60px;
			background-color: @primary-color;
			color: #fff;
			.logo{
				height: 60px;
				font-size: 22px;
				padding-left: 20px;
				padding-right: 20px;
				border-color: rgba(238,241,146,.3);
				border-right-style: solid;
				border-right-width: 1px;
				cursor: pointer;
				text-align: center;
			}
			.logo-width{
				width: 230px;
			}
			.logo-collapse-width{
				width: 60px;
			}
			.tools{
				padding: 0 23px;
				width:14px;
				height: 60px;
				cursor: pointer;
			}
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
		}
		.main{
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0;
			// overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				.el-menu{
					width: 100%;
					height: 100%;
					background: #eef1f6;
					// background-color: #ccc;
				}
				.reng-menu{
					position: relative;
					.reng-submenu{
						position: absolute;
						top: 0;
						left: 60px;
						z-index: 9999;
						height: auto;
						display: none;
						// background: #ccc;
						background: #eee;
						padding: 0;
						text-align: center;
					}
				}

				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				&.menu-collapsed{
					flex:0 0 60px;
					width: 60px;
				}
				&.menu-expanded{
					flex:0 0 230px;
					width: 230px;
				}
			}
			.content-container{
				flex: 1;
				overflow: scroll;
				padding: 20px;
				.breadcrumb-container{
					.title{
						max-width: 300px;
						float: left;
					}
					.breadcrumb-inner{
						float: right;
					}
					.content-wrapper {
						background-color: #fff;
						box-sizing: border-box;
					}
				}
			}
		}
	}
</style>