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
    },
    //2.查询讲师
    getListTeacher(){
        return request({
            url: `/eduService/teacher/findAll`,
            method: 'get'
          })
    },
    //根据课程id查询课程基本信息
    getCourseInfoById(courseId){
        return request({
            url: `/eduService/course/getCourseById/${courseId}`,
            method: 'get'
          })
    },
    //修改课程信息
    updateCourseInfo(courseInfo){
        return request({
            url: `/eduService/course/updateCourseInfo`,
            method: 'post',
            data: courseInfo
          })
    }

}
