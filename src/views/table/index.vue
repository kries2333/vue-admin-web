<template>
  <div class="app-container">
    <el-button @click="onReleaseData">发布</el-button>
    <el-table :data="tableData" @selection-change="onTableSelect">
      <el-table-column type="selection" @selection-change="onTableSelect"></el-table-column>
      <el-table-column label="ID" width="120" prop="id"></el-table-column>
      <el-table-column label="标题" prop="title">
      </el-table-column>
      <el-table-column label="神评" prop="comment">
      </el-table-column>
      <el-table-column label="图片" prop="url">
        <template slot-scope="scope">
          <img width="50" height="50" :src="scope.row.image_url" alt="">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [],
      releaseData: []
      
    }
  },
  methods: {
    onReleaseData() {
      console.log('onReleaseData')

      let formData = new FormData()
      
      this.releaseData.forEach(res => {
          formData.append('ids[]', res.id)
      })

      let config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      }
      let url = "/gaoxiaogif/release_data"
      axios.post(url, formData, config).then((res) => {
        if (res.data.code == 0) {
<<<<<<< HEAD
          this.$message.success('上传成功')
=======
          this.$message.success('发布成功')
        } else if ( res.data.code == 100){
          this.$message.error('发布失败')
>>>>>>> master
        } else {
          this.$message.error('系统错误')
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    onTableSelect(row) {
      console.log(row)
      this.releaseData = row
    },
    getTableData() {
      let config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      }

      let url = "/gaoxiaogif/get_table_data"
      axios.post(url, "", config).then((res) => {
        if (res.data.code == 0) {
          console.log(res)
          this.tableData = res.data.data
        } else {
          this.$message.error('系统错误')
        }
      }).catch((res) => {
        console.log(res)
      })
      
    }
  },
  mounted() {
    console.log('加载数据')
    this.getTableData()
  }
}
</script>