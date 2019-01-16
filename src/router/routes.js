module.exports = [{
  path: 'pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: '首页'
  }
}, {
  path: 'pages/list/index',
  name: 'list',
  config: {
    navigationBarTitleText: '设备列表',
    usingComponents: {
      "wux-toast": "../../wux/toast/index",
      "wux-row": "../../wux/row/index",
      "wux-col": "../../wux/col/index",
      "wux-grids": "../../wux/grids/index",
      "wux-grid": "../../wux/grid/index",
      "wux-icon": "../../wux/icon/index",
      "wux-tag": "../../wux/tag/index",
      "wux-button": "../../wux/button/index",
      "wux-search-bar": "../../wux/search-bar/index"
    }
  }
}, {
  path: 'pages/device/index',
  name: 'device',
  config: {
    usingComponents: {
      "wux-toast": "../../wux/toast/index",
      "wux-row": "../../wux/row/index",
      "wux-col": "../../wux/col/index",
      "wux-icon": "../../wux/icon/index",
      "wux-button": "../../wux/button/index",
      "wux-input": "../../wux/input/index",
      "wux-image": "../../wux/image/index",
      "wux-dialog": "../../wux/dialog/index"
    }
  }
}, {
  path: 'pages/detail/index',
  name: 'detail',
  config: {
    navigationBarTitleText: '详情',
    usingComponents: {
      "wux-tabs": "../../wux/tabs/index",
      "wux-tab": "../../wux/tab/index",
      "wux-button": "../../wux/button/index",
      "wux-image": "../../wux/image/index"
    }
  }
}, {
  path: 'pages/my/index',
  name: 'my',
  config: {
    navigationBarTitleText: '个人中心',
    usingComponents: {
      "wux-cell-group": "../../wux/cell-group/index",
      "wux-cell": "../../wux/cell/index"
    }
  }
}, {
  path: 'pages/login/index',
  name: 'login',
  config: {
    navigationBarTitleText: '登录',
    usingComponents: {
      "wux-button": "../../wux/button/index"
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
},]