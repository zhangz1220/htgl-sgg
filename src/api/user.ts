import request from "@/utils/request"

//登录
export function reqLogin(params) {
  return request({
    url: "/user/login",
    method: "post",
    data: params,
  });
}
//获取用户信息
export function userInfo(params) {
  return request({
    url: "/user/info",
    method: "post",
    data: params,
  });
}