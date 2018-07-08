<template>
  <div id="d3">
    <!-- 直方图 -->
    <histogram />
    <hr>
    
    <!-- 散布图 -->
    <scatterplot />
    <hr>

    <!-- 折线图 -->
    <line-chart />
    <hr>

    <!-- 饼状图 -->
    <pie />
    <hr>

    <!-- 范围图 -->
    <Area />
    <hr>

    <!-- 缩放图 -->
    <Zoom />
    <hr>

    <div class="more">
      <a href="https://bl.ocks.org/mbostock" target="_blank">更多内容请戳https://bl.ocks.org/mbostock</a>
    </div>

  </div>
</template>

<script>
  import * as d3 from 'd3'
  import LineChart from '@/components/demo/LineChart.vue'
  import Histogram from '@/components/demo/Histogram.vue'
  import Scatterplot from '@/components/demo/Scatterplot.vue'
  import Pie from '@/components/demo/Pie.vue'
  import Area from '@/components/demo/Area.vue'
  import Zoom from '@/components/demo/Zoom.vue'
  export default {
    name: 'd3',
    // template:`<div></div>`,
    data () {
      return {

      }
    },
    created() {
      let vm = this;

      // let username = JSON.parse(sessionStorage.getItem('user'));
			// vm.$fetch('https://api.github.com/search/repositories?q=language:JavaScript&sort=stars&order=desc')
			// 	.then(data => {
			// 		let i = 0;
			// 		data.items.forEach(item => {
			// 			console.log('第'+(++i)+'名：'+item.name+' - '+item.stargazers_count);
			// 		})
			// 	});

      vm.$nextTick(function(){

      })
    },
    mounted() {

    },
    methods: {

    },
    components: {
      LineChart, // 折线图
      Histogram, // 直方图
      Scatterplot, // 散布图
      Pie, // 饼状图
      Area, // 范围图
      Zoom, // 裁剪图
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#d3 {
  .more a{
    padding-top: 20px;
    display: block;
    text-align: center;
    color: #409EFF;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>