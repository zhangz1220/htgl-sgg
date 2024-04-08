<template>
	<div class="box">
		<div class="top">
			<p>男女比例</p>
			<p></p>
		</div>
		<div class="sex">
			<div class="man">
				<img src="../../images/man.png" alt="">
			</div>
			<div class="woman">
				<img src="../../images/woman.png" alt="">
			</div>
		</div>
		<div class="rate">
			<p>男士58%</p>
			<p>女士42%</p>
		</div>
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
		title: {
			text: '男女比例',
			textStyle: {
				color: '#03A9F4'
			},
			left: '40%'
		},
		xAxis: {
			show: false,
			min: 0,
			max: 100
		},
		yAxis: {
			show: false,
			type: 'category' //y轴上均匀分布
		},
		series: [
			{
				type: 'bar', //柱状图宽度
				data: [58],
				barWidth: 20,
				z: 100,
				itemStyle: {
					color: '#007afe',
					borderRadius: 20
				}
			},
			{
				type: 'bar',
				data: [100],
				barWidth: 20, //柱状图宽度
				barGap: '-100%', //调整女士柱状图位置
				itemStyle: {
					color: '#ff4b7a',
					borderRadius: 20
				}
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

	.sex {
		display: flex;
		justify-content: center;

		.man {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 20px;
			width: 111px;
			height: 115px;
			background: url(../../images/man-bg.png) no-repeat;
			background-size: 100% 100%;
		}

		.woman {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 20px;
			width: 111px;
			height: 115px;
			background: url(../../images/woman-bg.png) no-repeat;
			background-size: 100% 100%;
		}
	}

	.rate {
		display: flex;
		justify-content: space-between;
		padding: 0 30px;
		color: #fff;
	}

	.charts {
		height: 100px;
	}


}
</style>
