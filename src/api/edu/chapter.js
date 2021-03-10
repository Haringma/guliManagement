import request from '@/utils/request'

export default{

    //1.根据课程id获取章节和小节数据列表
    getChapterVideo(courseId){
        return request({
            //url: '/eduService/teacher/pagTeacherCondition/' + current + '/' + limit,
            url: `/eduService/chapter/getChapterVideo/${courseId}`,
            method: 'get'
          })
    },
    removeById(id) {
        return request({
          url: `/eduService/chapter/${id}`,
          method: 'delete'
        })
      },
    
      save(chapter) {
        return request({
          url: `/eduService/chapter/addChapter`,
          method: 'post',
          data: chapter
        })
      },
    
      getById(id) {
        return request({
          url: `/eduService/chapter/getChapterInfo/${id}`,
          method: 'get'
        })
      },
    
      updateById(chapter) {
        return request({
          url: `/eduService/chapter/updateChapter/${chapter.id}`,
          method: 'put',
          data: chapter
        })
      }

}
