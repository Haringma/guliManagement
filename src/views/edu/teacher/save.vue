<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name"/>
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" :min="0"/>
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--
            数据类型一定要和取出的json中的一致，否则没法回填
            因此，这里value使用动态绑定的值，保证其数据类型是number
          -->
          <el-option :value="1" label="高级讲师"/>
          <el-option :value="2" label="首席讲师"/>
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career"/>
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea"/>
      </el-form-item>

      <!-- 讲师头像：TODO -->
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import teacherApi from '@/api/edu/teacher'
export default {
  data() {
    return {
      teacher: {
        name: '',
        sort: 0,
        level: 1,
        career: '',
        intro: '',
        avatar: ''
      },
      saveBtnDisabled: false // 保存按钮是否禁用,
    }
  },
  watch: { //监听 路由变化方式，路由发生变化，方法就会执行
    $route(to, from) {
      console.log('watch $route')
      this.init()
    }
  },
  created(){ //多次路由跳转都是同一个页面的话created方法只执行一次
    this.init()
  },
  methods: {

    init(){
      if (this.$route.params && this.$route.params.id) {
        const id = this.$route.params.id
        this.getTeacherById(id)
      }else{
        this.teacher  = {}
      }
    },

    saveOrUpdate() {
      this.saveBtnDisabled = true
      //判断是修改还是添加
      if(!this.teacher.id){
        //添加
        this.saveData()
      }else{
        //修改
        this.updateTeacher()
      }
    },

    //1.保存
    saveData() {
      teacherApi.addTeacher(this.teacher)
              .then(response => {
                //提示信息
                this.$message({
                      type: 'success',
                      message: '添加成功!'
                    });
                //返回列表 路由跳转 重定向
                this.$router.push({path:'/teacher/table'})

              })
    },

    //2.根据id查询讲师
    getTeacherById(id){
      teacherApi.getTeacherById(id)
              .then(response =>{
                this.teacher = response.data.item
              })
    },

    //3.修改讲师的方法
    updateTeacher(){
      teacherApi.updateTeacherById(this.teacher)
              .then(response => {
                //提示信息
                this.$message({
                      type: 'success',
                      message: '修改成功!'
                    });
                //返回列表 路由跳转 重定向
                this.$router.push({path:'/teacher/table'})

              })
    }


  }
}
</script>