module.exports = [{
  path: 'pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: '统计分析',
    usingComponents: {
      'wux-row': '/static/wux/row/index',
      'wux-col': '/static/wux/col/index',
      "wux-icon": "/static/wux/icon/index",
      "wux-select": "/static/wux/select/index",
      'ff-canvas': '/static/f2-canvas/f2-canvas',
      "wux-loading": "/static/wux/loading/index"
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
      "wux-icon": "/static/wux/icon/index",
      'wux-search-bar': '/static/wux/search-bar/index',
      "wux-accordion-group": "/static/wux/accordion-group/index",
      "wux-accordion": "/static/wux/accordion/index",
      "wux-loading": "/static/wux/loading/index"
    }
  }
}, {
  path: 'pages/alarm/index',
  name: 'alarm',
  config: {
    navigationBarTitleText: '报警信息',
    usingComponents: {
      "wux-card": "/static/wux/card/index",
      "wux-calendar": "/static/wux/calendar/index",
      "wux-loading": "/static/wux/loading/index"
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
      'wux-dialog': '/static/wux/dialog/index',
      "wux-select": "/static/wux/select/index",
      "wux-loading": "/static/wux/loading/index"
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
      'ff-canvas': '/static/f2-canvas/f2-canvas',
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index',
      "wux-loading": "/static/wux/loading/index"
    }
  }
}, {
  path: 'pages/detailAlarm/index',
  name: 'detailAlarm',
  config: {
    navigationBarTitleText: '报警信息',
    usingComponents: {
      "wux-card": "/static/wux/card/index",
      "wux-calendar": "/static/wux/calendar/index",
      "wux-loading": "/static/wux/loading/index"
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
      'wux-cell': '/static/wux/cell/index',
      "wux-loading": "/static/wux/loading/index"
    }
  }
}, {
  path: 'pages/login/index',
  name: 'login',
  config: {
    "disableScroll": true,
    navigationBarTitleText: '登录',
    usingComponents: {
      'wux-button': '/static/wux/button/index',
      "wux-loading": "/static/wux/loading/index"
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
    navigationBarTitleText: '企业介绍'
  }
}, {
  path: 'pages/system/index',
  name: 'system',
  config: {
    navigationBarTitleText: '系统介绍'
  }
}, {
  path: 'pages/GatewayList/index',
  name: 'GatewayList',
  config: {
    navigationBarTitleText: '网关管理',
    usingComponents: {
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index',
      "wux-icon": "/static/wux/icon/index",
      'wux-toast': '/static/wux/toast/index',
      "wux-loading": "/static/wux/loading/index"
    }
  }
}, {
  path: 'pages/GroupSetting/index',
  name: 'GroupSetting',
  config: {
    navigationBarTitleText: '分组管理',
    usingComponents: {
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index',
      "wux-icon": "/static/wux/icon/index",
      "wux-popup": "/static/wux/popup/index",
      'wux-button': '/static/wux/button/index',
      'wux-input': '/static/wux/input/index',
      'wux-toast': '/static/wux/toast/index',
      "wux-loading": "/static/wux/loading/index"
    }
  }
}, {
  path: 'pages/GroupList/index',
  name: 'GroupList',
  config: {
    navigationBarTitleText: '分组设置',
    usingComponents: {
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index',
      "wux-checkbox-group": "/static/wux/checkbox-group/index",
      "wux-checkbox": "/static/wux/checkbox/index",
      'wux-button': '/static/wux/button/index',
      'wux-dialog': '/static/wux/dialog/index',
      'wux-toast': '/static/wux/toast/index',
      'wux-input': '/static/wux/input/index',
      "wux-slider": "/static/wux/slider/index",
      "wux-switch": "/static/wux/switch/index",
      "wux-loading": "/static/wux/loading/index"
    }
  }
}, {
  path: 'pages/ShareList/index',
  name: 'ShareList',
  config: {
    navigationBarTitleText: '设备分享',
    usingComponents: {
      'wux-cell-group': '/static/wux/cell-group/index',
      'wux-cell': '/static/wux/cell/index',
      "wux-checkbox-group": "/static/wux/checkbox-group/index",
      "wux-checkbox": "/static/wux/checkbox/index",
      'wux-button': '/static/wux/button/index',
      'wux-dialog': '/static/wux/dialog/index',
      'wux-toast': '/static/wux/toast/index',
      "wux-loading": "/static/wux/loading/index"
    }
  }
}]