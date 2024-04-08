import request from "@/utils/request"

//获取品牌列表
export function trademarkList(params) {
  return request({
    url: "/trademark/list",
    method: "post",
    data: params,
  });
} 
