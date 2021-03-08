import request from '@/utils/request'

export default{

    //1.根据课程id获取章节和小节数据列表
    getChapterVideo(courseId){
        return request({
            //url: '/eduService/teacher/pagTeacherCondition/' + current + '/' + limit,
            url: `/eduService/chapter/getChapterVideo/${courseId}`,
            method: 'get'
          })
    }

}
