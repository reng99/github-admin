import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/helloworld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: '',
      component: Home,
      hidden: true, // nav中隐藏，不希望被看到
      children: [
        {
          path: '/',
          redirect: '/welcome',
        },
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('@/views/Welcome')
        }
      ]
    },
    {
      path: '/',
      name: 'D3',
      component: Home,
      iconCls: 'el-icon-menu',//图标样式class  // element-ui 自带图标查看 http://element.eleme.io/#/zh-CN/component/icon#tu-biao-ji-he
      children: [
        {
          path: '/histogram',
          name: 'Histogram/直方图',
          meta: '',
          component: () => import('@/views/d3/Histogram')
        },
        {
          path: '/line-chart',
          name: 'LineChart/折线图',
          meta: '',
          component: () => import('@/views/d3/LineChart')
        },
        {
          path: '/scatterplot',
          name: 'scatterplot/散点图',
          meta: '',
          component: () => import('@/views/d3/Scatterplot')
        }
      ]
    },
    {
      path: '/',
      name: 'Demo',
      component: Home,
      iconCls: 'el-icon-edit',
      children: [
        {
          path: '/demo',
          name: 'demo',
          meta: '',
          component: () => import('@/views/demo/index')
        }
      ]
    },
    {
      path: '/',
      name: '',
      component: Home,
      iconCls: 'el-icon-time',
      leaf: true, // 已经是叶子结点（只有一个节点）
      children: [
        {
          path: '/timeline', //  活动时间图
          name: 'Timeline',
          component: () => import('@/views/timeline/index')
        }
      ]
    },
    {
    	path: '/login',
    	name: 'Login',
      hidden: true, // 左侧导航栏中隐藏
    	component: () => import('@/views/Login'),
      iconCls: 'el-icon-message',//图标样式class
    },
    { // 个人主页
      path: '/',
      name: '',
      component: Home,
      hidden: true,
      children: [
        {
          path: '/profile',
          name: '个人主页',
          component: () => import('@/views/Profile')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      hidden: true
    },
    { // 路由不在范围内跳转到404
      path: '*',
      hidden: true,
      redirect: {path: '/404'}
    }
  ]
})
