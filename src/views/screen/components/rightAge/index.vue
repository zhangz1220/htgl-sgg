<template>
	<div class="box">
		<div class="top">
			<p>预约渠道数据统计</p>
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

onMounted(() => {

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
		height: 270px;
	}
}
</style>
