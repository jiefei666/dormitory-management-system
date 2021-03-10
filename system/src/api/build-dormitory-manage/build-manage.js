import request from '@/utils/request'

export default (class BuildManageApi {
  constructor() {}

  static getData() {
    return request.get('buildDormitory/getBuildList')
  }
})
