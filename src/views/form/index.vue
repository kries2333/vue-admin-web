<template>
  <div class="app-container">
    <el-button @click="showImagesDlg">添加图片</el-button>
    <el-button @click="submitUpload">保存</el-button>
    <el-table :data="tableData">
      <el-table-column label="标题" prop="title">
        <template slot-scope="scope">
          <el-input v-model="scope.row.title" alt=""></el-input>
        </template>
      </el-table-column>
      <el-table-column label="图片" prop="">
        <template slot-scope="scope">
          <img width="50" height="50" :src="scope.row.image_url" alt="">
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :modal="true" :visible.sync="dialogVisible" width="50%">
      <el-form ref="imagesForm">
        <el-upload
          :file-list="fileList"
          :action="uploadAction"
          list-type="picture-card"
          ref="upload"
          name="files"
          multiple
          :auto-upload="false"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemovePicture"
          :on-exceed="handleExceedPicture"
          :on-change="handlePictureChange">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog append-to-body title="图片详情" :visible.sync="imagesDialogVisible">
          <img :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-button @click="submitUpload">提交上传</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      uploadAction: 'images',
      dialogVisible: false,
      imagesDialogVisible: false,
      dialogImageUrl: '',
      tableData: [],
      fileList: [],
    }
  },
  methods: {
    showImagesDlg() {
      this.dialogVisible = true
    },
    handlePictureCardPreview() {
      console.log('handlePictureCardPreview')
    },
    handleRemovePicture() {
      console.log('handleRemovePicture')
    },
    handleExceedPicture() {
      console.log('handleExceedPicture')
    },
    handlePictureChange(file) {
      console.log('handlePictureChange')
      this.tableData.push({
          title: '',
          comment: '',
          image_url: file.url,
          file_raw: file.raw,
        })
    },
    submitUpload() {
      console.log('submitUpload')
      let config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      }
      let formData = new FormData()
      
      this.tableData.forEach(function(data) {
          formData.append('title[]', data.title)
          formData.append('fileList[]', data.file_raw)
      })
      let url = "/gaoxiaogif/submit"
      axios.post(url, formData, config).then((res) => {
        if (res.data.code == 0) {
<<<<<<< HEAD
          this.$message.success('上传成功')
=======
          this.$message.success('保存成功')
        } else if ( res.data.code == 100){
          this.$message.error('保存失败')
>>>>>>> master
        } else {
          this.$message.error('系统错误')
        }
      }).catch((res) => {
        console.log(res)
      })
    }
  }
}
</script>