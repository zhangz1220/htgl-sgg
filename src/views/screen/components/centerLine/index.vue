<template>
	<div class="box">
		<div class="top">
			<p>未来七天游客数量趋势</p>
			<p></p>
		</div>
		<!-- echarts -->
		<div class="charts" ref="charts"></div>
	</div>
</template>

<script lang="ts" setup name="ScreenTop">
import { ref, onMounted } from 'vue'

//引入echarts
import *as echarts from 'echarts'

let charts = ref()
onMounted(() => {
	//获取charts 实例
	let myecharts = echarts.init(charts.value)
	myecharts.setOption({
		xAxis: {
			type: 'category',
			boundaryGap: false, //两侧不留白
			splitLine: { //分割线
				show: false
			},
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
		},
		yAxis: {
			axisLine: {
				show: true, //显示y轴线
			},
			axisTick: {
				show: true, //显示刻度
			},
			splitLine: {
				show: false //隐藏分割线
			}
		},
		series: [
			{
				type: 'line',
				data: [300, 2200, 1240, 2904, 480, 2666, 999],
				smooth: true, //拐点平滑曲线
				//区域填充样式
				areaStyle: {
					color: '#818181'
				}
			}
		],
		grid: {
			left: 40,
			right: 10,
			top: 0,
			bottom: 130
		}
	})
})

</script>

<style scoped lang="scss">
.box {
	margin-top: 10px;
	background: url(../../images/dataScreen-main-cb.png) no-repeat;
	background-size: 100% 100%;

	.top {
		margin-left: 20px;
		color: #FF9800;

		p:nth-child(1) {
			font-size: 20px;
		}

		p:nth-child(2) {
			margin-top: 10px;
			width: 68px;
			height: 7px;
			background: url(../../images/dataScreen-title.png) no-repeat;
			background-size: 100% 100%;

		}
	}

	.charts {
		width: 100%;
		height: calc(100% - 40px);
	}
}
</style>
