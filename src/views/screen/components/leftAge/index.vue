<template>
	<div class="box">
		<div class="top">
			<p>年龄比例</p>
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
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: 40,
			right: 30,
			orient: 'vertical', //设置图例列表方向 垂直，默认水平
			textStyle: {
				color: 'white',
				fontSize: 14
			}
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: true,
					position: 'inside',
					color: 'white'
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '军事' },
					{ value: 735, name: '新闻' },
					{ value: 580, name: '直播' },
					{ value: 484, name: '娱乐' },
					{ value: 300, name: '财经' }
				]
			}
		],
		//布局位置
		grid: {
			left: 100,
			right: 100,
			top: 0,
			bottom: 0
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
		height: 270px;
	}
}
</style>
