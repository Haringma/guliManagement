import request from '@/utils/request'

export default{

    //1.讲师列表（条件查询带分页）
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //url: '/eduService/teacher/pagTeacherCondition/' + current + '/' + limit,
            url: `/eduService/teacher/pagTeacherCondition/${current}/${limit}`,
            method: 'post',
            data: teacherQuery //将数据转为json
          })
    },

    //2.根据id删除讲师
    deleteTeacherById(id){
        return request({
            url: `/eduService/teacher/${id}`,
            method: 'delete'
        })
    },

    //3.添加讲师
    addTeacher(teacher){
        return request({
            url: `/eduService/teacher/addTeacher`,
            method: 'post',
            data: teacher //将数据转为json
          })
    },
    
    //4.根据id查询讲师
    getTeacherById(id){
        return request({
            url: `/eduService/teacher/${id}`,
            method: 'get'
          })
    },

    //5.根据id修改讲师
    updateTeacherById(teacher){
        return request({
            url: `/eduService/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }

}
