module.exports = [{
  path: 'pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: '统计分析',
    usingComponents: {
      'wux-row': '/static/wux/row/index',
      'wux-col': '/static/wux/col/index'
    }
  }
}, {
  path: 'pages/list/index',
  name: 'list',
  config: {
    navigationBarTitleText: '设备列表',
    usingComponents: {
      'wux-toast': '/static/wux/toast/index',
      'wux-row': '/static/wux/row/index',
      'wux-col': '/static/wux/col/index',
      'wux-grids': '/static/wux/grids/index',
      'wux-grid': '/static/wux/grid/index',
      'wux-tag': '/static/wux/tag/index',
      "wux-icon": "/static/wux/icon/index",
      'wux-search-bar': '/static/wux/search-bar/index'
    }
  }
}, {
  path: 'pages/device/index',
  name: 'device',
  config: {
    "disableScroll": true,
    usingComponents: {
      'wux-toast': '/static/wux/toast/index',
      'wux-row': '/static/wux/row/index',
      'wux-col': '/static/wux/col/index',
      'wux-icon': '/static/wux/icon/index',
      'wux-button': '/static/wux/button/index',
      'wux-input': '/static/wux/input/index',
      'wux-image': '/static/wux/image/index',
      'wux-dialog': '/static/wux/dialog/index'
    }
  }
}, {
  path: 'pages/detail/index',
  name: 'detail',
  config: {
    navigationBarTitleText: '设备详情',
    usingComponents: {
      'wux-row': '/static/wux/row/index',
      'wux-col': '/static/wux/col/index',
      "wux-spin": "/static/wux/spin/index",
      "wux-calendar": "/static/wux/calendar/index"
    }
  }
}, {
  path: 'pages/my/index',
  name: 'my',
  config: {
    "disableScroll": true,
    navigationBarTitleText: '我的',
    usingComponents: {
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index'
    }
  }
}, {
  path: 'pages/login/index',
  name: 'login',
  config: {
    "disableScroll": true,
    navigationBarTitleText: '登录',
    usingComponents: {
      'wux-button': '/static/wux/button/index'
    }
  }
}, {
  path: 'pages/products/index',
  name: 'products',
  config: {
    navigationBarTitleText: '产品介绍'
  }
}, {
  path: 'pages/UnitedData/index',
  name: 'UnitedData',
  config: {
    navigationBarTitleText: '公司介绍'
  }
}, {
  path: 'pages/GatewayList/index',
  name: 'GatewayList',
  config: {
    navigationBarTitleText: '网关管理',
    usingComponents: {
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index',
      "wux-icon": "/static/wux/icon/index"
    }
  }
}]