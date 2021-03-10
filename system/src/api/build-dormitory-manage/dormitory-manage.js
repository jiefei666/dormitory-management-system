import request from '@/utils/request'

export default (class DormitoryManageApi {
  constructor() {}

  static getData() {
    return request.get('buildDormitory/getDormitoryList')
  }
})
