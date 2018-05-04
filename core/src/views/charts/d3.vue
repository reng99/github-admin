<template>
  <div id="d3">
    <!--散布图-->
    <scatterplot />

    <!--折线图-->
    <line-chart />

    <!--直方图-->
    <histogram />



  </div>
</template>

<script>
  import * as d3 from 'd3'
  import LineChart from '@/components/LineChart.vue'
  import Histogram from '@/components/Histogram.vue'
  import Scatterplot from '@/components/Scatterplot.vue'
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#d3 {

}
</style>