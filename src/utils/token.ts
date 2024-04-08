//封装本地存储 存储数据和读取数据
//本地保存token
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
//获取本地存储token
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}

//清空本地存储token
export const REMOVE_TOKEN = () => {
  return localStorage.removeItem('TOKEN')
}
