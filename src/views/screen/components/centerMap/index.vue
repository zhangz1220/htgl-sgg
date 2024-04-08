<template>
	<div class="box" ref="map">
		<!-- echarts -->
		<div class="charts"></div>
	</div>
</template>

<script lang="ts" setup name="ScreenTop">
import { ref, onMounted } from 'vue'

//引入echarts
import *as echarts from 'echarts'
//引入中国地图的JSON数据
import chinaJson from './china.json'

let map = ref()
//注册中国地图  参考echarts官网#geo.map：https://echarts.apache.org/zh/option.html#geo.map
echarts.registerMap('china', chinaJson)
onMounted(() => {
	//获取charts 实例
	let myecharts = echarts.init(map.value)
	//设置配置项
	myecharts.setOption({
		geo: [{
			map: 'china',
			roam: true, //地图是否鼠标缩放
			//地图位置
			left: 50,
			right: 50,
			top: 50,
			bottom: 0,
			//地图文字
			label: {
				show: true, //显示文字
				color: '#fff',
				fontSize: 14
			},
			//每一个多边形的样式
			itemStyle: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0, color: 'red' // 0% 处的颜色
					}, {
						offset: 1, color: '#2196f3' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				}
			},
			//地图高亮设置
			emphasis: {
				itemStyle: {
					// color: 'red'
				},
				label: {
					fontSize: 30,
					color: '#fff'
				}
			}

		}],
		series: [
			{
				type: 'lines',//航线
				data: [
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[126.642464, 45.756967],//终点 黑龙江
						],
						//航线样式设置
						lineStyle: {
							color: 'orange',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[121.509062, 25.044332],//终点 台湾
						],
						//航线样式设置
						lineStyle: {
							color: '#8bc34a',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[119.306239, 26.075302],//终点 福建
						],
						//航线样式设置
						lineStyle: {
							color: 'orange',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[113.280637, 23.125178],//终点 广东
						],
						//航线样式设置
						lineStyle: {
							color: '#8bc34a',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[101.778916, 36.623178],//终点 青海
						],
						//航线样式设置
						lineStyle: {
							color: 'orange',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[91.132212, 29.660361],//终点 西藏
						],
						//航线样式设置
						lineStyle: {
							color: '#8bc34a',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[108.320004, 22.82402],//终点 广西
						],
						//航线样式设置
						lineStyle: {
							color: 'orange',
							width: 6
						}
					},
					{
						coords: [
							[117.283042, 31.86119],//起点 安徽
							[111.670801, 40.818311],//终点 内蒙古
						],
						//航线样式设置
						lineStyle: {
							color: '#8bc34a',
							width: 6
						}
					}
				],
				//开启动画特效
				effect: {
					show: true,
					symbol: 'arrow',
					color: '#673AB7',
					symbolSize: 12
				}
			}
		]
	})
})

</script>

<style scoped lang="scss">
.box {

	.charts {
		width: 100%;
		height: 270px;
	}
}
</style>
