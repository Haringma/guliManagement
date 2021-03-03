import request from '@/utils/request'

export default{

    //1.讲师列表（条件查询带分页）
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //url: '/eduService/teacher/pagTeacherCondition/' + current + '/' + limit,
            url: `/eduService/teacher/pagTeacherCondition/${current}/${limit}`,
            method: 'post',
            data: teacherQuery
          })
    }

}
