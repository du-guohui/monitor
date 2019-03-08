import { log } from "util";

export function Special(val) {
  // 去掉特殊字符
  val = val.replace(/[\'\"\\\/\b\f\n\r\t\ \  \  ]/g, '');
  val = val.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/);
  return val;
}

export function QRCode(data) {

  function Ven(url) {
    //  验证devEui长度是否为16或32；
    if (url.length == '16' || url.length == '32') {
      return true;
    } else {
      return false;
    }
  }

  if (data.indexOf("gatewayId") != -1) {
    // 网关
    return data;
  } else if (data.indexOf("&") != -1) {
    // 新二维码解析
    let str = data.split("&");
    let list = new Array();
    let devEui = false;
    for (let i in str) {
      // if (str[i].indexOf("null") != -1 || str[i].indexOf("undefined") != -1) {
      if (str[i].indexOf("null") != -1) {
      } else {
        // 参数空值去除
        if (str[i].split("=")[1] != '') {
          // if (str[i].indexOf("devEui=") != -1 || str[i].indexOf(("deveui").toLowerCase()) != -1) {
          if (str[i].indexOf("devEui=") != -1) {
            devEui = Ven(Special(str[i].split('=')[1]));
          }
          list.push(Special(str[i]));
        }
      }
    }
    return devEui ? list.join("&") : false;
  } else {
    // 旧二维码解析
    let str = data.split(/[\n	 ]/);
    if (str.length == '2') {
      //二维码只有换行或空格符
      let appKey = Special(str[0]);
      let devEui = Special(str[1]);
      return Ven(devEui) ? `appKey=${appKey}&devEui=${devEui}` : false;
    } else if (str.length > '2') {
      //二维码appKey后面是空格，devEui里面有不规则字符,重组devEui
      let deveui = new Array();
      for (let i in str) {
        if (i > '0') {
          deveui.push(Special(str[i]));
        }
      }
      return Ven(deveui.join("")) ? `appKey=${str[0]}&devEui=${deveui.join("")}` : false;
    } else {
      // 都不符合匹配规则跳出
      return false;
    }
  }
}

export function formatDate(now) {
  function Completion(s) {
    return s < 10 ? '0' + s : s;
  }
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  return Completion(year) + '-' + Completion(month) + "-" + Completion(date) + " " + Completion(hour) + ":" + Completion(minute) + ":" + Completion(second);
}

export function ListCh(data, url) {
  //验证设备是否已添加
  let code = true;
  let key = url.split("&");
  let keys = '';
  for (let i in key) {
    if (key[i].split("=")[0] == 'devEui') {
      keys = key[i].split("=")[1];
    }
  }
  if (keys) {
    for (let s in data) {
      for (let z in data[s].device_list) {
        if (keys == data[s].device_list[z].devEui) {
          return false;
        }
      }
    }
    return code;
  }
}

export function GatewayCh(data, url) {
  //验证网关是否已添加
  let code = true;
  let key = url.split("=");
  return data.filter(item => item.mac == key[1]).length == "0";
}

export function ChartData(val, time, name) {
  let { temperature, sht30, humidity, light } = val;
  let arr1 = ChartList(ResType(temperature ? temperature : sht30), time, 'temperature', name);
  let arr2 = ChartList(ResType(humidity ? humidity : ''), time, 'humidity', name);
  let arr3 = ChartList(ResType(light ? light : ''), time, 'light', name);
  let data = arr1.concat(arr2, arr3);
  return data;
}

export function ChartList(val, time, type, name) {
  function Filter(data) {
    for (let i in data) {
      if (data[i].value == '') {
        delete data[i].value;
      }
    }
    return data;
  }
  var data = [{
    time: formatDate(new Date(Number(time))),
    value: val[0],
    types: type,
    type: name,
    res: 'avg'
  }, {
    time: formatDate(new Date(Number(time))),
    value: val[1],
    types: type,
    type: name,
    res: 'min'
  }, {
    time: formatDate(new Date(Number(time))),
    value: val[2],
    types: type,
    type: name,
    res: 'max'
  }]
  return Filter(data);
}


export function ResType(val) {
  let { avg, min, max } = val;
  let data = [avg ? avg : "", min ? min : "", max ? max : ""]
  return data;
}

export function Time(data) {
  function Completion(s) {
    return s < 10 ? '0' + s : s;
  }
  let date = new Date(Number(new Date(data)) - (wx.getStorageSync("Info") == 'ios' ? Number(8 * 60 * 60 * 1000) : 0));
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  let currentDate =
    Completion(month) +
    "-" +
    Completion(strDate) +
    " " +
    Completion(date.getHours()) +
    ":" +
    Completion(date.getMinutes());
  return currentDate;
}

export function Time2(data) {
  let date = new Date(data);
  return Number(new Date(date)) - (wx.getStorageSync("Info") == 'ios' ? Number(8 * 60 * 60 * 1000) : 0);
}

export default {
  QRCode,
  Special,
  formatDate,
  ListCh,
  ChartData,
  ResType,
  Time,
  Time2,
  GatewayCh
}