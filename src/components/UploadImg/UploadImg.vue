<template>
	<el-upload class="avatar-uploader" action="/api/upload/imgUpload" :show-file-list="false"
		:before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
		<img v-if="imgUrl" :src="imgUrl" class="avatar" />
		<el-icon v-else class="avatar-uploader-icon">
			<Plus />
		</el-icon>
	</el-upload>
</template>

<script lang="ts" setup name="UploadImg">
import { ElMessage } from 'element-plus'
import { ref, defineProps } from "vue";

let props = defineProps(['imgUrl', 'sendImgUrl']);

const beforeAvatarUpload = (rawFile) => {
	if (rawFile.type == 'image/png' || rawFile.type == 'image/jpg' || rawFile.type == 'image/jpeg') {
		if (rawFile.size / 1024 / 1024 < 4) { //小于4兆
			return true
		} else {
			ElMessage.error('上传文件大小应小于4MB！')
			return false
		}
	} else {
		ElMessage.error('上传文件格式必须是PNG或JPG！')
		return false
	}
}
const handleAvatarSuccess = (res: any) => {
	props.sendImgUrl(res.data.imgUrl)
}


</script>

<style scoped lang="scss">
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.el-upload img {
	width: 178px;
	height: 178px;
	border-radius: 6px;
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
	border-radius: 6px;
	border: 1px dashed var(--el-border-color);
}
</style>
