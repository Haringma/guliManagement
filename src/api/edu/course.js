import request from '@/utils/request'

export default{

    //1.添加课程信息
    addCourseInfo(courseInfo){
        return request({
            //url: '/eduService/teacher/pagTeacherCondition/' + current + '/' + limit,
            url: `/eduService/course/addCourseInfo`,
            method: 'post',
            data:courseInfo
          })
    }

}
