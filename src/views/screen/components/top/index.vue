<template>
	<div class="top">
		<div class="left">
			<span class="lbtn" @click="goHome">首页</span>
		</div>
		<div class="center">
			<div class="title">智慧旅游可视化大数据平台</div>
		</div>
		<div class="right">
			<span class="rbtn">统计报告</span>
			<span class="time">当前时间：{{ time }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup name="ScreenTop">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
//获取路由器对象
let $router = useRouter()
//存储当前时间
import moment from 'moment'
let time = ref(moment().format('YYYY-MM-DD hh:mm:ss'))
let timer = ref(0)
const goHome = () => {
	$router.push('/home')
}

onMounted(() => {
	timer.value = setInterval(() => {
		time.value = moment().format('YYYY-MM-DD hh:mm:ss')
	}, 1000)
})
//组建销毁前
onBeforeUnmount(() => {
	clearInterval(timer.value)
})

</script>

<style scoped lang="scss">
.top {
	width: 100%;
	height: 100%;
	display: flex;

	.left {
		flex: 1;
		background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
		background-size: cover;

		.lbtn {
			width: 150px;
			height: 40px;
			float: right;
			background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
			background-size: 100% 100%;
			text-align: center;
			line-height: 40px;
			color: #29fcff;
			font-size: 20px;
		}
	}

	.center {
		flex: 2;
		font-size: 30px;

		.title {
			width: 100%;
			height: 74px;
			background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
			background-size: 100% 100%;
			text-align: center;
			line-height: 74px;
			color: #29fcff;
		}
	}

	.right {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
		background-size: cover;
		text-align: center;
		line-height: 74px;
		color: #29fcff;
		font-size: 20px;

		.rbtn {
			width: 150px;
			background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
			background-size: 100% 100%;
			height: 40px;
			line-height: 40px;
			text-align: center;
		}

		.time {
			color: #29fcff;
			margin-right: 10px;
		}
	}
}
</style>
