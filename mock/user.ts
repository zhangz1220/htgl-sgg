function createUser() {
  return {
    username: 'admin',
    userId: 1,
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    avatar2: 'https://img2.baidu.com/it/u=450281947,246598072&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    desc: '平台管理员',
    password: '111111',
    roles: ['平台管理员']
  }
}

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      if (body.password != '111111') {
        return {
          code: 201,
          data: {
            message: '密码不正确！'
          }
        }
      }
      return {
        code: 200,
        data: {
          message: '登陆成功',
          token: body.username + '-' + 'token', //在token里放用户名 用于获取信息接口返回用户名
          username: body.username,
          password: body.password
        }
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'post',
    response: (request) => {
      const token = request.headers.token
      const userData = createUser()
      userData.username = token.split('-')[0] //在token里截取用户名

      return {
        code: 200,
        data: {
          checkUser: userData
        },
        requestData: request,
      }
    }
  },
]