<template>
    <div id="Area">
        <h3 class="title">范围图</h3>
        <div class="main">
        	
        </div>
    </div>
</template>
<script>
    import apiPath from '@/service/apiPath'
    import * as d3 from 'd3'
    export default {
        name: 'area',
        data() {
            return {
                
            }
        },
        created() {
            var vm = this;
            vm.$nextTick(function(){
                var data = d3.range(40).map(function(i) {
			  return i % 5 ? {x: i / 39, y: (Math.sin(i / 3) + 2) / 4} : null;
			});

			var margin = {top: 40, right: 40, bottom: 40, left: 40},
			    width = 960 - margin.left - margin.right,
			    height = 300 - margin.top - margin.bottom;

			var x = d3.scaleLinear()
			    .range([0, width]);

			var y = d3.scaleLinear()
			    .range([height, 0]);

			var line = d3.line()
			    .defined(function(d) { return d; })
			    .x(function(d) { return x(d.x); })
			    .y(function(d) { return y(d.y); });

			var area = d3.area()
			    .defined(line.defined())
			    .x(line.x())
			    .y1(line.y())
			    .y0(y(0));

			var svg = d3.select("#Area .main").append("svg")
			    .datum(data)
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			svg.append("path")
			    .attr("class", "area")
			    .attr("d", area);

			svg.append("g")
			    .attr("class", "x axis")
			    .attr("transform", "translate(0," + height + ")")
			    .call(d3.axisBottom(x));

			svg.append("g")
			    .attr("class", "y axis")
			    .call(d3.axisLeft(y));

			svg.append("path")
			    .attr("class", "line")
			    .attr("d", line);

			svg.selectAll(".dot")
			    .data(data.filter(function(d) { return d; }))
			  .enter().append("circle")
			    .attr("class", "dot")
			    .attr("cx", line.x())
			    .attr("cy", line.y())
			    .attr("r", 3.5);

            });

        }
    }
</script>
<style lang="less" scoped>
    #Area {
        .title{
            color: #409EFF;
        }
        .main{
        	.axis path,
			.axis line {
			  fill: none;
			  stroke: #000;
			  shape-rendering: crispEdges;
			}

			.area {
			  fill: yellow;
			}

			.line {
			  fill: none;
			  stroke: blue;
			  stroke-width: 1.5px;
			}

			.dot {
			  fill: white;
			  stroke: blue;
			  stroke-width: 1.5px;
			}
        }
    }
</style>