<template>
    <div id="scatterplot">
        <h3 class="title">散布图</h3>
        <div class="main"></div>
    </div>
</template>
<script>
    import * as d3 from 'd3'
    export default {
        name: 'Scatterplot',
        data() {
            return {

            }
        },
        created() {
            let vm = this;
            vm.$nextTick(function(){
                var w = 500;
                var h = 100;
                var padding = 20;
                var dataset = [
                    [ 5,     20 ],
                    [ 480,   90 ],
                    [ 250,   50 ],
                    [ 100,   33 ],
                    [ 330,   95 ],
                    [ 410,   12 ],
                    [ 475,   44 ],
                    [ 25,    67 ],
                    [ 85,    21 ],
                    [ 220,   88 ],
                    [ 600,  150 ]
                ];

                var xScale = d3.scaleLinear()
                                .domain([0,d3.max(dataset,function(d){
                                    return d[0];
                                })])
                                .range([padding,w - padding*2]);
                var yScale = d3.scaleLinear()
                                .domain([0,d3.max(dataset,function(d){
                                    return d[1];
                                })])
                                .range([h - padding , padding]);

                var rScale = d3.scaleLinear()
                                .domain([0,d3.max(dataset,function(d){
                                    return d[1];
                                })])
                                .range([2,5]);

                var svg = d3.select('#scatterplot .main')
                            .append('svg')
                            .attr('width',w)
                            .attr('height',h);
                svg.selectAll('circle')
                    .data(dataset)
                    .enter()
                    .append('circle')
                    .attr('cx',function(d){
                        return xScale(d[0]);
                    })
                    .attr('cy',function(d){
                        return yScale(d[1]);
                    })
                    .attr('r',function(d){
                        return rScale(d[1]);
                    });
                svg.selectAll('text')
                    .data(dataset)
                    .enter()
                    .append('text')
                    .text(function(d){
                        return `${d[0]},${d[1]}`
                    })
                    .attr('x',function(d){
                        return xScale(d[0]);
                    })
                    .attr('y',function(d){
                        return yScale(d[1]);
                    })
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '11px')
                    .attr('fill', 'red');

                // Define X axis
			    // var xAxis = axis;

                // svg.append('g')
                //     .call(xAxis);
            })
        }
    }
</script>
<style lang="less" scoped>
    #scatterplot{
        .title{
            color: #409EFF;
        }
    }
</style>