//对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/login/index.vue'),
    name: '/',
    meta: {
      title: '登录',
      hidden: true, //菜单中是否隐藏
      icon: 'Avatar'
    },
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true, //菜单中是否隐藏
      icon: 'Avatar'
    }
  },
  {
    path: '/layout',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      hidden: false, //菜单中是否隐藏
      icon: ''
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false, //菜单中是否隐藏
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      hidden: false, //菜单中是否隐藏
      icon: 'Platform'
    }
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: false, //菜单中是否隐藏
      icon: 'Lock'
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          hidden: false, //菜单中是否隐藏
          icon: 'User'
        }
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false, //菜单中是否隐藏
          icon: 'User'
        }
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false, //菜单中是否隐藏
          icon: 'Menu'
        }
      }
    ]
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      hidden: false, //菜单中是否隐藏
      icon: 'Goods'
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          hidden: false, //菜单中是否隐藏
          icon: 'ShoppingCartFull'
        }
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          hidden: false, //菜单中是否隐藏
          icon: 'ChromeFilled'
        }
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          hidden: false, //菜单中是否隐藏
          icon: 'Calendar'
        }
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          hidden: false, //菜单中是否隐藏
          icon: 'Orange'
        }
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/layout/index.vue'),
    name: 'Test',
    meta: {
      title: '测试',
      hidden: false, //菜单中是否隐藏
      icon: 'Goods'
    },
    redirect: '/test/test1',
    children: [
      {
        path: '/test/computed',
        component: () => import('@/views/test/computed.vue'),
        name: 'test1',
        meta: {
          title: 'computed',
          hidden: false, //菜单中是否隐藏
          icon: 'ShoppingCartFull'
        }
      },
      {
        path: '/test/test2',
        component: () => import('@/views/test/test2.vue'),
        name: 'test2',
        meta: {
          title: '品牌管理',
          hidden: false, //菜单中是否隐藏
          icon: 'ShoppingCartFull'
        }
      },
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true, //菜单中是否隐藏
      icon: 'Avatar'
    }
  },
  //任意路由 重定向到 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true, //菜单中是否隐藏
    }
  }
]
