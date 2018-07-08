<template>
    <div id="histogram">
        <h3 class="title">直方图</h3>
        <div class="main">
        
        </div>
    </div>
</template>
<script>
    import apiPath from '@/service/apiPath'
    import * as d3 from 'd3'
    export default {
        name: 'Histogram',
        data() {
            return {
                respName: [],
                respStar: [],
            }
        },
        created() {
            var vm = this;

            // 获取登录名
            let username = JSON.parse(sessionStorage.getItem('user'));
            // 展示仓库的star的信息
            vm.$fetch(apiPath.USER_INFO+'/'+username+'/repos')
                .then(data => {
                    if(data != '' && data !='undefined'){
                        data.forEach((item , index) => {
                            vm.respName.push(item.name);
                            vm.respStar.push(item.stargazers_count);
                            console.log(item.name + "-->"+ item.stargazers_count+"\n");
                        });
                    }else{}
                }).then(()=>{
                    vm.$nextTick(function(){
                        var w = 600;
                        var h = 300;
                        var barPadding = 3;
                        // var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                        //         11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
                        var dataset = vm.respStar;
                        var svg = d3.select('#histogram .main')
                                    .append('svg')
                                    .attr('width', w)
                                    .attr('height', h)
                            svg.selectAll('rect')
                                .data(dataset)
                                .enter()
                                .append('rect')
                                .attr('x',function(d, i){
                                return i * (w / dataset.length)
                                })
                                .attr('y',function(d){
                                return h - (d*4)
                                })
                                .attr('width',w / dataset.length - barPadding)
                                .attr('height',function(d , i){
                                return d * 4;
                                })
                                .attr("fill", function(d) {
                                    return "rgb(0, 0, " + (d * 10) + ")";
                                });
                            svg.selectAll("text")
                                .data(dataset)
                                .enter()
                                .append("text")
                                .text(function(d){
                                return d;
                                })
                                .attr("x", function(d, i) {
                                    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
                                })
                                .attr("y", function(d) {
                                    return h - (d * 4) + 14;
                                })
                                .attr('font-family','sans-serif')
                                .attr('font-size','11px')
                                .attr('fill','#fff')
                                .attr("text-anchor", "middle")

                    });
                });

        }
    }
</script>
<style lang="less" scoped>
    #histogram {
        .title{
            color: #409EFF;
        }
        .main{
            width: 600px;
            margin: 0 auto;
        }
    }
</style>