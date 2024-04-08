
export default [
  {
    url: '/api/trademark/list',
    method: 'post',
    response: ({ body }) => {

      return {
        code: 200,
        data: {
          message: 'ok',
          'list|10': [
            {
              'id|+1': 1,
              prodName: '华为@string',
              logoUrl: '@image',
            }
          ],
          total: '@integer(1,50)',
        }
      }
    }
  },
  {
    url: '/api/upload/imgUpload',
    method: 'post',
    response: ({ body }) => {

      return {
        code: 200,
        requestData: body,
        data: {
          message: 'ok',
          imgUrl: 'https://img0.baidu.com/it/u=1752903520,1572100722&fm=253&fmt=auto&app=138&f=JPEG?w=521&h=500'
        }
      }
    }
  }
]