<template>
	<div class="box">
		<div class="top">
			<p>热门景区排行</p>
			<p></p>
		</div>
		<div class="number">
			<span v-for="(item, index) in people" :key="index">{{ item }}</span>
		</div>
		<!-- echarts -->
		<div class="charts" ref="charts"></div>
	</div>
</template>

<script lang="ts" setup name="ScreenTop">
import { ref, onMounted } from 'vue'

//引入echarts
import *as echarts from 'echarts'
//引入echarts拓展插件：水球图
import 'echarts-liquidfill'
let people = ref('215908人')

let charts = ref()
onMounted(() => {
	//获取charts 实例
	let myecharts = echarts.init(charts.value)
	myecharts.setOption({
		title: {
			text: ''
		},
		series: {
			type: 'liquidFill', //liquidFill水球图
			data: [0.6, 0.4, 0.2],
			waveAnimation: true,//动画
			animationDuration: 3,
			animationDurationUpdate: 0,
			radius: '90%',//半径
			outline: {
				show: true,
				borderDistance: 8,
				itemStyle: {
					color: '#03a9f4',
					borderColor: '#294D99',
					borderWidth: 8,
					shadowBlur: 20,
					shadowColor: 'rgba(0，，0，0.25)'
				}
			}
		}
	})
})

</script>

<style scoped lang="scss">
.box {
	margin-top: 10px;
	background: url(../../images/dataScreen-main-lb.png) no-repeat;
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

		p:nth-child(3) {
			float: right;
			margin-right: 10px;

			span {
				color: skyblue;
			}
		}
	}

	.number {
		margin-top: 50px;
		display: flex;
		padding: 10px;
		font-size: 28px;

		span {
			flex: 1;
			height: 50px;
			line-height: 50px;
			background: url(../../images/total.png) no-repeat;
			background-size: 100% 100%;
			text-align: center;
			color: #29fcff;
		}
	}

	.charts {
		width: 100%;
		height: 200px;
	}
}
</style>
