import Mock from 'mockjs'

Mock.setup({
  timeout: 400
})

import buildDormitoryManage from './build-dormitory-manage'

Mock.mock(/buildDormitory\/getBuildList/, 'get', buildDormitoryManage.buildList)
Mock.mock(/buildDormitory\/getDormitoryList/, 'get', buildDormitoryManage.dormitoryList)
