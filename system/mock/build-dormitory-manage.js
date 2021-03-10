import Mock from 'mockjs'

const buildDormitoryManage = {
  buildList: Mock.mock({
    success: true,
    code: 200000,
    msg: '获取成功',
    data: {
      total: 10,
      'records|10': [
        {
          id: '@integer(13)',
          'index|+1': 1,
          buildCode: '@cword(6)',
          reponseName: '@cword(3)',
          phone: '@integer(11)'
        }
      ]
    }
  }),
  dormitoryList: Mock.mock({
    success: true,
    code: 200000,
    msg: '获取成功',
    data: {
      total: 10,
      'records|10': [
        {
          id: '@integer(3)',
          'index|+1': 1,
          dormitoryCode: '@integer(3-5)',
          dormitoryLeader: '@cword(3)',
          'status|0-1': 0
        }
      ]
    }
  })
}

export default buildDormitoryManage
