import request from '@/utils/request'

export default{

    //1.课程分类列表
    getsubjectList(){
        return request({
            //url: '/eduService/teacher/pagTeacherCondition/' + current + '/' + limit,
            url: `/eduService/subject/getSubjectList`,
            method: 'get'
          })
    }

}
