<template>
  <el-card class="box-card">
    <el-button type="primary" icon="Plus" @click="addClick">添加品牌</el-button>

    <el-table :data="tableData" border stripe style="width: 100%;margin-top: 20px;">
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="prodName" label="品牌名称" />
      <el-table-column label="品牌LOGO">
        <template #default="scope">
          <el-image style="width: 80%; height: 100px" :src="scope.row.logoUrl" hide-on-click-modal="true" :zoom-rate="1.2"
            :max-scale="7" :min-scale="0.2" :preview-src-list="[scope.row.logoUrl]" :initial-index="4" fit="cover" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <!-- <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button> -->
          <el-popconfirm title="确定删除吗?" @confirm="handleDelete(scope.row)">
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-divider content-position="left"></el-divider>

    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[10, 20, 50, 100, 200]"
      :small="small" :disabled="disabled" :background="background" layout="prev, pager, next,jumper,->, sizes, total,"
      :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />

  </el-card>
  <el-dialog v-model="dialogFormVisible" :title="form.id ? '编辑品牌' : '添加品牌'">
    <el-form ref="formRef" :rules="rules" :model="form" style="width: 80%;">
      <el-form-item label="品牌名称" :label-width="formLabelWidth" prop="prodName">
        <el-input v-model="form.prodName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="品牌LOGO" :label-width="formLabelWidth" prop="logoUrl">
        <UploadImg :imgUrl="form.logoUrl" :sendImgUrl="getImgUrl"></UploadImg>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="sure">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>


<script setup>
import { ElMessage } from 'element-plus'
import { ref, reactive, onMounted, nextTick } from 'vue'
// import type { FormInstance, FormRules } from 'element-plus'

import { trademarkList } from '@/api/product/trademark'
import UploadImg from '@/components/UploadImg/UploadImg.vue' //图片上传

let tableData = ref([])
let total = ref(0)
let currentPage = ref(1)
let pageSize = ref(10)

let dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const formRef = ref()
const rules = reactive({
  prodName: [
    { required: true, message: '请输入品牌名称!', trigger: 'blur' },
    { min: 2, message: '至少输入两个字符!', trigger: 'blur' },
  ],
  logoUrl: [
    { required: true, message: '请上传品牌LOGO', trigger: 'change' },
  ],
})

const form = reactive({
  prodName: '',
  // logoUrl: 'https://img0.baidu.com/it/u=1752903520,1572100722&fm=253&fmt=auto&app=138&f=JPEG?w=521&h=500',
  logoUrl: '',
})

onMounted(() => {
  getList()
})

const getList = () => {
  trademarkList(
    {
      currentPage, pageSize
    }
  ).then(res => {
    tableData.value = res.data.list
    total.value = res.data.total
  }).catch(err => {

  })
}
//添加
const addClick = () => {
  form.id = ''
  form.prodName = ''
  form.logoUrl = ''
  dialogFormVisible.value = true
  nextTick(() => {
    formRef.value.resetFields() //重置该表单项，将其值重置为初始值，并移除校验结果
  })
}
//编辑
const handleEdit = (index, row) => {
  Object.assign(form, row) //赋值回显
  dialogFormVisible.value = true
}
//删除
const handleDelete = (row) => {
  let id = row.id
  //调接口
  ElMessage.success(`删除品牌成功！`)
}

//确定
// const sure = async () => {
//   let params = form
//   //调接口
//   ElMessage.success(`${form.id ? '编辑' : '添加'}品牌成功！`)
//   dialogFormVisible.value = false
// }
const sure = async (formEl) => {
  formRef.value.validate((valid, fields) => {
    if (valid) {
      let params = form
      //调接口
      ElMessage.success(`${form.id ? '编辑' : '添加'}品牌成功！`)
      dialogFormVisible.value = false
    }
  })
}

//子组件传的
const getImgUrl = (val) => {
  form.logoUrl = val
  formRef.value.clearValidate('logoUrl')
}

// 分页
//SizeChange
const handleSizeChange = () => {

}
//CurrentChange
const handleCurrentChange = () => {

}
</script>

<style scoped lang="scss"></style>
